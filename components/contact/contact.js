import styles from "./contact.module.css"
import { Frame, FramerAnimation } from "framer";
import { getWindowWidth, getWindowHeight } from '../window/window_dimensions.js';
import Link from 'next/link';

export default function Contact() {
    const widthLayer = Math.min( getWindowWidth(), 1920 )
    const heightLayer = getWindowHeight()
    const social =  
    [
        {
            link: '',
            src: '/sw_icons_svg/BE.svg',
            alt: 'logo behanse'
        },
        {
            link: '',
            src: '/sw_icons_svg/Insta.svg',
            alt: 'logo behanse'
        },
        {
            link: '',
            src: '/sw_icons_svg/Linked.svg',
            alt: 'logo behanse'
        },
        {
            link: '',
            src: '/sw_icons_svg/Tw.svg',
            alt: 'logo behanse'
        }
    ]

    return (
        <Frame
            width={widthLayer} 
            height={heightLayer}
            center
            background="200a48"
        >
            <div className={styles.container} >
                <h4 className={styles.contact} >Contact me</h4>
                <h4 className={styles.mail} >hello@frangon.com.ar</h4>
                <h4 className={styles.social} >Social</h4>
                <div className={styles.social_container} >
                    {social.map(
                        (x) => (
                            <Link href={ x.link } >
                                <img src={ x.src } alt={ x.alt } className={styles.social_logo} />
                            </Link>
                        )
                    )}
                </div>
            </div>
        </Frame>
    )

}

/*
*/