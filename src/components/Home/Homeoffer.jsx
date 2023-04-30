import React from 'react'
import "../../styles/Homeoffer.css"
import offericon1 from '../../assets/offer-icon1.png'
import offertopback from "../../assets/offer-toplayer.png"
import offerbottomback from "../../assets/offer-bottomlayer.png"

const Homeoffer = () => {
  return (
    <div className='homeoffer'>
        <img className='offertopback' src={offertopback} alt="" />
        <div className='homeoffer_container'>
        <div className='homeoffer_header'>
            <p className='homeoffer_header_start'>WHAT WE OFFER</p>
            <h2>WHY SHOULD YOUR CHOOSE US</h2>
            <p className='homeoffer_header_info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos laboriosam quam dicta harum suscipit voluptatem.</p>
        </div>
        <div className='homeoffer_cards'>
            <div className='homeoffer_card'>
                <div className='homeoffer_card_imagesection'>
                  
                </div>
                <div className='offericon'>
                    <img  src={offericon1} alt="" />
                </div>
                <div className='homeoffer_card_textsection'>
                    <h2>Perfect solutions that business demands</h2>
                </div>
            </div>
            <div className='homeoffer_card'>
                <div className='homeoffer_card_imagesection'>
                  
                </div>
                <div className='offericon'>
                    <img  src={offericon1} alt="" />
                </div>
                <div className='homeoffer_card_textsection'>
                    <h2>Perfect solutions that business demands</h2>
                </div>
            </div>
            <div className='homeoffer_card'>
                <div className='homeoffer_card_imagesection'>
                  
                </div>
                <div className='offericon'>
                    <img  src={offericon1} alt="" />
                </div>
                <div className='homeoffer_card_textsection'>
                    <h2>Perfect solutions that business demands</h2>
                </div>
            </div>
        </div>
        </div>
        {/* <img className='offerbottomback' src={offerbottomback} alt="" /> */}
    </div>
  )
}

export default Homeoffer