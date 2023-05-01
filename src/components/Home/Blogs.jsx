import React from 'react'
import Card from "../../UI/Card.jsx"
import "../../styles/Blogs.css"



import OwlCarousel from "react-owl-carousel"
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'



const Blogs = () => {
  return (
    <div className='blogs'>
        <div className='blogs_header'>
            <p className='blogs_header_start'>NEWS AND ARTICLES</p>
            <h2>OUR LATEST BLOG POSTS</h2>
            <p className='blogs_header_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit!</p>
        </div>
        <div className='blogs_content'>
        <OwlCarousel 
            className='owl-theme'
            items="3"
            autoPlay
            dots
            loop
            width={"200px"}
            
          
        >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </OwlCarousel>

      </div>
    </div>
  )
}

export default Blogs