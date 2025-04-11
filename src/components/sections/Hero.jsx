import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const phrases = ['Frontend Developer', 'Backend Developer', 'Problem Solver'];
  const isDeleting = useRef(false);
  const typingSpeed = useRef(150);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[index];
      
      if (!isDeleting.current) {
        setText(currentPhrase.substring(0, text.length + 1));
        typingSpeed.current = 150;
        
        if (text === currentPhrase) {
          isDeleting.current = true;
          typingSpeed.current = 1000; 
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        typingSpeed.current = 50;
        
        if (text === '') {
          isDeleting.current = false;
          setIndex((index + 1) % phrases.length);
          typingSpeed.current = 500; 
        }
      }
    }, typingSpeed.current);
    
    return () => clearTimeout(timeout);
  }, [text, index, phrases]);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-subtitle"
          >
            Portfolio
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hello, I'm <span>unnot1ced</span>
          </motion.h1>
          
          <motion.div 
            className="typing-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>
              <span>I'm a</span> <span style={{ color: 'var(--accent-color)' }}>{text}</span>
              <span className="cursor"></span>
            </h3>
          </motion.div>
          
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting thoughtful digital experiences with attention to detail and a focus on user experiences.
          </motion.p>
          
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a 
              href="#projects"
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button>View Projects</button>
            </motion.a>
            <motion.a 
              href="#about"
              onClick={() => scrollToSection('about')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="secondary">About Me</button>
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="scroll-down-icon"></div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
