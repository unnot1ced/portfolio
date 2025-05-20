import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';

const ProjectCard = ({ project, delay, t }) => {
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
              {t.live_demo}
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              {t.view_code}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const projectData = t.project_items;
  
  const projectMeta = [
    {
      image: "https://iili.io/3cAyc1s.jpg",
      github: "https://github.com/unnot1ced/InGesprekMetGLR"
    },
    {
      image: "https://iili.io/3cADLOP.png",
      site: "#",
      github: "https://github.com/unnot1ced/crud"
    },
    {
      image: "https://iili.io/3cApVig.jpg",
      site: "#",
      github: "https://github.com/unnot1ced/pycordbot"
    }
  ];
  
  const projects = projectData.map((project, index) => ({
    ...project,
    ...projectMeta[index]
  }));

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t.projects_title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {t.projects_subtitle}
        </motion.p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              delay={0.1 + (index * 0.1)}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
