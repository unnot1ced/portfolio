import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--background)',
        zIndex: 9999
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
          }}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '4px solid transparent',
            borderTop: '4px solid var(--primary)',
            borderRight: '4px solid var(--accent1)',
            borderBottom: '4px solid var(--secondary)',
            borderLeft: '4px solid var(--accent3)',
            marginBottom: '2rem'
          }}
        />
        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            background: 'linear-gradient(90deg, var(--primary) 0%, var(--accent1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}
        >
          Loading...
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
