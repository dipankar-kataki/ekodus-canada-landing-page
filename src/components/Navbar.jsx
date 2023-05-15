import React from 'react'
import logo from "../assets/ekodus_logo.png"
import contactimg from "../assets/nav-phoneimage.png"
import "./Navbar.css"

const Navbar = () => {
  return (
   <div className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt="ekodus_logo" />
      </div>
      <div className='navbar__links'>
        <ul>
          <li className='navbar__link'>
            <a href="#">Home</a>
          </li>
          <li className='navbar__link'>
            <a href="#">About</a>
          </li>
          <li className='navbar__link'>
            <a href="#">Services</a>
          </li>
          <li className='navbar__link'>
            <a href="#">Products</a>
          </li>
          <li className='navbar__link'>
            <a href="#">Career</a>
          </li>
        </ul>
      </div>
      <div className='navbar__contact'>
        <div className='navbar__contact_img'>
        <img src={contactimg} alt="" />
        </div>
        <div>
          <p>Call anytime:</p>
          <p><b>+012(345)6789</b></p>
        </div>

      </div>
   </div>
  )
}

export default Navbar