import { motion } from 'framer-motion';

const ProjectCard = ({ project, delay }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Live Demo →
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View Code →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Multiplayer quiz website (local)",
      description: "A multiplayer quiz website where users can create and join quizzes.",
      image: "https://iili.io/3cAyc1s.jpg",
      tags: ["React", "Node.js", "SocketIO", "JavaScript"],
      github: "https://github.com/unnot1ced/InGesprekMetGLR"
    },
    {
      title: "crud app",
      description: "A simple CRUD application where u can add, look in detail and delete items",
      image: "https://iili.io/3cADLOP.png",
      tags: ["PHP", "HTML", "CSS"],
      demo: "https://101176.stu.sd-lab.nl/projectweek3/program2/index.php",
      github: "#"
    },
    {
      title: "Python projects",
      description: "A page with all my python projects",
      image: "https://iili.io/3cApVig.jpg",
      tags: ["React", "Python", "CSS"],
      site: "#",
      github: "https://github.com/unnot1ced/PythonProjects"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Here are some of my recent work and passion projects.
        </motion.p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              project={project}
              delay={0.1 + (index * 0.1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
