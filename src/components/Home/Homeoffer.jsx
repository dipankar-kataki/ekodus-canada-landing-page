import React from 'react'
import "../../styles/Homeoffer.css"
import offericon1 from '../../assets/offer-icon1.png'
import offertopback from "../../assets/offer-toplayer.png"
import offerbottomback from "../../assets/offer-bottomlayer.png"

import Card from '../../UI/Card'

const Homeoffer = () => {
  return (
    <div className='homeoffer'>
        <img className='offertopback' src={offertopback} alt="" />
        <div className='homeoffer_container'>
        <div className='homeoffer_header'>
            <p className='homeoffer_header_start'>What we offer</p>
            <h2>WHY SHOULD YOUR CHOOSE US</h2>
            <p className='homeoffer_header_info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos laboriosam quam dicta harum suscipit voluptatem.</p>
        </div>
        <div className='homeoffer_cards'>
            <Card/>
            <Card/>
            <Card/>
        </div>
        </div>
        {/* <img className='offerbottomback' src={offerbottomback} alt="" /> */}
    </div>
  )
}

export default Homeoffer