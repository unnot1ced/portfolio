import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const isDeleting = useRef(false);
  const typingSpeed = useRef(150);
  const phrases = t.roles;
  const timeoutRef = useRef(null);
  
  const handleTyping = () => {
    const currentPhrase = phrases[index % phrases.length];
    
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
    
    timeoutRef.current = setTimeout(handleTyping, typingSpeed.current);
  };
  
  // Some debug for the typing effect I will continue this later so its fully done
  useEffect(() => {
    timeoutRef.current = setTimeout(handleTyping, typingSpeed.current);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, index, phrases]);
  
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    setText('');
    setIndex(0);
    isDeleting.current = false;
    
    timeoutRef.current = setTimeout(() => {
      handleTyping();
    }, 500);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [language]);
  
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
            {t.portfolio}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.hello} <span>unnot1ced</span>
          </motion.h1>
          
          <motion.div 
            className="typing-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>
              <span>{t.im_a}</span> <span style={{ color: 'var(--accent-color)' }}>{text}</span>
              <span className="cursor"></span>
            </h3>
          </motion.div>
          
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t.subtitle}
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
              <button>{t.view_projects}</button>
            </motion.a>
            <motion.a 
              href="#about"
              onClick={() => scrollToSection('about')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="secondary">{t.about_me}</button>
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
        <span>{t.scroll_down}</span>
      </motion.div>
    </section>
  );
};

export default Hero;
