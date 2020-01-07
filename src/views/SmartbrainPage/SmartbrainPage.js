import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import ProjectTemplate from "views/Templates/ProjectTemplate.js";
import image1 from "assets/video/projects/smartbrain/smartbrain.mp4";
import image2 from "assets/img/projects/smartbrain/smartbrain2-min.jpg";

import styles from "assets/jss/material-kit-react/views/templates/projectTemplate.js";

const useStyles = makeStyles(styles);

export default function SafenetPage() {
  const classes = useStyles();
  const description =
    "SmartBrain is a full stack web application that utilizes a facial recognition API from Clarifai to render a box around human faces in a given photo. It tracks account information, which includes the number of photos successfully analyzed by the API. The application also contains error notifications for when invalid information is supplied.";

  const techStack = "React, Node.js, Express, PostgreSQL";

  const mediaList = [
    <div key={0}>
      <video autoPlay muted loop src={image1} className="slick-image"></video>
    </div>,
    <div key={1}>
      <img src={image2} alt="yearly view" className="slick-image" />
    </div>
  ];
  return (
    <ProjectTemplate
      title="Smartbrain"
      backgroundImage={require("assets/img/bg9-min.jpg")}
      sourceCodeLink="https://github.com/LenaNguyen/Myndset"
      description={description}
      techStack={techStack}
      mediaList={mediaList}
    >
      <h2 className={classes.centerText}>Inspiration</h2>
      <p>
        This web application is the result of my endeavor to practice full stack
        development in conjunction with my fascination for machine learning. I
        chose to create this project to explore the power of today’s available
        and free machine learning resources. Though I do not have any formal
        knowledge of machine learning development yet, this project was a good
        introduction to interacting with machine learning software.
      </p>
      <h2 className={classes.centerText}>Process</h2>
      <p>
        <strong>Developing UI: </strong>
        The goal of the user interface was to be straightforward as the focus
        around the project was being able to properly utilize a third-party api
        as well as connecting to the backend service I created. Each page exists
        to serve one primary action — login, register, facial recognition — with
        the primary interface being at the center of the viewport, in order to
        clearly convey how the application is to be used. Using React, the page
        was broken up into smaller components such as Alert, Navigation, Logo,
        and FacialRecognition. React was leveraged to easily make dynamic
        changes to the DOM, such as rendering the boxes around detected faces in
        a photo and rendering error messages, based on an API’s response to the
        user’s input.
      </p>
      <p>
        <strong>Database design: </strong>
        The relational database contains two tables: login and users. This is a
        simple schema and, though there was not a relevant performance tradeoff
        by having two tables, an improvement to the design would be to combine
        them into one, since users are always created with a mandatory password.
      </p>
      <p>
        <strong>Backend server: </strong>
        The first step was to map out what API’s I needed for the application. I
        went through each page in the application and identified areas which
        needed to interact with the backend. This ended up consisting of an API
        for sign in, register, getting the user profile, updating the user
        submission count, and one to call the facial recognition API. Express.js
        was used to create the server and Knex.js was used make queries to the
        database. Bcrypt.js was used to hash the passwords before being added to
        the database for security.
      </p>
    </ProjectTemplate>
  );
}
