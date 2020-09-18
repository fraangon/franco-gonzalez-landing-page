import { Frame, FramerAnimation } from "framer";
import { getWindowWidth, getWindowHeight } from '../window/window_dimensions.js';
import styles from './project_page.module.css'
import Link from 'next/link';
import {animationElement, animationPage} from "./project_page_animation.js";
import { motion } from 'framer-motion'

export default function ProjectPage(props) {
    const widthLayer = Math.min( getWindowWidth(), 1400 )

    return (
        <motion.div
            exit="exit"
            initial="initial"
            animate="animate"
            variants={animationPage()}
        >
            <Frame 
                top={225} 
                width={widthLayer} 
                center 
                background="1b1b1b"
            >
                <div className={styles.contenedor_general}>

                    <div className={styles.contenedor_header}>
                        <motion.h3 
                            className={styles.title}
                            exit="exit"
                            initial="initial"
                            animate="animate"
                            variants={animationElement(0.2)}
                        >
                            {props.dataProject.title}
                        </motion.h3>

                        <motion.h4 
                            className={styles.type}
                            exit="exit"
                            initial="initial"
                            animate="animate"
                            variants={animationElement(0.4)}
                        >
                            {props.dataProject.type}
                        </motion.h4>
                    </div>

                    {
                        props.dataProject.content.map(
                            (aContentPath) => (
                                <div>
                                    <img src={ aContentPath } className={ styles.img } />
                                </div>
                            )
                        )
                    }

                    <div className={styles.contenedor_back}>
                        <Link href='/projects'>
                            <a className={styles.back} > Back to Projects </a>
                        </Link>
                    </div>

                </div>

            </Frame>
        </motion.div>
    )
}