import React from 'react'
import Budget from './Budget'
import CaterAbout from './CaterAbout'
import './CaterProfile.css'
import Contact from './Contact'
import ImportantDish from './ImportantDish'
import Owner from './Owner'

function CateringProfile() {
  return (
    <div className='profile'>
        <h1 className='catering-brand'>Star Catering</h1>
        <CaterAbout/>
        <div className='buget-disp'>
          <Budget />
        </div>
        <ImportantDish />
        <Owner />
        <Contact />
        
    </div>
  )
}

export default CateringProfile