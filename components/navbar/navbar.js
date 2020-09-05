import styles from "./navbar.module.css"
import NavItem from "./nav_item"


export default function NavBar(props) {
    return (
        <div className={styles.container_header}>
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
        </div>
    )
  }