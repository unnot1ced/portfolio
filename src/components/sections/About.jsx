import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const t = translations[language];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };
  
  return (
    <section id="about" className="about" ref={ref}>
      <div className="circle-decoration" style={{ width: '500px', height: '500px', left: '-250px', top: '30%' }}></div>
      
      <div className="container about-container">
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants}>{t.about_title}</motion.h2>
          
          <motion.p variants={itemVariants}>
            {t.about_p1}
          </motion.p>
          
          <motion.p variants={itemVariants}>
            {t.about_p2}
          </motion.p>
          
          <motion.p variants={itemVariants}>
            {t.about_p3}      
          </motion.p>
          
          <motion.div variants={itemVariants} style={{ marginTop: '2rem' }}>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button>{t.lets_connect}</button>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: 100, rotateY: 10 }}
          animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 100, rotateY: 10 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="experience-tag">
            <span>3+</span>
            <span>{t.years}</span>
          </div>
          <img src="https://iili.io/3syyBGn.png" alt="python" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
