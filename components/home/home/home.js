import styles from './home.module.css'
import MotionAnimation from '../motion_animation/motion_animation'
import WebAnimation from '../web_animation/web_animation'
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic'
import {easing, animationName, animationMotion, animationWeb, animationBG, stagger} from './home_animation'


export default function Home({ children, home }) {
    
  return (
    <div>
      <div 
        className={styles.contaner_fix_pos}
      >

        <div 
          className={styles.home}
        >
          <motion.div
            variants={stagger}
            animate='animate'
          >
            <motion.div 
              exit='exit'
              initial='initial'
              animate='animate'
              variants={animationName}
              className={styles.title}
            >
                <h2 className={styles.title_regular}>I,m </h2>
                <h1 className={styles.title_bold}>Franco</h1>
                <h1 className={styles.title_bold}>Gonzalez</h1>
                <h2 className={styles.title_regular}> .</h2>
            </motion.div>

            <motion.div
              exit='exit'
              initial='initial'
              animate='animate'
              variants={animationMotion}
              className={styles.animation_text}
            >
              <MotionAnimation/>
            </motion.div>

            <motion.div
              exit='exit'
              initial='initial'
              animate='animate'
              variants={animationWeb}
              className={styles.animation_text}
            >
              <WebAnimation/>
            </motion.div>

          </motion.div>
        </div>
      </div>

    </div>
    )
  }