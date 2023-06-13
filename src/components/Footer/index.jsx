import React from 'react'
import "./Footer.css"
import ekoduslogo from "../../assets/ekodus_logo.png"
import footercallicon from "../../assets/footer-callicon.png"
import footeremailicon from "../../assets/footer-emailicon.png"

import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {AiOutlineGooglePlus} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {Link} from "react-router-dom"


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_main_container'>
            <div className='footer_main'>
            <div className='footer_main_info'>
                <img className='footer_logo' src={ekoduslogo} alt="" />
                <p>Step into the world of Ekodus, where creativity, innovation, and technology intertwine. With our unrivaled digital solutions and AI designs, we empower Canadian businesses to soar to new heights.</p>
                <div className='footer_main_info_contacts'>
                    <div className='footer_main_info_contact'>
                        <img src={footercallicon} alt="" />
                        <div>
                            <h3>Call us: </h3>
                            <p>1234567890</p>
                        </div>
                    </div>
                    <div className='footer_main_info_contact'>
                        <img src={footeremailicon} alt="" />
                        <div>
                            <h3>Email us: </h3>
                            <p>abcdefg@ekodus.com</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='footer_link'>
                <h2>Quick Links</h2>
                <ul>
                    <Link to={"/"} style={{textDecoration: "none", color: "white"}}><li>Home</li></Link>
                    <Link to={"/about"} style={{textDecoration: "none", color: "white"}}><li>About</li></Link>
                    <Link to={"/services"} style={{textDecoration: "none", color: "white"}}><li>Services</li></Link>
                    <Link to={"/products"} style={{textDecoration: "none", color: "white"}}><li>Products</li></Link>
                    <Link to={"/career"} style={{textDecoration: "none", color: "white"}}><li>Career</li></Link>
                    <Link to={"/contact"} style={{textDecoration: "none", color: "white"}}><li>Contact</li></Link>
                    <Link to={"/blogspage"} style={{textDecoration: "none", color: "white"}}><li>Blogs</li></Link>
                </ul>

            </div>
          
            </div>
            <div className='footer_copyright'>
                <p>Copyright ©2023 Ekodus.com All Rights Reserved</p>
                <div className='footer_socialicons'>
                    <FaFacebookF size={"20"} color='white'  />
                    <FaTwitter size={"20"} color='white'  />
                    <AiOutlineGooglePlus size={"20"} color='white'  />
                    <AiOutlineInstagram size={"20"} color='white'  />
                </div>
            </div>
        </div>
        <div className='footer_subscribe'>
            <h2>Subscribe to our newsletter today</h2>
            <input type="text" name="" id="" placeholder='Enter your email' />
            <button>Subscribe now</button>
        </div>
    </div>
  )
}

export default Footer