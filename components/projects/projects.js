import styles from './projects.module.css'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
// import {Stack, Frame} from 'framer'


const Stack = dynamic(
  () => import('framer').then((mod) => mod.Stack),
  { ssr: false }
)
const Frame = dynamic(
  () => import('framer').then((mod) => mod.Frame),
  { ssr: false }
)


const names = ['Name project 1', 'Name project 2', 'Name project 3', 'Name project 4', 'Name project 5'];

export default function Projects() {
    return (<motion.div >

      <div className={styles.projects}>
          
          <div className={styles.addMargin}>

            <h3 className={styles.title}>Projects.</h3>
        
            <h4 className={styles.subtitle}>Freelance works and personal proyects.</h4>

            <div className={styles.slider}>
              <Stack size={100} direction="horizontal" alignment="start" gap='40' distribution="start">

                {names.map(name => (
                <Frame backgroundColor='#180233' height={'50vh'} width={'40vh'} className={styles.project_item}>
                
                  <div className={styles.project_item_text}>
                    <h3>{name}</h3>
                    <h4>Type of project</h4>
                  </div>

                  <img src='/Min_projects.png' alt='min' className={styles.img_min}></img>

                </Frame>
                  
                ))}

              </Stack>
            </div>

          </div>
       
      </div>

    </motion.div>  
    )
  }

