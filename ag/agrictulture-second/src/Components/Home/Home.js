import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './Home.css'
import HomeContents from '../HomeContents/HomeContents';
const Home=()=> {
  return (
    <>
    <div className="home">
      <section>
        <div className="content">
            <div className="info">
                <h2>Like Agriculture<br/><span>Be Farmer!</span></h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque praesentium culpa cumque, excepturi iure explicabo nihil ducimus nobis in sed ut. Explicabo voluptate natus dolores rem quae pariatur, praesentium reiciendis.</p>
                <a href="#" className="info-btn">More info</a>
            </div>
        </div>
        <div className="media-icons">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </section>
    </div>
      <HomeContents/>

    </>
  )
}
export default Home;
