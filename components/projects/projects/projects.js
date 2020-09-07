import styles from './projects.module.css'
import { motion } from 'framer-motion'
// import ProjectsItems from '../projects_items/projects_items'
import { animationProject, projectTitleAnimation, projectSubtitleAnimation } from './projects_animations'
import dynamic from 'next/dynamic'

const ProjectsItems = dynamic( 
  () => import('../projects_items/projects_items'),
  { ssr: false } 
);


export default function Projects() {
  return (
    <motion.div
      exit="exit"
      initial="initial"
      animate="animate"
      variants={animationProject}
    >
      <div className={styles.projects}>
        <div className={styles.addMargin}>
          
          <motion.h3 
            exit="exit"
            initial="initial"
            animate="animate"
            variants={projectTitleAnimation}
            className={styles.title}
          >
            Projects.
          </motion.h3>
          
          <motion.h4 
            exit="exit"
            initial="initial"
            animate="animate"
            variants={projectSubtitleAnimation}
            className={styles.subtitle}
          >
            Freelance works and personal proyects.
          </motion.h4>
          
          <div className={styles.slider}>
            <ProjectsItems />
          </div>
        
        </div>
      </div>
    </motion.div>
  );
}

