import { useState, useEffect } from 'react';

const MobileMenu = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
        <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              onClick={closeMenu}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
