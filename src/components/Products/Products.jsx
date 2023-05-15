import React from 'react'
import "./Products.css"
import { BsArrowRight } from 'react-icons/bs'

const Products = () => {
  return (
    <div>
        <div className='products_page_header_container'>
      <div className='products_page_header'>
        <h1>OUR PRODUCTS</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, reprehenderit.</p>
        <div className='products_header_loc'>
          <p>Home</p>
          <BsArrowRight/>
          <p style={{color: "#fa6220"}}>Products</p>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Products