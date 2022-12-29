import React from 'react'
import './About.css'

export default function About() {
  return (
    <main className="about">
  <div className="container">
    <section className="grid info">
      <div className="column-xs-12 column-md-1">
        <div className="about">
        <h1 className="section-heading">Global</h1>
        </div>
      </div>
      <div className="column-xs-12 column-md-4">
        <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
      </div>
      <div className="column-xs-12 column-md-7">
        <div className="intro">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad officiis perspiciatis consequatur, exercitationem eveniet! Mollitia maxime voluptatum quam quia dolore inventore neque sit. Minima veritatis iusto fugit soluta ut.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quos optio necessitatibus. Cumque, culpa! Architecto id nemo iure esse molestias. Eum doloribus expedita temporibus explicabo aut nisi laboriosam aspernatur est?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit autem, nulla voluptate incidunt fuga, tempore officia sequi atque, repellat aut ipsam aliquam perspiciatis asperiores aliquid doloribus quia nemo adipisci in.</p>
        </div>
      </div>
      <div className="column-xs-12 column-md-7">
        <blockquote>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa provident voluptatem consectetur illum, natus placeat incidunt tempora architecto aliquid recusandae eligendi repudiandae ex laborum neque quod cum id facere nulla.</h3>
        </blockquote>
      </div>
      <div className="column-xs-12 column-md-5">
        <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"/>
      </div>
    </section>
  </div>
</main>
  )
}
