import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

import OwlCarousel from "react-owl-carousel"
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

import ProjectCard from '../../UI/ProjectCard';
import offertoplayer from "../../assets/offer-toplayer.png"
import offerbottomlayer from "../../assets/offer-bottomlayer.png"

import "../../styles/Projects.css"
const Projects = () => { 
  const responsive = {
    supersuperLargeDesktop: {
      breakpoint: { max: 1700, min: 1550 },
      items: 7,
    },
    superLargeDesktop: {
      breakpoint: { max: 1550, min: 1370 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1370, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 780 },
      items: 4,
    },
    bigger_mobile: {
      breakpoint: { max: 780, min: 578 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 578, min: 0 },
      items: 1,
    },
   
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
            
        >
           <ProjectCard/> 
           <ProjectCard/>   
           <ProjectCard/>      
           <ProjectCard/>   
           <ProjectCard/>   
           <ProjectCard/>   
           <ProjectCard/>   
           <ProjectCard/>   
           <ProjectCard/>   
           <ProjectCard/>   
         </Carousel>

        </div>
    </div>
  )
}

export default Projects