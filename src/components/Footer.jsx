import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();
  
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
            <h2>Get In Touch</h2>
            <p>Interested in working together? Feel free to reach out for collaborations or just a friendly hello :)</p>
            <a href="mailto:githubsilent@gmail.com" className="email-link">githubsilent@gmail.com</a>
            
            <div className="social-links">
              <a href="https://github.com/unnot1ced" className="social-link" aria-label="GitHub">GitHub</a>
              <a href="https://discord.com/channels/@me" className="social-link" aria-label="Discord">Discord</a>
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
            <h3>Location</h3>
            <p>The Netherlands</p>
            
            <h3 style={{marginTop: "2rem"}}>Currently Available For</h3>
            <p>Collaborations and small projects!</p>
          </motion.div>
        </div>
        
        <motion.p 
          className="footer-copyright"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          © {year} unnot1ced. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
};

export default Footer;
