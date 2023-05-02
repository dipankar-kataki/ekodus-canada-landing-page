import React from 'react'
import "../styles/Card.css"
import offericon1 from '../assets/offer-icon1.png'
import image1 from "../assets/offer-image1.jpg"

const Card = () => {
  return (
    <div className='homeoffer_card'>
        <div className='homeoffer_card_imagesection'>
          <img src={image1} alt="" />

                  
        </div>
        <div className='offericon'>
            <img className='offericonimg'  src={offericon1} alt="" />
        </div>
        <div className='homeoffer_card_textsection'>
            <h2>Perfect solutions that business demands</h2>
        </div>
     </div>
  )
}

export default Card