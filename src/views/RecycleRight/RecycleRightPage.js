import React from "react";

import ProjectTemplate from "views/Templates/ProjectTemplate.js";
import image1 from "assets/img/projects/travelwise/travelwise2-min.jpg";
import image2 from "assets/img/projects/travelwise/travelwise3-min.jpg";
import image3 from "assets/img/projects/travelwise/travelwise4.jpg";

export default function RecycleRightPage() {
  const description = `Recycle Right is a mobile waste classifying app that allows users to take a picture of an item,
   and then will classify it as recyclable, compost, landfill, or not a waste product.`;

  const techStack = "React Native, IBM Watson, Node.js, Heroku";

  const mediaList = [
    <div key={0}>
      <img src={image1} alt="Landing Page" className="slick-image" />
    </div>,
    <div key={1}>
      <img src={image2} alt="yearly view" className="slick-image" />
    </div>,
    <div key={2}>
      <img src={image3} alt="yearly view" className="slick-image" />
    </div>
  ];
  return (
    <ProjectTemplate
      title="Recycle Right"
      backgroundImage={require("assets/img/bg8-min.jpg")}
      sourceCodeLink="https://github.com/LenaNguyen/RecycleRight"
      description={description}
      techStack={techStack}
      mediaList={mediaList}
    />
  );
}
