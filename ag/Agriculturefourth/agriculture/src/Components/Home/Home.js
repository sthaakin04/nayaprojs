import React from "react";
import Contents from "../Contents/Contents";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div id="parallax-wrapper">
        <section>
          <div className="p-one parallax-inner">
            <h2>Farm better</h2>
          </div>
        </section>
        <section>
          <div className="content-text">
            <p>
              <span className="first-letter red">T</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus repellendus distinctio reiciendis consequatur quibusdam cupiditate, dicta consectetur vel velit! Voluptates commodi saepe veritatis soluta iure animi omnis nesciunt nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nisi neque! Enim rerum laudantium quam placeat, itaque aliquam, at illum sit repellendus nihil eveniet inventore doloribus deserunt nesciunt! Cum, magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed natus neque, amet error a vel, beatae saepe eos qui veritatis odit aut atque soluta explicabo consequuntur, eaque autem nulla voluptatum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam similique reprehenderit placeat! Minus, animi neque accusantium minima dolorem repellat eaque voluptatum ipsam hic. Optio suscipit earum assumenda fugiat sequi ab!
            </p>
            <div className="line-break"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugit ipsam omnis. Ratione quasi, placeat eos commodi, quam eligendi deserunt accusantium ipsa temporibus numquam molestiae accusamus sapiente impedit velit. Obcaecati. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum architecto, ipsa alias reiciendis numquam magnam repellendus amet dolorem tenetur sit, eius atque aliquid illo minus sunt, veniam fugiat necessitatibus natus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur incidunt ipsam possimus eligendi, qui, illum consequatur maiores odit praesentium quibusdam debitis maxime doloremque est. Accusantium numquam possimus a architecto iste.
            </p>
          </div>
        </section>
      </div>
      <Contents />
    </>
  );
}
