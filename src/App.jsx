import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import { useLanguage } from './context/LanguageContext';
import { translations } from './utils/translations';

import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Footer from './components/Footer';
import Particles from './components/Particles';
import Preloader from './components/Preloader';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import MobileMenu from './components/MobileMenu';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const navLinks = [
    { text: t?.home || 'Home', url: '#home' },
    { text: t?.about || 'About', url: '#about' },
    { text: t?.projects || 'Projects', url: '#projects' },
    { text: t?.contact || 'Contact', url: '#contact' }
  ];

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <>
            <header className="navbar">
              <div className="navbar-container">
                <a href="#" className="logo">unnot1ced</a>
                <nav className="nav-links">
                  {navLinks.map((link, index) => (
                    <a key={index} href={link.url}>{link.text}</a>
                  ))}
                </nav>
                <MobileMenu navLinks={navLinks} />
              </div>
            </header>
            
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Particles />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              >
                <Hero />
                <About />
                <Projects />
                <Footer />
              </motion.div>
            </motion.main>
            <div className="toggle-container">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

const AppWithLanguage = () => (
  <LanguageProvider>
    <App />
  </LanguageProvider>
);

export default AppWithLanguage;
