import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import servicecardimg1 from "../../assets/digital marketing.png"
import servicecardimg2 from "../../assets/Data.png"
import servicecardimg3 from "../../assets/service-producticon.png"
import servicecardimg4 from "../../assets/UIUX.png"

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
                    <h2>Website Development</h2>
                    <p>Creating dynamic and responsive websites that cater to the unique needs of businesses to thrive in the online realm.</p>
                </div>
                <button>
                    <BsFillArrowRightCircleFill size={"45"} className='arrowbtn'  />
                </button>

            </div>
            <div className='service_card service_card_right'>
                <div className='service_card_img'>
                    <img src={servicecardimg2} alt="" />
                </div>
                <div className='service_card_info'>
                    <h2>Digital Marketing </h2>
                    <p>Promoting products, services, or brands using digital technologies and channels to reach and engage with potential customers.</p>
                </div>
                <button>
                    <BsFillArrowRightCircleFill size={"45"} className='arrowbtn'  />
                </button>

            </div>
            <div className='service_card'>
                <div className='service_card_img'>
                    <img src={servicecardimg3} alt="" />
                </div>
                <div className='service_card_info'>
                    <h2>IT Training </h2>
                    <p>Training programs offered help individuals and businesses acquire technical skills and stay current with the latest technologies.. </p>
                </div>
                <button>
                    <BsFillArrowRightCircleFill size={"45"} className='arrowbtn'  />
                </button>

            </div>
            <div className='service_card service_card_right'>
                <div className='service_card_img'>
                    <img src={servicecardimg4} alt="" />
                </div>
                <div className='service_card_info'>
                    <h2>Staff Augmentation </h2>
                    <p>Offering skilled professionals to help businesses achieve goals and meet deadlines.</p>
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
                    <li>Website Development
                    </li>
                    <li>Software Development 
                    </li>
                    <li>Digital Marketing 
                    </li>
                    <li>IT Training 
                    </li>
                    <li>Sales force 
                    </li>
                    <li>Staff Augmentation 
                    </li>
                    <li>UI/UX Designing 
                    </li>
                    <li>Data Analysis 
                    </li>
                </ul>
            </div>
            <button className='btn-primary'>Get Started</button>
        </div>
    </div>
  )
}

export default Services