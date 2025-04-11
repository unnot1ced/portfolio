import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark-mode');
    setIsDarkMode(isDark);
    
    const handleThemeChange = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark-mode'));
    };
    
    window.addEventListener('themechange', handleThemeChange);
    return () => window.removeEventListener('themechange', handleThemeChange);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
    
    setIsDarkMode(!isDarkMode);
    window.dispatchEvent(new Event('themechange'));
  };

  return (
    <button className="mode-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
      {isDarkMode ? (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-15a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zM5 12a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H5zm15 0a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1zM6.36 7.05a1 1 0 0 1-.71-1.7l.71-.71a1 1 0 0 1 1.41 1.41l-.7.71a1 1 0 0 1-.71.29zm12.02 12.02a1 1 0 0 1-.71-1.7l.71-.71a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-.7.29zM6.34 19.06a1 1 0 0 1-.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1-.71 1.7zm12.03-12.03a1 1 0 0 1-.7-.29l-.72-.71a1 1 0 0 1 1.42-1.41l.7.71a1 1 0 0 1-.7 1.7z" />
        </svg>
      ) : (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12.79 21a8.96 8.96 0 0 1-3.59-.76 9 9 0 0 1-5.44-8.3c0-4.97 4.05-9 9.03-8.99.45 0 .9.03 1.33.1a1.01 1.01 0 0 1 .8 1.19.99.99 0 0 1-.76.77c-3.4.61-5.33 3.25-5.35 6.08a6.13 6.13 0 0 0 6.04 6.15c2.83-.02 5.45-1.96 6.05-5.36a.99.99 0 0 1 .76-.75c.3-.07.62.01.85.23.23.22.32.54.26.84A9.03 9.03 0 0 1 12.79 21z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
