import styles from './footer.module.css'
import SocialLogos from '../social_logos/social_logos.js'

export default function Footer() {
    return (
      <div className={styles.footer}>

        <img src='/fg_logo.svg' alt="Logo" className={styles.logo} ></img>

        <div>
            <SocialLogos/>
        </div>

      </div>
    )
  }