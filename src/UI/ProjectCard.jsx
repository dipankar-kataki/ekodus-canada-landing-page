import React from 'react'
import "../styles/ProjectCard.css"
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const ProjectCard = () => {
  return (
    <div>
        <div className='project_card'>
            <div className='project_card_text'>
                <p className='project_card_starttext'>Development</p>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <button>
            <BsFillArrowRightCircleFill size={"45"} className='arrowbtn'  />
            </button>
         </div>
    </div>
  )
}

export default ProjectCard