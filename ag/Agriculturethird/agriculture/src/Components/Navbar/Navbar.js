import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link'

export default function Navbar() {
  return (
    <div>
        <header>
        <h2><Link to="/">Kisan</Link></h2>
        <ul className="nav">
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/services">services</Link></li>
            <li><Link to="/contact">contact</Link></li>
        </ul>  
    </header>
    </div>
  )
}
