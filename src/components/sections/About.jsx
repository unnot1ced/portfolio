import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
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
          <motion.h2 variants={itemVariants}>About Me</motion.h2>
          
          <motion.p variants={itemVariants}>
          I build stuff with both design and development in mind - making sure it works well and feels right. 
          I care a lot about the user’s experience, probably more than I should sometimes.
          </motion.p>
          
          <motion.p variants={itemVariants}>
          I’ve always been fascinated by how design and technology can come together to solve real-world problems. 
          That curiosity has kept me learning, experimenting, and pushing myself to explore new tech and design principles.
          </motion.p>
          
          <motion.p variants={itemVariants}>
          I specialize in both front-end and back-end development, building responsive, 
          secure websites and apps that actually work the way they’re supposed to.       
          </motion.p>
          
          <motion.div variants={itemVariants} style={{ marginTop: '2rem' }}>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button>Let's Connect</button>
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
            <span>Years</span>
          </div>
          <img src="https://iili.io/3cGq3VS.md.jpg" alt="saber:)" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
