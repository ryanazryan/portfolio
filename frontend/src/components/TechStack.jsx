import React from 'react';
import { motion, useInView } from 'framer-motion';
import { techStackData } from '../data/mock';
import './TechStack.css';

const TechStack = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="tech-stack" className="tech-stack" ref={ref}>
      <div className="tech-stack-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tech Stack
          </motion.h2>
          <motion.div
            className="title-underline"
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technologies I use to build amazing products
          </motion.p>
        </motion.div>

        <div className="tech-categories">
          {techStackData.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="tech-category"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + catIndex * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.h3 
                className="category-title"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.5 + catIndex * 0.1 }}
              >
                {category.category}
              </motion.h3>
              <motion.div 
                className="tech-items"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    className="tech-item"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -4,
                      transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="tech-name">{tech}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;