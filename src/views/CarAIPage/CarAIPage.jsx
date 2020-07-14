import React from "react";
import ProjectTemplate from "views/Templates/ProjectTemplate.js";
import video1 from "assets/video/projects/carAI/carAI1.mp4";

export default function CarAIPage() {
  const description = `This AI connects to the Udacity self driving car simulator in order \
  to receive images of the car's current position. From these images, the model will return a steering angle \
  that is then given to the simulation. This project leverages the concept of behavioural cloning, \
  where the model learns how to steer itself based on data collected from a human user controlling the \
  car at first.`;

  const techStack = "Python, Tensorflow, Keras, Numpy, Flask, Socket.io";

  const mediaList = [
    <div key={0}>
      {" "}
      <video
        autoPlay
        muted
        loop
        src={video1}
        alt="Autonomous Car AI Demo"
        className="slick-image"
      />
    </div>
  ];
  return (
    <ProjectTemplate
      title="Autonomous Car AI"
      backgroundImage={require("assets/img/bg8-min.jpg")}
      sourceCodeLink="https://github.com/LenaNguyen/autonomousCar"
      description={description}
      techStack={techStack}
      mediaList={mediaList}
    />
  );
}
