import React from "react";

import ProjectTemplate from "views/Templates/ProjectTemplate.js";
import video1 from "assets/video/projects/recycleRight/recycleRight1-min.mp4";
import video2 from "assets/video/projects/recycleRight/recycleRight2-min.mp4";
import image3 from "assets/img/projects/travelwise/travelwise4.jpg";

export default function RecycleRightPage() {
  const description = `Recycle Right is a mobile waste classifying app that allows users to take a picture of an item,
   and then will classify it as recyclable, compost, landfill, or not a waste product.`;

  const techStack = "React Native, IBM Watson, Node.js, Heroku";

  const mediaList = [
    <div key={0}>
      <video
        style={{ maxHeight: "600px" }}
        autoPlay
        muted
        loop
        alt="Recycle Right Demo 1"
        src={video1}
        className="slick-image"
      ></video>
    </div>,
    <div key={1}>
      <video
        style={{ maxHeight: "600px" }}
        autoPlay
        muted
        loop
        alt="Recycle Right Demo 2"
        src={video2}
        className="slick-image"
      ></video>
    </div>
  ];
  return (
    <ProjectTemplate
      title="Recycle Right"
      backgroundImage={require("assets/img/bg9-min.jpg")}
      sourceCodeLink="https://github.com/LenaNguyen/RecycleRight"
      description={description}
      techStack={techStack}
      mediaList={mediaList}
    />
  );
}
