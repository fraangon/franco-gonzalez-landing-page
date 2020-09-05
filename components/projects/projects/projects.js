import styles from './projects.module.css'
import { motion } from 'framer-motion'
import ProjectsItems from '../projects_items/projects_items'
import BgScroll from '../../home/bg_scroll/bg_scroll'


export default function Projects() {
    return (<motion.div >

      <div className={styles.projects}>
          
          <div className={styles.addMargin}>

            <h3 className={styles.title}>Projects.</h3>
        
            <h4 className={styles.subtitle}>Freelance works and personal proyects.</h4>

            <div className={styles.slider}>
              <ProjectsItems/>
            </div>

          </div>
       
      </div>

    </motion.div>  
    )
  }

