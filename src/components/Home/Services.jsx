import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import servicecardimg1 from "../../assets/digital marketing.png"

import backlayer1 from "../../assets/service-leftlayer.png"
import backlayer2 from "../../assets/service-rightcircle.png"

import "../../styles/HomeServices.css"

const Services = () => {
  return (
    <div className='services'>
        <img className='backlayer_one' src={backlayer1} alt="" />
        <div className='service_cards'>
            <div className='service_card'>
                <div className='service_card_img'>
                    <img src={servicecardimg1} alt="" />
                </div>
                <div className='service_card_info'>
                    <h2>Digital Marketing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <button>
                    <BsFillArrowRightCircleFill size={"45"} className='arrowbtn'  />
                </button>

            </div>
            <div className='service_card service_card_right'>
                <div className='service_card_img'>
                    <img src={servicecardimg1} alt="" />
                </div>
                <div className='service_card_info'>
                    <h2>Digital Marketing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <button>
                    <BsFillArrowRightCircleFill size={"45"} className='arrowbtn'  />
                </button>

            </div>
            <div className='service_card'>
                <div className='service_card_img'>
                    <img src={servicecardimg1} alt="" />
                </div>
                <div className='service_card_info'>
                    <h2>Digital Marketing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <button>
                    <BsFillArrowRightCircleFill size={"45"} className='arrowbtn'  />
                </button>

            </div>
            <div className='service_card service_card_right'>
                <div className='service_card_img'>
                    <img src={servicecardimg1} alt="" />
                </div>
                <div className='service_card_info'>
                    <h2>Digital Marketing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <button>
                    <BsFillArrowRightCircleFill size={"45"} className='arrowbtn'  />
                </button>

            </div>
        </div>
        <div className='service_info'>
            <img className='backlayer_two' src={backlayer2} alt="" />
            <div className='services_info_header'>
                <p>Our Services</p>
                <h2>BEST IT SOLUTION <br /> FOR YOUR BUSINESS</h2>
            </div>
            <div className='services_info_body'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatibus autem suscipit possimus perspiciatis minima saepe</p>
                <ul>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing
                    </li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing 
                    </li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing
                    </li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing
                    </li>
                </ul>
            </div>
            <button className='btn-primary'>Get Started</button>
        </div>
    </div>
  )
}

export default Services