import styles from './home.module.css'

export default function Home({ children, home }) {
    return (
      <div className={styles.home}>
        <div>
            <h2>I,m </h2><h1>Franco Gonzalez</h1><h2> .</h2>
        </div>
        <div>
            <h2>Motion graphics designer and</h2>
            <h2>web developer.</h2>
        </div>
      </div>

    )
  }