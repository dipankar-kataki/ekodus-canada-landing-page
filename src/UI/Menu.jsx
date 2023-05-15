import React from 'react'
import "../styles/Menu.css"

import {NavLink} from "react-router-dom"


const Menu = ({ismenuOpen}) => {
  return (
    <div className='menu_list'>
          <button className='menu_close_btn' onClick={()=>ismenuOpen(false)}>X</button>
          <ul>
            <li>
              <NavLink to={"/"} onClick={()=>ismenuOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"} onClick={()=>ismenuOpen(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/"} onClick={()=>ismenuOpen(false)}>Products</NavLink>
            </li>
            <li>
              <NavLink to={"/"} onClick={()=>ismenuOpen(false)}>Services</NavLink>
            </li>
            <li>
              <NavLink to={"/"} onClick={()=>ismenuOpen(false)}>Career</NavLink>
            </li>
          </ul>
        </div>
  )
}

export default Menu