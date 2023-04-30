import React from 'react'
import "../../styles/Achievement.css"
import achievementicon1 from "../../assets/achievement-clienticon.png"
const Achievements = () => {
  return (
    <div className='achievements'>
        <div className='achievements_left'>
            <div className='achievements_left_text'>
                <p className='achievements_left_text_start'>Achievements</p>
                <h2>SOME NUMBER OF OUR ACHIEVEMENTS</h2>
                <p className='achievements_left_text_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure distinctio saepe enim modi suscipit asperiores sapiente perferendis corporis possimus?</p>
                <button className='btn-primary achievements_btn'>Get started</button>
            </div>
        </div>
        <div className='achievements_right'>
                <div className='achiement_circle'>
                    <img src={achievementicon1} alt="" />
                    <h3>3,830</h3>
                    <p>satisfied clients</p>
                </div>
            <div className='achievement_circle_mid'>
                <div className='achiement_circle'>
                    <img src={achievementicon1} alt="" />
                    <h3>3,830</h3>
                    <p>satisfied clients</p>
                </div>
                <div className='achiement_circle'>
                    <img src={achievementicon1} alt="" />
                    <h3>3,830</h3>
                    <p>satisfied clients</p>
                </div>

            </div>
            <div className='achiement_circle'>
                <img src={achievementicon1} alt="" />
                <h3>3,830</h3>
                <p>satisfied clients</p>
            </div>
        </div>
    </div>
  )
}

export default Achievements