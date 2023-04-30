import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectCard from '../../UI/ProjectCard';

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
      breakpoint: { max: 1370, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 780 },
      items: 3,
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
            <p className='project_header_start'>RECENT PROJECTS</p>
            <h2>OUR LATEST CASE STUDIES</h2>
            <p className='project_header_desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis fugit fugiat quisquam error perferendis dicta ratione exercitationem magni maiores officia.</p>
           

        </div>
        <div className='project_body'>
        <Carousel responsive={responsive} autoPlay={true} infinite={true}>
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