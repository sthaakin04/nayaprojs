import React from 'react'
import './Contents.css'
import { useEffect } from 'react';

export default function Contents() {
  return (
    <>
    <div className='contents'>
    <div class="demo-description">
      <h1 class="demo-description__title">Full Course Dinner</h1>
      <p class="demo-description__p">Resize the browser to see the effect.</p>
    </div>

    <div class="demo coursemeal">

        {/* <!-- APPETIZERS--> */}
        <div class="coursemeal__div ">
            
            <div class="responsive-img">
                <source media="(min-width: 992px)" srcset="https://i.postimg.cc/jSTZmp8H/appetizer-img-1.jpg"/>
                <source media="(min-width: 767px)" srcset="https://i.postimg.cc/1RTdCYhB/appetizer-img-2.jpg"/>
                <source srcset="https://i.postimg.cc/TwnctQr7/appetizer-img-3.jpg"/>
                <img src="https://i.postimg.cc/jSTZmp8H/appetizer-img-1.jpg" alt="Appetizer"/>
            </div>     
            
            <div class="coursemeal-info">
                <a href="#" class="coursemeal-info__link">Appetizer</a>
            </div>
        </div>

        {/* <!-- MAIN COURSE--> */}
        <div class="coursemeal__div">
            
            <div class="responsive-img">
                <source media="(min-width: 992px)" srcset="https://i.postimg.cc/V6NCCRK0/maindish-img-1.jpg"/>
                <source media="(min-width: 767px)" srcset="https://i.postimg.cc/9XYj186s/maindish-img-2.jpg"/>
                <source srcset="https://i.postimg.cc/pLY8dt4q/maindish-img-3.jpg"/>
                <img src="https://i.postimg.cc/V6NCCRK0/maindish-img-1.jpg" alt="Main Course"/>
            </div> 

            <div class="coursemeal-info">
                <a href="#" class="coursemeal-info__link">Main Course</a>
            </div>            
        </div>

        {/* <!-- DESSERTS--> */}
        <div class="coursemeal__div">
            
            <div class="responsive-img">
                <source media="(min-width: 992px)" srcset="https://i.postimg.cc/9FfLh6ZZ/dessert-img-1.jpg"/>
                <source media="(min-width: 767px)" srcset="https://i.postimg.cc/FsRXBnKn/dessert-img-2.jpg"/>
                <source srcset="https://i.postimg.cc/ZKcFCVFZ/dessert-img-3.jpg"/>
                <img src="https://i.postimg.cc/ZKcFCVFZ/dessert-img-1.jpg" alt="Desserts"/>
            </div>

            <div class="coursemeal-info">
                <a href="#" class="coursemeal-info__link">Dessert</a>
            </div>              
        </div>


    </div>

    </div>
    </>
  )
}
