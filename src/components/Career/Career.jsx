import React from 'react'
import "./Career.css"
import { BsArrowRight } from 'react-icons/bs'

const Career = () => {
  return (
    <div>
    <div className='career_page_header_container'>
      <div className='career_page_header'>
        <h1>JOIN US</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, reprehenderit.</p>
        <div className='career_header_loc'>
          <p>Home</p>
          <BsArrowRight/>
          <p style={{color: "#fa6220"}}>Career</p>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Career