import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import ProjectTemplate from "views/Templates/ProjectTemplate.js";
import video1 from "assets/video/projects/waterlooRush/waterlooRush1.mp4";

import styles from "assets/jss/material-kit-react/views/templates/projectTemplate.js";

const useStyles = makeStyles(styles);

export default function RecycleRightPage() {
  const classes = useStyles();
  const description = `Waterloo Rush is an infinite runner game built with Unity, based off of the popular app Jetpack Joyride.
   A student runs and flies through geese-filled hallways at the University of Waterloo, while dodging failing grades and construction work.`;

  const techStack = "Unity, C#";

  const mediaList = [
    <div key={0}>
      <video
        autoPlay
        muted
        loop
        src={video1}
        alt="Waterloo Rush Demo"
        className="slick-image"
      />
    </div>
  ];
  return (
    <ProjectTemplate
      title="Waterloo Rush"
      backgroundImage={require("assets/img/bg13-min.jpg")}
      sourceCodeLink="https://github.com/LenaNguyen/WaterlooRush"
      description={description}
      techStack={techStack}
      mediaList={mediaList}
    >
      <h2 className={classes.centerText}>Inspiration</h2>
      <p>
        This game was developed with a group of five other developers in the
        span of 48 hours as a result of our impulsive decision to participate in
        a Game Jam (a hackathon-like event for game development). Without any
        prior game development experience in our team, I embraced the challenge
        of learning as much as I could in such little time.
      </p>
      <br />
      <h2 className={classes.centerText}>Process</h2>
      <p>
        The three parts that I implemented were the{" "}
        <strong>
          infinite background, the sprite animation of the student, and the
          flying mechanic.{" "}
        </strong>
        A function was created for the infinite background in which the
        character remained in the same spot, moving in the y direction, but the
        floor and walls moved backwards. When one wall reaches the end of the
        view, the function adds a new one to the beginning of the view. Using
        open source sprites, I found and implemented several sprites for the
        running, flying and dying animations. Finally, the flying mechanic used
        Unity’s built in physics engine and through testing the flying through
        trial and error, I was able to find the most suitable settings for
        gravity and flying when the user clicked on the screen.
      </p>
    </ProjectTemplate>
  );
}
