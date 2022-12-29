import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './Home.css'
export default function Home() {
  return (
    <div id="home">
      <section className="box">
        <video src="static/images/fieldvideoall.mp4" autoPlay muted loop></video>
        <div className="content">
            <div className="info">
                <h2>Like Agriculture<br/><span>Be Farmer!</span></h2>
                <button type="button" class="btn btn-secondary">Left</button>
            </div>
        </div>
      </section>

      <div className="about-us">
      <div className="text">
          <h2>Discover</h2>
          <h3>Our Story</h3>
          <div><i className="fas fa-asterisk"></i></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolores sit ipsam incidunt soluta aspernatur itaque pariatur! Fuga id provident quas vitae, dolore error mollitia excepturi iusto repellat, blanditiis deleniti.</p>
      </div>
      <div className="image-container">
          <div className="image image1">
              <img src="static/images/ag1.png" alt="aboutus photo"/>
          </div>
          <div className="image image2">
              <img src="static/images/ag2.png" alt="aboutus photo"/>
          </div>
      </div>
  </div>
    </div>
  )
}
