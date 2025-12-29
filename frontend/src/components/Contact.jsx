import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Youtube, Instagram, Facebook } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail size={28} />,
      title: 'Email',
      value: 'naufalfaiqazryan@gmail.com',
      link: 'mailto:naufalfaiqazryan@gmail.com'
    },
    {
      icon: <Github size={28} />,
      title: 'GitHub',
      value: '@ryanazryan',
      link: 'https://github.com/ryanazryan'
    },
    {
      icon: <Linkedin size={28} />,
      title: 'LinkedIn',
      value: 'naufalazryan',
      link: 'https://linkedin.com/in/naufalazryan'
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={24} />, link: 'https://www.facebook.com/naufalazryan/', label: 'Facebook' },
    { icon: <Instagram size={24} />, link: 'https://www.instagram.com/naufalazryan/', label: 'Instagram' },
    { icon: <Youtube size={24} />, link: 'https://www.youtube.com/@naufalazryan', label: 'YouTube' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">Feel free to reach out for collaborations or just a friendly chat</p>
        </motion.div>

        <motion.div 
          className="contact-methods"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="contact-icon">
                {method.icon}
              </div>
              <h3 className="contact-title">{method.title}</h3>
              <p className="contact-value">{method.value}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="social-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="social-title">Find me on other platforms</p>
          <div className="social-links-grid">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                className="social-link-card"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.2 }}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;