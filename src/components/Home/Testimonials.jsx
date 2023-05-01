import React, {useState} from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import "../../styles/Testimonials.css"
import testimage1 from "../../assets/testimonial-centerimage.png"
import testimage2 from "../../assets/testimonial-image1.png"
import testimage3 from "../../assets/testimonial-image2.png"
import testimage4 from "../../assets/testimonial-image3.png"
import testimage5 from "../../assets/testimonial-image4.png"

import testicon from "../../assets/offer-icon1.png" 

import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Testimonials = () => {
  const [activeIndex,setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      fullname: "Albert Einstein",
      review: "This website works really well. It sympathetically improves my baseball by a lot heard about this on balearic beat radio, decided to give it a try." 
    },
    {
      id: 2,
      fullname: "Elon Musk",
      review: "My neighbor Montserrat has one of these. She works as a circus performer and she says it looks shriveled. this amazon is gracious." 
    },
    {
      id: 3,
      fullname: "Isaac Newton",
      review: "sjdfh adjfnd jdfj jadfb jdbfjksd jksdfbkj  sddhf foisd fihfosd hfdiof dof dofhsdiof ohufhfio  dofsdofsdoif sdofoid fsdof osd fousdf so" 
    }
  ];

  const prevfunction = () =>{
    if(activeIndex!=0){
      setActiveIndex(activeIndex-1)
    }
    else{
      setActiveIndex(testimonials.length-1)
    }

  }
  const nextfunction = () =>{
    if(activeIndex!=testimonials.length-1){
      setActiveIndex(activeIndex+1)
    }
    else{
      setActiveIndex(0)
    }
    
  }

  return (
    <div className='testimonials'>
      <div className='testimonials_left'>
        <img className='testimg1' src={testimage1} alt="" />
        <img className='testimg2' src={testimage2} alt="" />
        <img className='testimg3' src={testimage3} alt="" />
        <img className='testimg4' src={testimage4} alt="" />
        <img className='testimg5' src={testimage5} alt="" />

      </div>
      <div className='testimonials_right'>
        <p>TESTIMONIALS</p>
        <h2><span>WHAT OUR CUSTOMERS</span><span>HAVE TO SAY</span></h2>
        <SwitchTransition component={null}>
          <CSSTransition 
            key={testimonials[activeIndex].id}
            timeout={300}
            classNames={"fade"}
          >
            <div className='testimonial_review'>
              <p>{testimonials[activeIndex].review}</p>
              <div className='testimonial_identity'>
                <div className='testicon'>
                  <img src={testicon} alt="" />
                </div>

                <h3>{testimonials[activeIndex].fullname}</h3>
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
          <div className='testimonial_arrowbtns'>
            <button onClick={prevfunction}>
              <AiOutlineArrowLeft/>
            </button>
            <button onClick={nextfunction}>
              <AiOutlineArrowRight/>
            </button>
          </div>

        </div>
      </div>
    
  )
}

export default Testimonials