import React from 'react'
import Services from '../Home/Services'
import Homeoffer from "../Home/Homeoffer"

import "../../styles/Services.css"

const index = () => {
  return (
    <div className='services_page'>
      <div className='service_page_header_container'>
      <div className='service_page_header'>
        <h1>OUR SERVICES</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, reprehenderit.</p>
      </div>
      </div>
      <Services/>
      <Homeoffer/>
    </div>

  )
}

export default index