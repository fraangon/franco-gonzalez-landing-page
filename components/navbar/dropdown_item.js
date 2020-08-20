import Link from 'next/link';
import style from './navbar.module.css';


export default function DropdownItem(props){
    return (
        <Link>
            <a className={style.dropdown_item}>
                <span className={style.icon_dropdown_item}>{props.leftIcon}</span>

                {props.children}

                <span className={style.icon_dropdown_item}>{props.rightIcon}</span>
            </a>
        </Link>
    )
}