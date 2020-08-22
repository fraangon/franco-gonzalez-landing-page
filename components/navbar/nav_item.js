import Link from 'next/link';
import styles from './navbar.module.css';
import { useState } from 'react';

export default function NavItem(props) {
    
    return (
        <Link href={props.link}><a className = { 
            props.selected == props.itemName ? styles.selected_nav_item : styles.not_selected_nav_item 
        } >
                {props.itemName}
        </a></Link>
    )
} 