import styles from "./navbar.module.css"
import NavItem from "./nav_item"
import { motion } from "framer-motion"
import { animationName} from './navbar_animation'

export default function NavBar(props) {
    return (
        <motion.div 
            exit='exit'
            initial='initial'
            animate='animate'
            variants={animationName}
            className={styles.container_header}
        >
            <div className={styles.header}>

                <div>
                    <img src="fg_logo.svg" className={styles.logo} ></img>
                </div>

                <div>
                    <nav className={styles.navbar}>
                            
                            <NavItem selected={props.selected} itemName = 'HOME' link="/" ></NavItem>
                            <NavItem selected={props.selected} itemName = 'PROJECTS' link="/projects" ></NavItem>
                            <NavItem selected={props.selected} itemName = 'CONTACT' link="#" ></NavItem>
                            
                    </nav>
                </div>

            </div>
        </motion.div>
    )
}