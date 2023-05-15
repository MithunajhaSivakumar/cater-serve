import React from 'react'
import Footer from '../../Components/Footer/Footer'
import HomeAbout from '../../Components/HomeAbout/HomeAbout'
import Navbar from '../../Components/NavBar/Navbar'
import Service from '../../Components/Service/Service'
import Slideshow from '../../Components/Slideshow/Slideshow'
import './Home.css'


function Home() {
  return (
    <div className='home'>
        <header className='header-home'>
            <Navbar/>
            <Slideshow/>
        </header>
        <HomeAbout/>
        <Service/>
        <Footer />
        
        
        
    </div>
  )
}

export default Home