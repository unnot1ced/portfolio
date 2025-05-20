import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const Footer = () => {
  const year = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>{t.get_in_touch}</h2>
            <p>{t.interested}</p>
            <a href="mailto:mrj.lassing@gmail.com" className="email-link">mrj.lassing@gmail.com</a>
            
            <div className="social-links">
              <a href="https://github.com/unnot1ced" className="social-link" aria-label="GitHub">GitHub</a>
              <a href="https://stackexchange.com/users/40976790/mika" className="social-link" aria-label="stackoverflow">stackoverflow</a>
              <a href="https://x.com/SilentDevs" className="social-link" aria-label="Twitter">Twitter</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="footer-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{t.location}</h3>
            <p>{t.netherlands}</p>
            
            <h3 style={{marginTop: "2rem"}}>{t.currently_available}</h3>
            <p>{t.collaborations}</p>
          </motion.div>
        </div>
        
        <motion.p 
          className="footer-copyright"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          © {year} unnot1ced. {t.rights_reserved}
        </motion.p>
      </div>
    </section>
  );
};

export default Footer;
