import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-content">
        

        <motion.div 
          className="logo"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          
          style={{ 
            width: '30px',   
            height: '30px',   
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'center',
            flexShrink: 0      
          }}
        >
          <img 
            src="/images/azryan.png" 
            alt="Logo NFA" 
            style={{ 
              height: '100%',   
              width: '100%',   
              objectFit: 'cover' 
            }} 
          />
        </motion.div>
        {/* ----------------------------- */}
        
        <nav className="nav">
          <a onClick={() => scrollToSection('home')} className="nav-link">Home</a>
          <a onClick={() => scrollToSection('projects')} className="nav-link">Projects</a>
          <a onClick={() => scrollToSection('tech-stack')} className="nav-link">Tech Stack</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;