import React from 'react'
import ContactAdmin from '../../Components/ContactAdmin/ContactAdmin'
import Footer from '../../Components/Footer/Footer'
import InstaImage from '../../Components/InstaImage/InstaImage'
import MainCatering from '../../Components/MainCatering/MainCatering'
import Navbar from '../../Components/NavBar/Navbar'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-page'>
      <Navbar />
      <InstaImage />
      <MainCatering />
      <ContactAdmin />
      <Footer />
    </div>
  )
}

export default Contact