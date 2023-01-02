import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="section">
    <div className="container">
        <div className="content-section">
             <div className="title">
                <h1>About Us</h1>
             </div>   
             <div className="content">
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci excepturi, dolore voluptates error omnis, vero consectetur impedit mollitia dicta facere alias debitis rerum provident. Esse deleniti asperiores quibusdam veniam qui?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam dolor quidem eaque labore facilis ipsum, quisquam nulla consequatur! Nesciunt perferendis odit nihil? Aspernatur quam repudiandae unde tempore.</p>
                <div className="button">
                    <a href="">Read more</a>
                </div>
            </div>
            <div className="social">
                <a href=""><i className="fa fa-facebook"></i></a>
                <a href=""><i className="fa fa-twitter"></i></a>
                <a href=""><i className="fa fa-instagram"></i></a>
            </div>
        </div>
        <div className="image-section">
            <img src="static/images/tractor.jpg" alt ="tractor"/>
        </div>
    </div>
</div>
  )
}
