import React from 'react'
import "../../styles/Footer.css"
import ekoduslogo from "../../assets/ekodus_logo.png"
import contactimg from "../../assets/Data.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_main_container'>
            <div className='footer_main'>
            <div className='footer_main_info'>
                <img className='footer_logo' src={ekoduslogo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum dolore sequi dolorum eveniet dignissimos ut distinctio repellendus delectus aut.</p>
                <div className='footer_main_info_contacts'>
                    <div className='footer_main_info_contact'>
                        <img src={contactimg} alt="" />
                        <div>
                            <h3>Call us: </h3>
                            <p>1234567890</p>
                        </div>
                    </div>
                    <div className='footer_main_info_contact'>
                        <img src={contactimg} alt="" />
                        <div>
                            <h3>Call us: </h3>
                            <p>1234567890</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='footer_link'>
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                </ul>

            </div>
            <div className='footer_link'>
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                </ul>

            </div>
            </div>
            <div className='footer_copyright'>
                <p>Copyright ©2023 Technofy.com All Rights Reserved</p>
                <div className='footer_socialicons'>
                    <h2>1</h2>
                    <h2>1</h2>
                    <h2>1</h2>
                    <h2>1</h2>
                </div>
            </div>
        </div>
        <div className='footer_subscribe'>
            <h2>Subscribe to our newsletter today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto?</p>
            <input type="text" name="" id="" placeholder='Enter your email' />
            <button>Subscribe now</button>
        </div>
    </div>
  )
}

export default Footer