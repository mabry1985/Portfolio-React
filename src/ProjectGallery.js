import React from "react";
import Carousel from "re-carousel";
import IndicatorDots from "./indicator-dots";
import Buttons from "./buttons";
import holeinthewall from "./assets/Landing-Page.png";
import Example from "./Example";

function ProjectGallery() {
  return (
    <Carousel loop auto widgets={[IndicatorDots, Buttons]}>
      <div
        className="carousel-frame"
        style={{ backgroundColor: "tomato", height: "1000px" }}
      >
        <img src={holeinthewall} />
        <div>
          <h2>Hole in the Wall</h2>
          <p>
            This project was a capstone for Epicodus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti dignissimos autem ad amet
            ipsam hic magnam, laborum, unde ab quos eveniet accusamus dolor
            mollitia animi illum iusto commodi. Asperiores ut, non aut, iusto
            eius fugit in, deserunt totam nobis vero omnis. Necessitatibus
            aliquid minima totam eius, esse molestiae laboriosam exercitationem.
          </p>
        </div>
      </div>
      <div
        className="carousel-frame"
        style={{ backgroundColor: "orange", height: "1000px" }}
      >
        <Example/>
      </div>
      <div
        className="carousel-frame"
        style={{ backgroundColor: "orchid", height: "1000px" }}
      >
        Frame 3
      </div>
    </Carousel>
  );
}

export default ProjectGallery