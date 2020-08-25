import styles from './social_logos.module.css';
import Link from 'next/link';

export default function SocialLogos() {
    return (
        <div className={styles.contenedor}>
            <Link href='#'>
                <img src='/sw_icons_svg/BE.svg' alt='Behanse' className={styles.logo} ></img>
            </Link>
            <Link  href='#'>
                <img src='/sw_icons_svg/Dribble.svg' alt='Dibble' className={styles.logo} ></img>
            </Link>
            <Link  href='#'>
                <img src='/sw_icons_svg/Insta.svg' alt='Instagram' className={styles.logo} ></img>
            </Link>
            <Link  href='#'> 
                <img src='/sw_icons_svg/Linked inn.svg'  alt='Linked Inn' className={styles.logo} ></img>
            </Link>
            <Link  href='#'>
                <img src='/sw_icons_svg/Tw.svg' alt='Twitter' className={styles.logo}></img>
            </Link>
        </div>
    )
}
