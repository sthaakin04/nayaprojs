import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Contents from '../Contents/Contents'
import './Home.css'
export default function Home() {
  return (
    <>
    <div id="home">
      <section className="box">
        <video src="static/images/fieldvideoall.mp4" autoPlay muted loop></video>
        <div className="content">
            <div className="info">
                <h2>Like Agriculture<br/><span>Be Farmer!</span></h2>
                <button type="button" className="btn btn-success">More Info</button>
            </div>
        </div>
      </section>
    </div>
  <Contents/>
    
    </>
  )
}
