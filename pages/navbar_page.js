
import NavBar from '../components/navbar/navbar'
import NavItem from '../components/navbar/nav_item'
import DropdownMenu from '../components/navbar/dropdown_menu'

import React, {useState} from 'react';


export default function Main() {
  return (
    <NavBar>
        <NavItem text='HOME' />
        <NavItem text='ABOUT' />
        <NavItem text='PROJECTS' />
        <NavItem text='CONTACT'>
            <DropdownMenu></DropdownMenu>
        </NavItem>
    </NavBar>
  )
}