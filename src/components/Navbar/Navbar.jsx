import React, {useState} from 'react'
import logo from "../../assets/ekodus_logo.png"
import contactimg from "../../assets/nav-phoneimage.png"
import "../../styles/Navbar.css"

import {NavLink} from "react-router-dom"

import Menu from '../../UI/Menu'
import { BiMenuAltLeft } from "react-icons/bi";

const Navbar = () => {
  const [menuOpen, ismenuOpen] = useState(false);
  
  return (
   <div className='navbar'>
    
      <div className='navbar__logo'>
        <img src={logo} alt="ekodus_logo" />
      </div>
      <div className='navbar__links'>
        <ul>
          <li className='navbar__link'>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className='navbar__link'>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className='navbar__link'>
            <NavLink to={"/services"}>Services</NavLink>
          </li>
          <li className='navbar__link'>
            <NavLink to={"/"}>Products</NavLink>
          </li>
          <li className='navbar__link'>
            <NavLink to={"/"}>Career</NavLink>
          </li>
        </ul>
      </div>
      <div className='navbar__contact'>
        <div className='navbar__contact_img'>
        <img src={contactimg} alt="" />
        </div>
        <div className='navbar__contact_text'>
          <p style={{color:"white"}}>Call anytime:</p>
          <p style={{color:"white"}}><b>+012(345)6789</b></p>
        </div>

      </div>

        {menuOpen? ( <Menu ismenuOpen={ismenuOpen}/>) :
        (<button
          onClick={()=>ismenuOpen(true)}
          className='menu_icon'
        >
          <BiMenuAltLeft size={"35"} />
        </button>)

        }
        
     
     
   </div>
  )
}

export default Navbar