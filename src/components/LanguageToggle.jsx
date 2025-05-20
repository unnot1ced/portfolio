import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <button 
      className="language-toggle" 
      onClick={toggleLanguage} 
      aria-label="Toggle language"
    >
      {language === 'en' ? 'NL' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
