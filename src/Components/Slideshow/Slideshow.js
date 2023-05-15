import React from 'react'
import './Slideshow.css'
import {Link } from 'react-router-dom'

function Slideshow() {
  return (
    <>
        <div className="overlay">
            <section id="home">
                <h1 className="h-primary">Welcome to CaterServe</h1>
                <br/>
                <p className="home-p">Filling every occasion with great food and service </p>
                <p className="home-p">We Committed to value, service and style </p>
                <Link className="nav-link" to={{pathname:"/caterings"}}>
                <button className="btn-slideshow">
                      Find  Caterings
                </button>
                </Link>
            </section>
        </div>
    </>
  )
}

export default Slideshow