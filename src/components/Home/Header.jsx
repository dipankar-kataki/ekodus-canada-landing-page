import React from 'react'
import '../../styles/Header.css'
import stripe from "../../assets/service-leftlayer.png"
import bannerimg from "../../assets/banner-image.jpg"
import bannervideoimg from "../../assets/banner-vedioimage.png"
import designicon1 from "../../assets/about-rightcircle.png"

const Header = () => {
  return (
    <div className='header_container'>
        <div className='header'>
          <div className='header__left'>
            <div className='header__left_content'>
              <div className='header__left_content_text'>
                <p className='header_starting_text'>WE PROVIDE OUTSOURCED</p>
                <h1><span> IT SERVICES & </span><span>SOLUTIONS</span> </h1>
                <p className='header__description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. dipisicing elit. </p>
              </div>
              <div className='header__left_content_buttons'>
                <button className='btn-primary'>Get Started</button>
                <button className='btn-primary'>Contact Us</button>
              </div>
            </div>
            <div className='header__banner_img'>
            <img className='header__banner_img_icon' src={bannervideoimg} alt="" />
            <img className='header__banner_img_main' src={bannerimg} alt="" />
          </div>
          </div>
          {/* <div className='header__banner_img'>
            <img className='header__banner_img_icon' src={bannervideoimg} alt="" />
            <img className='header__banner_img_main' src={bannerimg} alt="" />
          </div> */}
        </div>
        {/* <div className='header__backgroundstripes'>
          <img src={stripe} alt="" />
        </div>
        <div className='header_designicon1'>
          <img src={designicon1} alt="" />
        </div> */}
    </div>
  )
}

export default Header