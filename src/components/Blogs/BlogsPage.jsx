import React from 'react'
import Blogs from './Blogs'
import {BsArrowRight} from "react-icons/bs"
import "./BlogPage.css"

const BlogsPage = () => {
  return (
    <div>
      <div className='blog_page_header_container'>
          <div className='career_page_header'>
        <h1>Blogs</h1>
        <div className='career_header_loc'>
          <p>Home</p>
          <BsArrowRight/>
          <p style={{color: "#fa6220"}}>Blogs</p>

        </div>
      </div>
      </div>
     
        <Blogs className="blog_page_content"/>
   
    </div>
  )
}

export default BlogsPage