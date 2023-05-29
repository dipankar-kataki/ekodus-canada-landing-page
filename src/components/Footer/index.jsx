import React from 'react'
import "./Footer.css"
import ekoduslogo from "../../assets/ekodus_logo.png"
import footercallicon from "../../assets/footer-callicon.png"
import footeremailicon from "../../assets/footer-emailicon.png"

import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {AiOutlineGooglePlus} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'


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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

            </div>
            <div className='footer_link'>
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="#">Cloud Service</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Digital Marketing</a></li>
                    <li><a href="#">Pricing</a></li>
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