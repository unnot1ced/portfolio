import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', mouseMove);
    
    const mouseLinkEnter = () => setCursorVariant('link');
    const mouseLinkLeave = () => setCursorVariant('default');
    
    const mouseButtonEnter = () => setCursorVariant('button');
    const mouseButtonLeave = () => setCursorVariant('default');
    
    // Add event listeners to all links and buttons
    const links = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');
    
    links.forEach(link => {
      link.addEventListener('mouseenter', mouseLinkEnter);
      link.addEventListener('mouseleave', mouseLinkLeave);
    });
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', mouseButtonEnter);
      button.addEventListener('mouseleave', mouseButtonLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', mouseLinkEnter);
        link.removeEventListener('mouseleave', mouseLinkLeave);
      });
      
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', mouseButtonEnter);
        button.removeEventListener('mouseleave', mouseButtonLeave);
      });
    };
  }, []);
  
  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: 'rgba(108, 99, 255, 0.1)',
      border: '1px solid rgba(108, 99, 255, 0.6)',
      transition: {
        type: 'spring',
        mass: 0.3,
        damping: 15
      }
    },
    link: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: 'rgba(108, 99, 255, 0.1)',
      border: '1px solid rgba(108, 99, 255, 0.9)',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        mass: 0.3,
        damping: 15
      }
    },
    button: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      height: 50,
      width: 50,
      backgroundColor: 'rgba(108, 99, 255, 0.15)',
      border: '1px solid rgba(108, 99, 255, 0.8)',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        mass: 0.3,
        damping: 15
      }
    }
  };
  
  // Only show custom cursor on desktop
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) return null;
  
  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      style={{
        position: 'fixed',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
};

export default Cursor;
