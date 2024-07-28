require('dotenv').config(); // Load environment variables from .env file
const express = require('express'); // Importing Express for server creation
const cors = require('cors'); // Importing CORS for Cross-Origin Resource Sharing
const mongoose = require('mongoose'); // Importing Mongoose for MongoDB interaction
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const User = require('./Models/User'); // Importing the User model
const { generatePIN, generateAccountNumber } = require('./Utils/accountUtils'); // Importing utility functions

const app = express(); // Initializing the Express application
const port = process.env.PORT || 5000; // Defining the port from environment variables or default to 5000

// Middleware to parse JSON
app.use(express.json()); // Middleware to parse incoming JSON requests
app.use(cors()); // Middleware to enable CORS

// MongoDB connection
mongoose.connect(process.env.DB_URL) // Connecting to MongoDB using the URL from environment variables
  .then(() => {
    console.log('MongoDB connection successful');
    console.log('Connected to database:', mongoose.connection.name);
  })
  .catch((err) => console.error('MongoDB connection error:', err));

// Sample route
app.get('/api', (req, res) => {
  res.send({ message: 'Hello from the server!' }); // Sending a response with a message
});

// API endpoint to handle sign up
app.post('/api/signup', async (req, res) => {
  console.log('Received a request to /api/signup');
  console.log('Request body:', req.body); // Logging the request body
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash the password
    const newUser = new User({
      ...req.body,
      password: hashedPassword, // Store the hashed password
      pin: generatePIN(), // Generate and store a PIN
      accountNumber: generateAccountNumber() // Generate and store an account number
    });
    await newUser.save(); // Saving the new user to the database
    console.log('User saved to database:', newUser);
    res.status(201).send({ 
      message: 'User created successfully', 
      user: {
        fullname: newUser.fullname,
        email: newUser.email,
        tel: newUser.tel,
        accountNumber: newUser.accountNumber,
        pin: newUser.pin
      }
    }); // Sending success response with PIN and account number
  } catch (error) {
    console.error('Error creating user:', error); // Logging error if user creation fails
    res.status(400).send({ error: 'Error creating user' }); // Sending error response
  }
});

app.post('/api/verify', async (req, res) => {
  const { type, value } = req.body;

  try {
    let user;
    if (type === 'pin') {
      user = await User.findOne({ pin: value });
    } else if (type === 'password') {
      user = await User.findOne({ email: value }); // Assuming email is used for password login
      if (user) {
        const isMatch = await bcrypt.compare(value, user.password);
        if (!isMatch) user = null;
      }
    }

    res.json({ isValid: !!user });
  } catch (error) {
    console.error('Error verifying credentials:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Starting the server and logging the port
});
