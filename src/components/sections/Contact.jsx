import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
