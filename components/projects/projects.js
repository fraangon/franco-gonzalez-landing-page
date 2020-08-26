import styles from './projects.module.css'
import Footer from '../footer/footer/footer'
import { motion } from 'framer-motion'

export default function Projects() {
    return (
      <motion.div exit=
        {{ 
          opacity: 0
        }}
      >

        <div className={styles.projects} >
          <h3>Projects.</h3>
          <h4>Freelance works and personal proyects.</h4>
          <div>
              <p>Slider with projects.</p>
          </div>
          <Footer/>
        </div>

      </motion.div>
    )
  }