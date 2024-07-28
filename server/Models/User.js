//Models/User.js
const mongoose = require('mongoose'); // Importing Mongoose
const validator = require('validator'); // Import validator for data validation

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true }, // Full name is required
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    validate: {
      validator: validator.isEmail, // Validate email format
      message: props => `${props.value} is not a valid email!`
    }
  },
  tel: { 
    type: String, 
    required: true,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v); // Validate phone number format
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  password: { type: String, required: true }, // Password is required
  pin: { type: String, required: true }, // PIN is required
  accountNumber: { type: String, required: true, unique: true } // Account number is required and must be unique
});

userSchema.index({ email: 1 }); // Index email field for faster querying

const User = mongoose.model('User', userSchema); // Creating the User model from the schema

module.exports = User; // Exporting the User model
