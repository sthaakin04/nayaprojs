import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom';

export default function Navbar() {
    const menu=(e) => {
        let menu = document.querySelector('#menu-icon');
        let navbar = document.querySelector('.navbar');
        
        menu.onclick = () => {
          menu.classList.toggle('bx-x');
          navbar.classList.toggle('open');
        }
      }
  return (
    <div>
      <header>
            {/* <Link to='#' className='logo'><img src="static/images/logo.png"/><span>Logo</span></Link> */}
            <Link to="/" className='logo'><img src="static/images/logotest.png"/></Link>
            <ul className='navbar'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Project Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <div className='main'>
                <div className='bx bx-menu' id="menu-icon" onClick={menu}></div>
            </div>
      </header>
    </div>
  )
}
