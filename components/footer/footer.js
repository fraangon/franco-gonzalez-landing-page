import styles from './footer.module.css'

export default function Footer() {
    return (
      <div className={styles.footer}>
        <p>Logo</p>
        <p>© 2020</p>
        <div>
            <p>Logos social media sites. </p>
        </div>
      </div>
    )
  }