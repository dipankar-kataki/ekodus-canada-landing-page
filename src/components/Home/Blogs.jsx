import React from 'react'
import Card from "../../UI/Card.jsx"
import "../../styles/Blogs.css"



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

import offertoplayer from "../../assets/offer-toplayer.png"
import offerbottomlayer from "../../assets/offer-bottomlayer.png"

import offericon1 from '../../assets/offer-icon1.png'
import image1 from "../../assets/offer-image1.jpg"


const Blogs = () => {

  const responsive = {
    supersuperLargeDesktop: {
      breakpoint: { max: 1700, min: 1550 },
      items: 5,
    },
    superLargeDesktop: {
      breakpoint: { max: 1550, min: 1370 },
      items: 4,
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
          
        >
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

          
            
        </Carousel>
       
      </div>
    </div>
  )
}

export default Blogs