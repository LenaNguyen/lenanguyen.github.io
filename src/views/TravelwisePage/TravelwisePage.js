import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import ProjectTemplate from "views/Templates/ProjectTemplate.js";
import image1 from "assets/img/projects/travelwise/travelwise2-min.jpg";
import image2 from "assets/img/projects/travelwise/travelwise3-min.jpg";
import image3 from "assets/img/projects/travelwise/travelwise4.jpg";

import styles from "assets/jss/material-kit-react/views/templates/projectTemplate.js";

const useStyles = makeStyles(styles);

export default function TravelwisePage() {
  const classes = useStyles();

  const description = `Dancefest is an opensource project created for the nonprofit, Sustainable Region of Waterloo. 
  They have a sustainable transportation initiative called Travelwise, which connects employees in a company so that they can carpool more often.
  Each participant company gains points the more its employees use sustainable transportation. This web application allows members to check their 
  company's score, view news posted by the admin, receive surveys created by the admin, as well as send and receive documents.`;

  const techStack = "React, Node.js, GraphQL, Hasura, PostgreSQL";

  const mediaList = [
    <div key={0}>
      <img src={image1} alt="Landing Page" className="slick-image" />
    </div>,
    <div key={1}>
      <img src={image2} alt="Document Hosting" className="slick-image" />
    </div>,
    <div key={2}>
      <img src={image3} alt="Survey Builder" className="slick-image" />
    </div>
  ];
  return (
    <ProjectTemplate
      title="Travelwise"
      backgroundImage={require("assets/img/bg8-min.jpg")}
      sourceCodeLink="https://github.com/orgs/uwblueprint/teams/f19-travelwise/repositories"
      description={description}
      techStack={techStack}
      mediaList={mediaList}
    >
      <h2 className={classes.centerText}>Contributions</h2>
      <h3>Document Hosting</h3>
      <p>
        I conducted the full stack development of the document hosting feature
        for Travelwise.
      </p>
      <h4>Process</h4>
      <p>
        Due to the large size of the documents, storing them in our postreSQL
        database as a binary would be a large performance issue and would bloat
        the database. Another option was to use a cloud storage service such as
        AWS or Azure and store the links to these files in the database. This
        solution proved to be better in terms of performance, cost, and
        flexibility. If we ever needed to change the database we were using, we
        could easily migrate the file locations over. In the end, I chose to use
        an AWS S3 Bucket over Azure Blob because of the lower cost.
      </p>
      <br />
      <h3>Questionnaire Database Design</h3>
      <p>
        Another feature of Travelwise is the ability to create
        questionnaires/surveys. Due to the write intensive nature of creating
        surveys, a normalized relational database design was chosen. This also
        reduces the possibility of anomalies in the data.
      </p>
    </ProjectTemplate>
  );
}
