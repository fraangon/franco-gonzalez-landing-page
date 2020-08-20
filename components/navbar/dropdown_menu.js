import style from './navbar.module.css';
import DropdownItem from './dropdown_item.js'

export default function DropdownMenu(){
    return (
        <div className={style.dropdown}>

            <DropdownItem> Twitter </DropdownItem>
            <DropdownItem> Twitter </DropdownItem>
            <DropdownItem> Twitter </DropdownItem>

        </div>
    )
}