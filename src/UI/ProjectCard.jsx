import React from 'react'
import "../styles/ProjectCard.css"
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import projectimg1 from  "../assets/case-image4.jpg"

const ProjectCard = () => {
  return (
    <div>
        <div className='project_card'>
            <div className='project_card_text'>
                <p className='project_card_starttext'>Development</p>
                <div>
                  <h3>Web Development</h3>
                  <p>Lorem ipsum dolor sit amet...</p>
                </div>
            </div>
            <button>
            <BsFillArrowRightCircleFill size={"45"} className='arrowbtn'  />
            </button>
         </div>
    </div>
  )
}

export default ProjectCard