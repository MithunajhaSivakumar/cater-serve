import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav id="navbar">
            <div className="logo"><span>CaterServe</span></div>
            <ul className='nav-ul'>
                <li>
                    <a className='a-nav' href="#home">
                        <Link className="nav-link" to={{pathname:"/"}}>
                            Home
                        </Link>
                    </a>
                </li>
                <li>
                    <a className='a-nav' href="#menu">
                        <Link className="nav-link" to={{pathname:"/caterings"}}>
                            Caterings
                        </Link>
                    </a>
                </li>
                <li>
                    <a className='a-nav' href="#about">
                        <Link className="nav-link" to={{pathname:"/contact"}}>
                            Contact
                        </Link>
                    </a>
                </li>
                <li>
                    <a className='a-nav' href="#order">
                        <Link className="nav-link" to={{pathname:"/login"}}>
                            Login
                        </Link>
                    </a>
                </li>
            </ul>
        </nav>
        <div id="mobile">
            <div className="logo1"><span>CaterServe</span></div>
            <ul className='nav-ul'>
                <li><a className='a-nav' href="#home">Home</a></li>
                <li><a className='a-nav' href="#menu">Caterings</a></li>
                <li><a className='a-nav' href="#about">Contact</a></li>
                <li><a className='a-nav' href="#order">Login</a></li>
            </ul>
        </div>
    </>
  )
}

export default Navbar