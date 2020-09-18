import styles from "./contact.module.css"
import { Frame, Stack, FramerAnimation } from "framer";
import { motion } from 'framer-motion'
import { getWindowWidth, getWindowHeight } from '../window/window_dimensions.js';
import Link from 'next/link';
import { animationElement, animationContactPage } from "./contact_animation";



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
            src: '/sw_icons_svg/Insta_2.svg',
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
        <motion.div
            exit="exit"
            initial="initial"
            animate="animate"
            variants={animationContactPage()}
        >

            <Frame
                width={widthLayer} 
                height={heightLayer}
                center
                background="200a48"
            >
                <div className={styles.container} >
                    <Stack
                        center 
                        width='100%'
                        background="200a48"
                        direction="vertical"
                        gap='0px'
                    >
                            <Frame 
                                width='100%' 
                                height='25px'
                                center='x' 
                                background="200a48"
                                className={styles.contact}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={ animationElement(0.2) }
                            >
                                Contact me
                            </Frame>
                            <Frame 
                                width='100%' 
                                height='100px'
                                center='x' 
                                background="200a48"
                                className={styles.mail} 
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={ animationElement(0.4) }
                            >
                                hello@frangon.ar
                            </Frame>

                    </Stack>
                    <Stack 
                        center = 'x' 
                        bottom={0} 
                        width='100%'
                        background="200a48"
                        direction="vertical"
                        gap='px'
                    >
                        <Frame
                            width='100%'
                            background="200a48"
                            height='50px'
                            className={styles.social} 
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={ animationElement(0.6) }
                        >
                            Social
                        </Frame>
                        <motion.div 
                            className={styles.social_container}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={ animationElement(0.8) }
                        >
                            {social.map(
                                (x) => (
                                    <Link href={ x.link } >
                                        <img src={ x.src } alt={ x.alt } className={styles.social_logo} />
                                    </Link>
                                )
                            )}
                        </motion.div>
                    </Stack>
                </div>
            </Frame>
        </motion.div>
    )

}

/*
*/