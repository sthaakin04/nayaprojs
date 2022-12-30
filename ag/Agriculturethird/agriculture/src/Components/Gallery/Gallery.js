import React from "react";
import "./Gallery.css";

export default function Gallery() {
  return (
    <div>
      {/* <div className="demo-description">
        <h1 className="demo-description__title">Full Course Dinner</h1>
        <p className="demo-description__p">Resize the browser to see the <picture/> effect.</p>
        </div> */}

      <div className="demo coursemeal">
        {/* <!-- APPETIZERS--> */}
        <div className="coursemeal__div ">
          <picture className="responsive-img">
            <source
              media="(min-width: 992px)"
              srcSet="https://i.postimg.cc/jSTZmp8H/appetizer-img-1.jpg"
            />
            <source
              media="(min-width: 767px)"
              srcSet="https://i.postimg.cc/1RTdCYhB/appetizer-img-2.jpg"
            />
            <source srcSet="https://i.postimg.cc/TwnctQr7/appetizer-img-3.jpg" />
            <img
              src="https://i.postimg.cc/jSTZmp8H/appetizer-img-1.jpg"
              alt="Appetizer"
            />
          </picture>

          <div className="coursemeal-info">
            <a href="#" className="coursemeal-info__link">
              Appetizer
            </a>
          </div>
        </div>

        {/* <!-- MAIN COURSE--> */}
        <div className="coursemeal__div">
          <picture className="responsive-img">
            <source
              media="(min-width: 992px)"
              srcSet="https://i.postimg.cc/V6NCCRK0/maindish-img-1.jpg"
            />
            <source
              media="(min-width: 767px)"
              srcSet="https://i.postimg.cc/9XYj186s/maindish-img-2.jpg"
            />
            <source srcSet="https://i.postimg.cc/pLY8dt4q/maindish-img-3.jpg" />
            <img
              src="https://i.postimg.cc/V6NCCRK0/maindish-img-1.jpg"
              alt="Main Course"
            />
          </picture>

          <div className="coursemeal-info">
            <a href="#" className="coursemeal-info__link">
              Main Course
            </a>
          </div>
        </div>

        {/* <!-- DESSERTS--/> */}
        <div className="coursemeal__div">
          <picture className="responsive-img">
            <source
              media="(min-width: 992px)"
              srcSet="https://i.postimg.cc/9FfLh6ZZ/dessert-img-1.jpg"
            />
            <source
              media="(min-width: 767px)"
              srcSet="https://i.postimg.cc/FsRXBnKn/dessert-img-2.jpg"
            />
            <source srcSet="https://i.postimg.cc/ZKcFCVFZ/dessert-img-3.jpg" />
            <img
              src="https://i.postimg.cc/ZKcFCVFZ/dessert-img-1.jpg"
              alt="Desserts"
            />
          </picture>

          <div className="coursemeal-info">
            <a href="#" className="coursemeal-info__link">
              Dessert
            </a>
          </div>
        </div>
      </div>






      <div className="demo coursemeal">
        {/* <!-- APPETIZERS--> */}
        <div className="coursemeal__div ">
          <picture className="responsive-img">
            <source
              media="(min-width: 992px)"
              srcSet="https://i.postimg.cc/jSTZmp8H/appetizer-img-1.jpg"
            />
            <source
              media="(min-width: 767px)"
              srcSet="https://i.postimg.cc/1RTdCYhB/appetizer-img-2.jpg"
            />
            <source srcSet="https://i.postimg.cc/TwnctQr7/appetizer-img-3.jpg" />
            <img
              src="https://i.postimg.cc/jSTZmp8H/appetizer-img-1.jpg"
              alt="Appetizer"
            />
          </picture>

          <div className="coursemeal-info">
            <a href="#" className="coursemeal-info__link">
              Appetizer
            </a>
          </div>
        </div>

        {/* <!-- MAIN COURSE--> */}
        <div className="coursemeal__div">
          <picture className="responsive-img">
            <source
              media="(min-width: 992px)"
              srcSet="https://i.postimg.cc/V6NCCRK0/maindish-img-1.jpg"
            />
            <source
              media="(min-width: 767px)"
              srcSet="https://i.postimg.cc/9XYj186s/maindish-img-2.jpg"
            />
            <source srcSet="https://i.postimg.cc/pLY8dt4q/maindish-img-3.jpg" />
            <img
              src="https://i.postimg.cc/V6NCCRK0/maindish-img-1.jpg"
              alt="Main Course"
            />
          </picture>

          <div className="coursemeal-info">
            <a href="#" className="coursemeal-info__link">
              Main Course
            </a>
          </div>
        </div>

        {/* <!-- DESSERTS--/> */}
        <div className="coursemeal__div">
          <picture className="responsive-img">
            <source
              media="(min-width: 992px)"
              srcSet="https://i.postimg.cc/9FfLh6ZZ/dessert-img-1.jpg"
            />
            <source
              media="(min-width: 767px)"
              srcSet="https://i.postimg.cc/FsRXBnKn/dessert-img-2.jpg"
            />
            <source srcSet="https://i.postimg.cc/ZKcFCVFZ/dessert-img-3.jpg" />
            <img
              src="https://i.postimg.cc/ZKcFCVFZ/dessert-img-1.jpg"
              alt="Desserts"
            />
          </picture>

          <div className="coursemeal-info">
            <a href="#" className="coursemeal-info__link">
              Dessert
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
