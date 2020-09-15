import { Frame } from "framer";
import { getWindowWidth, getWindowHeight } from '../window/window_dimensions.js';
import styles from './project_page.module.css'
import Link from 'next/link';

export default function ProjectPage(props) {
    const widthLayer = Math.min( getWindowWidth(), 1400 )
    
    return (
        <div>
            <Frame 
                top={225} 
                width={widthLayer} 
                center 
                background="1b1b1b"
            >
                <div className={styles.contenedor_general}>

                    <div className={styles.contenedor_header}>
                        <h3 className={styles.title}>{props.dataProject.title}</h3>
                        <h4 className={styles.type}>{props.dataProject.type}</h4>
                    </div>

                    {
                        props.dataProject.content.map(
                            (aContentPath) => (
                                <img src={ aContentPath } />
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
        </div>
    )
}