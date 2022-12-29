import React from 'react'
import './About.css'

export default function About() {
  return (
    <div id="about">
      <div className="container">
      <h1>Global agriculture</h1>
      <p>Zlatibor is a mountain of exceptional beauty whose special geographical properties have made this mountain a real gem of western Serbia.</p>
      {/* <a href="#">Learn more</a> */}
    </div>

    <div className="blank" id="services">
        <h2>Our Services</h2>
    </div>

    <div className="container second">
      <div className="item">
        <div className="img img-first"></div>
        <div className="card">
          <h3>Harvesting</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga eligendi consequatur accusamus modi ea! Corporis reiciendis omnis, explicabo, perspiciatis, illum similique ex corrupti sunt eaque exercitationem velit repellendus impedit?</p>
          {/* <a href="#">Learn more</a> */}
        </div>
      </div>
      <div className="item">
        <div className="img img-second"></div>
        <div className="card">
          <h3>Fertility Boost</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, ab quas, beatae rem praesentium provident unde explicabo laborum illum ea nesciunt nobis vitae deleniti accusamus voluptas omnis ut. Soluta, debitis!</p>
          {/* <a href="#">Learn more</a> */}
        </div>
      </div>
      <div className="item">
        <div className="img img-third"></div>
        <div className="card">
          <h3>Boost production</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, iusto esse? Eos sapiente quod aperiam soluta nihil molestiae tenetur dolore nam placeat! A in labore aspernatur repellat pariatur, voluptates facere!</p>
          {/* <a href="#">Learn more</a> */}
        </div>
      </div>
    </div>
    </div>
  )
}
