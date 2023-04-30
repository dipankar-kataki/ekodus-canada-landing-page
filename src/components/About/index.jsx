import React from 'react'
import "../../styles/About.css"
import homeaboutimgmain from "../../assets/about-image1.jpg"
import homeaboutimgsub from "../../assets/about-image2.jpg"
import homeaboutbackcircle from "../../assets/about-rightcircle.png"
import Achievements from "../Home/Achievements"


const About = () => {
  return (
    <div className='about_page'>
      <div className='about_page_header_container'>
      <div className='about_page_header'>
        <h1>ABOUT US</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, reprehenderit.</p>
      </div>
      </div>
      <div className='about_section_one'>
      <img className='homeaboutbackcircle' src={homeaboutbackcircle} alt="" />
      <div className='about_section_one_imgcontainer'>
        <div className='textcircle'>
          <h3>30+</h3>
          <p>Years of experience</p>
        </div>
        <img className='about_section_one_imgmain' src={homeaboutimgmain} alt="" />
        <img className='about_section_one_imgsub' src={homeaboutimgsub} alt="" />
      </div>
      <div className='about_section_one_right'>
        <div className='about_section_one_header_right_text'>
          <p className='about_section_one_header_right_text_start'>ABOUT US</p>
          <h2>WE HELP CLIENTS INVENT THEIR FUTURE</h2>
          <p className='about_section_one_header_right_text_desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus expedita perspiciatis sunt unde enim quisquam nam reiciendis eaque dolores explicabo? Lorem, ipsum dolor.</p>
          <button className='btn-primary btn-homeabout'>Read more</button>
      </div>

      </div>
    </div>
    <Achievements/>

    </div>
  )
}

export default About