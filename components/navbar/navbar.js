import styles from "./navbar.module.css"

export default function NavBar(props) {

    return (
    <nav className= {styles.navbar} >
        <ul className= {styles.navbar_nav} >
            { props.children }
        </ul>    
    </nav>
    )
  }