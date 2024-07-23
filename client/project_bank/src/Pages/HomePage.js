// HomePage.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../css/homepage.css';
import '../css/homePageMobile.css';
import { staggerChildren, fadeInAnimation } from '../Components/animationUtils';

function HomePage({ isMenuOpen }) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <div
          className='home'
        >
          <motion.div className="menu-list" variants={staggerChildren}>
            <motion.h2 variants={fadeInAnimation}>
            <Link to="/about" className='menu-link'>About Us</Link>
            </motion.h2>
            <motion.h2 variants={fadeInAnimation}>
            <Link to="/account" className='menu-link'>Account</Link>
            </motion.h2>
            <motion.h2 variants={fadeInAnimation}>
            <Link to="/contact" className='menu-link'>Contact Us</Link>
            </motion.h2>

            <motion.h1 variants={fadeInAnimation}>
              <Link to="/career" className='menu-link'> Career </Link>
              </motion.h1>
          </motion.div>
          <motion.div className="location" variants={fadeInAnimation}>
            <div className="cards">
              <div className="header">Lagos</div>
              <div className="address">117, Broad Street Lagos Island, Nigeria</div>
            </div>
            <div className="cards">
              <div className="header">Ibadan</div>
              <div className="address">Plot 7A, Queen Cinema Dugbe - Ibadan, Nigeria</div>
            </div>

            <div className="cards">
              <div className="header">Ondo</div>
              <div className="address">230, Obafemi  Awolowo Way - Alagbaka , Akure - Ondo, Nigeria</div>
            </div>

            <div className="cards">
              <div className="header">Oshogbo</div>
              <div className="address">23, New Ikirun Road, Aiyetoro - Osun, Nigeria</div>
            </div>

            <div className="cards">
              <div className="header">Ibafo</div>
              <div className="address"> 410, Redeemers Crescent , Ogun, Nigeria</div>
            </div>
            <div className="cards">
              <div className="header">Eleyele</div>
              <div className="address"> Plot 5A, Eleyele Interchange, Ibadan, Nigeria</div>
            </div>
            <div className="cards">
              <div className="header">Isale Eko</div>
              <div className="address"> 30B, Idumota Market, Lagos, Nigeria</div>
            </div>
            <div className="cards">
              <div className="header">Ojuwoye Provisions Market</div>
              <div className="address"> 142, New Mushin Road, Lagos, Nigeria</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default HomePage;