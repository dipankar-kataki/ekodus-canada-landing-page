import React from 'react'
import Header from './Header'
import Services from './Services'
import Homeoffer from './Homeoffer'
import Homeabout from './Homeabout'
import Achievements from './Achievements'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Blogs from './Blogs'
import "../../styles/Home.css"

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Services/>
      <Homeoffer/>
      <Homeabout/>
      <Achievements/>
      <Projects/>
      <Testimonials/>
      <Blogs/>
    </div>
  )
}

export default Home