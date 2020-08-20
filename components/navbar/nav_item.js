import Link from 'next/link';
import style from './navbar.module.css';
import { useState } from 'react';

export default function NavItem(props) {
    
    const [open, setOpen] = useState(false);
    
    return (
        <Link href='#'  >
            <li className={style.nav_item}>
                <a className={style.icon_button} onClick={() => setOpen(!open)}>
                    {props.text}
                </a>

                { open && props.children }
            </li>
        </Link>
    )
} 