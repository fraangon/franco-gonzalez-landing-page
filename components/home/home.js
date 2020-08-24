import styles from './home.module.css'
import Background from './background.js'
import MotionAnimation from './motion_animation'
import WebAnimation from './web_animation'

export default function Home({ children, home }) {
    return (<div>
      <div className={styles.contaner_fix_pos}>

        <div className={styles.home}>
          <div className={styles.title}>
              <h2 className={styles.title_regular}>I,m </h2>
              <h1 className={styles.title_bold}>Franco</h1>
              <h1 className={styles.title_bold}>Gonzalez</h1>
              <h2 className={styles.title_regular}> .</h2>
          </div>
          <div>
            <MotionAnimation/>
            <WebAnimation/>
          </div>
        </div>

        <div className={styles.fix_pos}>
          <Background/>
        </div>
      
      </div>
      
      </div>)
  }