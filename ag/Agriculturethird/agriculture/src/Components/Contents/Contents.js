import React from 'react'
import './Contents.css'
import { useEffect } from 'react';

export default function Contents() {
  useEffect(() => {
    (function() {
      var $slides = document.querySelectorAll('.slide');
      var $controls = document.querySelectorAll('.slider__control');
      var numOfSlides = $slides.length;
      var slidingAT = 1300; // sync this with scss variable
      var slidingBlocked = false;
    
      [].slice.call($slides).forEach(function($el, index) {
        var i = index + 1;
        $el.classList.add('slide-' + i);
        $el.dataset.slide = i;
      });
    
      [].slice.call($controls).forEach(function($el) {
        $el.addEventListener('click', controlClickHandler);
      });
    
      function controlClickHandler() {
        if (slidingBlocked) return;
        slidingBlocked = true;
    
        var $control = this;
        var isRight = $control.classList.contains('m--right');
        var $curActive = document.querySelector('.slide.s--active');
        var index = +$curActive.dataset.slide;
        (isRight) ? index++ : index--;
        if (index < 1) index = numOfSlides;
        if (index > numOfSlides) index = 1;
        var $newActive = document.querySelector('.slide-' + index);
    
        $control.classList.add('a--rotation');
        $curActive.classList.remove('s--active', 's--active-prev');
        document.querySelector('.slide.s--prev').classList.remove('s--prev');
        
        $newActive.classList.add('s--active');
        if (!isRight) $newActive.classList.add('s--active-prev');
        
    
        var prevIndex = index - 1;
        if (prevIndex < 1) prevIndex = numOfSlides;
    
        document.querySelector('.slide-' + prevIndex).classList.add('s--prev');
    
        setTimeout(function() {
          $control.classList.remove('a--rotation');
          slidingBlocked = false;
        }, slidingAT*0.75);
      };
    }());
  });
  return (
    <>
    <div className="slider">
  <div className="slider__slides">
    <div className="slide s--active">
      <div className="slide__inner">
        <div className="slide__content">
          <h2 className="slide__heading">Agro based projects</h2>
          <p className="slide__text">Greetings, Farmer!</p>
        </div>
      </div>
    </div>
    <div className="slide">
      <div className="slide__inner">
        <div className="slide__content">
          <h2 className="slide__heading">Agro products</h2>
          <p className="slide__text">Our best products!</p>
        </div>
      </div>
    </div>
    <div className="slide">
      <div className="slide__inner">
        <div className="slide__content">
          <h2 className="slide__heading">Future Tech for your farm</h2>
          <p className="slide__text">It looks cool, isn't it?</p>
        </div>
      </div>
    </div>
    <div className="slide">
      <div className="slide__inner">
        <div className="slide__content">
          <h2 className="slide__heading">New ways</h2>
          <p className="slide__text">Forget about the traditional ways of farming</p>
        </div>
      </div>
    </div>
    <div className="slide s--prev">
      <div className="slide__inner">
        <div className="slide__content">
          <h2 className="slide__heading">Check my other stuff!</h2>
          <p className="slide__text"><a href="https://codepen.io/suez/pens/public/" target="_blank">Other demos</a> and <a href="https://twitter.com/NikolayTalanov" target="_blank">Twitter</a></p>
        </div>
      </div>
    </div>
  </div>

  <div className="slider__control">
    <div className="slider__control-line"></div>
    <div className="slider__control-line"></div>
  </div>
  <div className="slider__control slider__control--right m--right">
    <div className="slider__control-line"></div>
    <div className="slider__control-line"></div>
  </div>
</div>
    </>
  )
}
