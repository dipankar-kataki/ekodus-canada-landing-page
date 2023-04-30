import React from 'react'
import "../../styles/Homeabout.css"
import homeaboutimgmain from "../../assets/about-image1.jpg"
import homeaboutimgsub from "../../assets/about-image2.jpg"
import homeaboutbackcircle from "../../assets/about-rightcircle.png"

const Homeabout = () => {
  return (
    <div className='homeabout'>
      <img className='homeaboutbackcircle' src={homeaboutbackcircle} alt="" />
      <div className='homeabout_imgcontainer'>
        <div className='textcircle'>
          <h3>30+</h3>
          <p>Years of experience</p>
        </div>
        <img className='homeabout_imgmain' src={homeaboutimgmain} alt="" />
        <img className='homeabout_imgsub' src={homeaboutimgsub} alt="" />
      </div>
      <div className='headerhomeabout_right'>
        <div className='header_right_text'>
          <p className='header_right_text_start'>ABOUT US</p>
          <h2>WE HELP CLIENTS INVENT THEIR FUTURE</h2>
          <p className='header_right_text_desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus expedita perspiciatis sunt unde enim quisquam nam reiciendis eaque dolores explicabo? Lorem, ipsum dolor.</p>
          <button className='btn-primary btn-homeabout'>Read more</button>
      </div>

      </div>
    </div>
  )
}

export default Homeabout