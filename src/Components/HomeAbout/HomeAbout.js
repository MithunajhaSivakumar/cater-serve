import React from 'react'
import './HomeAbout.css'
import {Link} from 'react-router-dom'

function HomeAbout() {
  return (
    <div className='home-about'>
        <section className="sectionFirst main section-ha">
        <section className="contentContainer section-ha">
          <section className="mainText section-ha">
            <h2 className='home_about_h2'>
              About Us
            </h2>
            <h3 className='home_about_h3'>
              Discover Our Web Story
            </h3>
          </section>
            <p className='home_about_p'>
                E-Catering Service, Providing you an amazing opportunity to find out your Best favorite Catering Center with
                Ratings and Reviews of various Catering centers. The Catering vendors can promote their business by adding up their Catering profile here. 
                Customers can book up the Catering centers and enjoy their service.
            </p>
            <p className='home_about_p'>
              I hope you learned something important about our business. Because it looks like we have run out of room again to tell you more properly about who we are and what we do. Maybe you'll learn if you read the other sections though!
            </p>
            <Link className="nav-link" to={{pathname:"/caterings"}}>
            <button className="btnDiscover">
                Discover Caterings
              <image src="https://i.imgur.com/mdtAg35.png" className="btnArrow" />
            </button>
            </Link>
            
        </section>
      </section>
    </div>
  )
}

export default HomeAbout