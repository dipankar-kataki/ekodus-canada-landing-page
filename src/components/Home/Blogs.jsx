import React from 'react'
import Card from "../../UI/Card.jsx"
import "../../styles/Blogs.css"



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

import offertoplayer from "../../assets/offer-toplayer.png"
import offerbottomlayer from "../../assets/offer-bottomlayer.png"

import offericon1 from '../../assets/offer-icon1.png'
import offericon2 from '../../assets/offer-icon2.png'
import offericon3 from '../../assets/offer-icon3.png'

import blog_img1 from "../../assets/blog-image1.jpg" 
import blog_img2 from "../../assets/blog-image2.jpg" 
import blog_img3 from "../../assets/blog-image3.jpg" 


import {RxDotFilled} from 'react-icons/rx'


const Blogs = () => {

  const responsive = {
    supersuperLargeDesktop: {
      breakpoint: { max: 1700, min: 1550 },
      items: 4,
    },
    superLargeDesktop: {
      breakpoint: { max: 1550, min: 1370 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1370, min: 1020 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1020, min: 796 },
      items: 2,
    },
    bigger_mobile: {
      breakpoint: { max: 796, min: 578 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 578, min: 0 },
      items: 1,
    },
   
  };
  const CustomDot = ({ onMove, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <li
        className={active ? "sliderdots_active" : "sliderdots_inactive"}
        onClick={() => onClick()}
      >
        <RxDotFilled size={"25"} className='slider_dot'   />
      </li>
    );
  };


  return (
    <div className='blogs'>
        <div className='blogs_header'>
          <img className='blogstopplayer' src={offertoplayer} alt="" />
          
            <p className='blogs_header_start'>NEWS AND ARTICLES</p>
            <h2>OUR LATEST BLOG POSTS</h2>
            <p className='blogs_header_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit!</p>
        </div>
        <div className='blogs_content'>
        <Carousel 
            responsive={responsive}
            showDots
            renderDotsOutside={false}
            slidesToSlide={3}
            swipeable
            customDot={<CustomDot />}
            className='blog_slider_container'
            arrows={false}
          
        >
          <Card offericon={offericon1} img = {blog_img1} title="Revolutionizing Lives: How technology has transformed  the world."/>
          <Card offericon={offericon2} img = {blog_img2} title="The future of Artifical Intelligence:Implications  and opportunities"/>
          <Card offericon={offericon3} img = {blog_img3} title="Coming Soon"/>
          <Card offericon={offericon1} img = {blog_img2} title="Coming Soon"/>
          <Card offericon={offericon1} img = {blog_img1} title="Coming Soon"/>

          
            
        </Carousel>
       
      </div>
    </div>
  )
}

export default Blogs