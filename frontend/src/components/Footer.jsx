import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div
              className="footer-logo"
              style={{ display: "inline-block", marginBottom: "12px" }}
            >
              <img
                src="/images/azryan.png"
                alt="Logo NFA"
                style={{
                  height: "50px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>

            <p className="footer-tagline">
              Building modern interfaces and scalable systems
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <a href="#home" className="footer-link">
                Home
              </a>
              <a href="#projects" className="footer-link">
                Projects
              </a>
              <a href="#tech-stack" className="footer-link">
                Tech Stack
              </a>
              <a href="#contact" className="footer-link">
                Contact
              </a>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Connect</h4>
              <a
                href="https://github.com/ryanazryan"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/naufalazryan"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="mailto:naufalfaiqazryan@gmail.com"
                className="footer-link"
              >
                <Mail size={18} /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Naufal Faiq Azryan. Built with{" "}
            <span className="text-blue-500">React</span> &{" "}
            <span className="text-purple-500">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
