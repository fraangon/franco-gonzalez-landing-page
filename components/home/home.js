import styles from './home.module.css'

export default function Home({ children, home }) {
    return (
      <div className={styles.home}>
        <div className={styles.title}>
            <h2 className={styles.title_regular}>I,m </h2>
            <h1 className={styles.title_bold}>Franco</h1>
            <h1 className={styles.title_bold}>Gonzalez</h1>
            <h2 className={styles.title_regular}> .</h2>
        </div>
        <div>
            <h2 className={styles.subtitle}>Motion graphics designer and</h2>
            <h2 className={styles.subtitle}>web developer.</h2>
        </div>
      </div>

    )
  }