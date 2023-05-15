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
          <p className='header_right_text_desc'>At Ekodus, we are a team of innovation and technology enthusiasts dedicated to driving digital transformation. Since our inception, we have been providing cutting-edge digital solutions, designing, and AI solutions for our clients. But our reach extends beyond IT services, as we cater to various business sectors across the globe, with a strong presence in North America and the Asia Pacific regions..</p>
          <button className='btn-primary btn-homeabout'>Read more</button>
      </div>

      </div>
    </div>
  )
}

export default Homeabout