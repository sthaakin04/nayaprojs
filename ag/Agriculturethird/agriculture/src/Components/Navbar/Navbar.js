import React from 'react'
import './Navbar.css'
// import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'

export default function Navbar() {
  return (
    <div>
        <header>
        <h2><HashLink smooth to="/#home">Kisan</HashLink></h2>
        <ul className="nav">
            <li><HashLink smooth to="/#home">home</HashLink></li>
            <li><HashLink smooth to="/#about">about</HashLink></li>
            <li><HashLink smooth to="/#services">services</HashLink></li>
            <li><HashLink smooth to="/#contact">contact</HashLink></li>
        </ul>  
    </header>
    </div>
  )
}
