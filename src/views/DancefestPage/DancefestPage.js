import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import ProjectTemplate from "views/Templates/ProjectTemplate.js";
import image1 from "assets/img/projects/dancefest/dancefest2.jpg";
import image2 from "assets/img/projects/dancefest/dancefest3.jpg";
import image3 from "assets/img/projects/dancefest/dancefest4.jpg";

import styles from "assets/jss/material-kit-react/views/templates/projectTemplate.js";

const useStyles = makeStyles(styles);

export default function DancefestPage() {
  const classes = useStyles();

  const description = `Dancefest is an opensource project created for the nonprofit, Ontario Secondary School Dancefest (OSSDF) ,
  to move their adjudication process for dance competitions from paper to online. The web appication tracks 
  and organizes the performances, adjudications, and awards. Meanwhile, the android application is given to judges where they can submit adjudications.`;

  const techStack = "React, Python, Flask, PostgreSQL";

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
      title="Dancefest"
      backgroundImage={require("assets/img/bg8-min.jpg")}
      sourceCodeLink="https://github.com/orgs/uwblueprint/teams/dancefest/repositories"
      description={description}
      techStack={techStack}
      mediaList={mediaList}
    >
      <h2 className={classes.centerText}>Contributions</h2>
      <h3>NoSQL to SQL</h3>
      <p>
        I transitioned the application from using a NoSQL database to a SQL
        database to reduce the complexities of queries and improve performance.
        This invovled designing a new relational database schema, developing new
        RESTful apis in Flask, and rerouting the front end.
      </p>
      <h3>Awards Considerations Feature</h3>
      <p>
        I lead the development of the back end endpoints needed for an awards
        considerations feature. This feature allows users to view the
        performances nominated for an award and stats about the performance,
        such as how many judges nominated it and how many other awards it has
        been nominated for. The feature helps judges to ensure that the same
        dance does not win the majority of awards.
      </p>
    </ProjectTemplate>
  );
}
