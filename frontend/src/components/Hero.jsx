import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Code2, Laptop } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.03,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const name = "Naufal Faiq Azryan";

  return (
    <section id="home" className="hero">
      {/* Animated Background Elements */}
      <motion.div 
        className="bg-element bg-element-1"
        style={{ y: y1, opacity }}
      />
      <motion.div 
        className="bg-element bg-element-2"
        style={{ y: y2, opacity }}
      />
      <motion.div 
        className="bg-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="hero-greeting">Hi, I'm</span>
          </motion.div>
          
          <h1 className="hero-name">
            {name.split('').map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          
          <motion.h2 
            className="hero-role"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={name.length * 0.03 + 0.7}
          >
            Fullstack Developer (Web & Mobile)
          </motion.h2>
          
          <motion.div
            className="hero-tagline-container"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={name.length * 0.03 + 0.9}
          >
            <p className="hero-tagline">
              Modern interfaces. Scalable systems.
            </p>
            <motion.div 
              className="tagline-underline"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: name.length * 0.03 + 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: name.length * 0.03 + 1.3, duration: 0.6 }}
          >
            <motion.button 
              className="btn-primary"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              View Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </motion.button>
            
            <motion.a
              href="https://github.com/ryanazryan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Github size={20} />
              GitHub
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: name.length * 0.03 + 1.5, duration: 0.6 }}
          >
            {[
              { icon: <Github size={24} />, link: 'https://github.com/ryanazryan' },
              { icon: <Linkedin size={24} />, link: 'https://linkedin.com/in/naufalazryan' },
              { icon: <Mail size={24} />, link: 'mailto:naufalfaiqazryan@gmail.com' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        {/* Animated Illustration Area */}
        <motion.div 
          className="hero-illustration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="illustration-container"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="code-block code-block-1"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="code-line" />
              <div className="code-line" />
              <div className="code-line short" />
            </motion.div>
            
            <motion.div 
              className="code-block code-block-2"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="code-line" />
              <div className="code-line short" />
              <div className="code-line" />
            </motion.div>
            
            <motion.div 
              className="floating-icon floating-icon-1"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut"
              }}
            >
              <Code2 size={32} />
            </motion.div>
            
            <motion.div 
              className="floating-icon floating-icon-2"
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3.5,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <Laptop size={32} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;