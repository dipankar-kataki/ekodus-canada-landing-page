import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

import OwlCarousel from "react-owl-carousel"
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

import ProjectCard from '../../UI/ProjectCard';
import offertoplayer from "../../assets/offer-toplayer.png"
import offerbottomlayer from "../../assets/offer-bottomlayer.png"

import {RxDotFilled} from 'react-icons/rx'
import projectimg1 from "../../assets/case-image1.jpg"
import projectimg2 from "../../assets/case-image2.jpg"
import projectimg3 from "../../assets/case-image3.jpg"
import projectimg4 from "../../assets/case-image4.jpg"
import projectimg5 from "../../assets/case-image5.jpg"

import "../../styles/Projects.css"
const Projects = () => { 
  const responsive = {
    supersuperLargeDesktop: {
      breakpoint: { max: 1700, min: 1550 },
      items: 6,
    },
    superLargeDesktop: {
      breakpoint: { max: 1550, min: 1370 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1370, min: 1224 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1224, min: 982 },
      items: 4,
    },
    bigger_mobile: {
      breakpoint: { max: 982, min: 786 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 786, min: 576 },
      items: 2,
    },
    small_mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
   
  };
  const projectList = [
    {
      title: "KoduCRM",
      desc : "Our KoduCRM is designed to assist you in concentrating on building strong connections with individuals within your organization"
    },
    {
      title: "KoduLive",
      desc : "Kõdu is a small village located in the Käru Parish of Rapla County in the western-central region of Estonia. The word 'Kodu' in Estonian translates to 'Home'"
    },
    {
      title: "YMOC.com ",
      desc : "YMOC.com is a food delivery application founded by Mark Bordoloi, who is the President of Ekodus, in 2018. It provides an easy way to order food for delivery straight to your doorstep."
    },
    {
      title: "Biryanicloud.com ",
      desc : "Biryani is a popular dish found throughout the Indian subcontinent and various South Asian countries, as the name suggests."
    },
    
  ]
  const CustomDot = ({ onMove, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <li
        className={active ? "sliderdots_active" : "sliderdots_inactive"}
        onClick={() => onClick()}
      >
        <RxDotFilled size={"25"} className='slider_dot'   />
      </li>
    );
  };

    
  return (
    <div className='projects'>
  
        <div className='project_header'>
        <img className='offertoplayer' src={offertoplayer} alt="" />
        <img className='offerbottomlayer' src={offerbottomlayer} alt="" />
            <p className='project_header_start'>RECENT PROJECTS</p>
            <h2>OUR LATEST CASE STUDIES</h2>
            <p className='project_header_desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis fugit fugiat quisquam error perferendis dicta ratione exercitationem magni maiores officia.</p>
           

        </div>
        <div className='project_body'>
        <Carousel 
            responsive={responsive}
            showDots
            renderDotsOutside={false}
            slidesToSlide={3}
            swipeable
            customDot={<CustomDot />}
            className='slider_container'
            arrows={false}
            infinite
            
        >
           <ProjectCard img={projectimg1} title={projectList[0].title} desc={projectList[0].desc}/> 
           <ProjectCard img={projectimg2} title={projectList[1].title} desc={projectList[1].desc}/>   
           <ProjectCard img={projectimg3} title={projectList[2].title} desc={projectList[2].desc}/>      
           <ProjectCard img={projectimg4} title={projectList[3].title} desc={projectList[3].desc}/>   
           <ProjectCard img={projectimg5} title={projectList[0].title} desc={projectList[0].desc}/>   
           <ProjectCard img={projectimg1} title={projectList[1].title} desc={projectList[1].desc}/>   
           <ProjectCard img={projectimg2} title={projectList[2].title} desc={projectList[2].desc}/>   
           <ProjectCard img={projectimg3} title={projectList[3].title} desc={projectList[3].desc}/>   
           <ProjectCard img={projectimg4} title={projectList[0].title} desc={projectList[0].desc}/>   
           <ProjectCard img={projectimg5} title={projectList[1].title} desc={projectList[1].desc}/>   
         </Carousel>

        </div>
    </div>
  )
}

export default Projects