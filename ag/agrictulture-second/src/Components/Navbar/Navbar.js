import React, { useEffect } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link'

export default function Navbar() {
  useEffect(() => {
    var navv = document.getElementById("navv")
    navv.onclick = function(e) {
      e.stopPropagation()
    }
  });
  return (
    <div className="navbar">
       <input type="checkbox" id="check"/>
        <header>
            <h2><Link to="/" className="logo">Logo</Link></h2>
            <div className="navigation" id='navv'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                {/* <a href="/services">Services</a> */}
                <Link to="/contact">Contact</Link>
            </div>
            <label htmlFor="check">
                <i className="fas fa-bars menu-btn"></i>
                <i className="fas fa-times close-btn"></i>
            </label>
        </header>
    </div>
  )
}
