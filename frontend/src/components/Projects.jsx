import React, { useState } from 'react'; // Tambah useState
import { motion, useInView, AnimatePresence } from 'framer-motion'; // Tambah AnimatePresence
import { ExternalLink, Github, X } from 'lucide-react'; // Tambah icon X (Close)
import { projectsData } from '../data/mock';
import './Projects.css';

const Projects = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // 1. STATE BARU: Untuk menyimpan gambar yang sedang diklik
  const [selectedImage, setSelectedImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        {/* ... Header Title ... (Tidak berubah) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 className="section-title">Featured Projects</motion.h2>
          <div className="title-underline" style={{ width: isInView ? '80px' : 0, transition: '0.8s' }} />
          <p className="section-subtitle">A collection of projects that showcase my skills and experience</p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* 2. UPDATE: Tambahkan onClick di container gambar */}
              <motion.div 
                className="project-image-container"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(project.image)} // <--- AKSI KLIK DISINI
                style={{ cursor: 'zoom-in' }} // Ubah kursor jadi kaca pembesar
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-image-overlay">
                  <motion.div 
                    className="view-project-text"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    Click to Zoom
                  </motion.div>
                </div>
              </motion.div>
              
              {/* ... Bagian Content Text ... (Tidak berubah) */}
              <div className="project-content">
                <div className="project-header">
                   {/* ... Icon Links ... */}
                   <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 3. KOMPONEN MODAL (POPUP) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="image-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Klik background untuk tutup
          >
            <motion.div 
              className="image-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Supaya klik gambar tidak menutup modal
            >
              <button className="close-modal-btn" onClick={() => setSelectedImage(null)}>
                <X size={24} />
              </button>
              <img src={selectedImage} alt="Full Project" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;