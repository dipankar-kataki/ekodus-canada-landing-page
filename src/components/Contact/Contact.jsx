import React from 'react'
import "./Contact.css"
import {BsArrowRight} from 'react-icons/bs'
import {GoLocation} from "react-icons/go"
import {AiOutlineMail} from "react-icons/ai"
import {BsFillTelephoneFill} from "react-icons/bs"

const Contact = () => {
  return (
    <div className='contact_page'>
        <div className='contact_page_header_container'>
      <div className='contact_page_header'>
        <h1>CONTACT US</h1>
        <div className='contact_header_loc'>
          <p>Home</p>
          <BsArrowRight/>
          <p style={{color: "#fa6220"}}>Contact</p>

        </div>
      </div>
      </div>
      <div className='contact_page_body'>
        <div className='contact_page_location'>
            <div className='contact_page_location_header'>
                <p>CONTACT INFO</p>
                <h2>GET IN TOUCH</h2>
            </div>
            <div className='contact_addresses'>
                <div className='contact_address'>
                    <GoLocation size={45} color='#fa6220'/>
                    <div className='contact_address_info'>
                        <h3>Location</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                </div>
                <div className='contact_address'>
                    <AiOutlineMail size={45} color='#fa6220'/>
                    <div className='contact_address_info'>
                        <h3>Email</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                </div>
                <div className='contact_address'>
                    <BsFillTelephoneFill size={45} color='#fa6220'/>
                    <div className='contact_address_info'>
                        <h3>Phone</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='contact_page_form'>
          <p>WRITE TO US</p>
          <h2>SEND US A MESSAGE</h2>
          <form>
            <input type="text" placeholder='Your Name: ' />
            <input type="email" placeholder='Your Email: ' />
            <textarea placeholder='Message' name="message" rows="12" cols="60"/>
            <button type='submit'>SEND NOW</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact