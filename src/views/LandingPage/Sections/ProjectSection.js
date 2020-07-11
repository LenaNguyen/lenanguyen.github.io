import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/projectStyle.js";

import myndset from "assets/img/projects/myndset/myndset1-min.jpg";
import safenet from "assets/img/projects/safenet/safenet1-min.jpg";
import dancefest from "assets/img/projects/dancefest/dancefest1-min.jpg";
import smartbrain from "assets/img/projects/smartbrain/smartbrain1-min.jpg";
import recycleRight from "assets/img/projects/recycleRight/recycleRight1-min.jpg";
import waterlooRush from "assets/img/projects/waterlooRush/waterlooRush1-min.jpg";
import travelwise from "assets/img/projects/travelwise/travelwise1-min.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function ProjectSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgFluid);

  const projectCard = ({
    xs,
    sm,
    md,
    description,
    title,
    image,
    imageAlt,
    projectLink,
  }) => {
    return (
      <GridItem xs={xs || 12} sm={sm || 12} md={md || 4}>
        <img src={image} alt={imageAlt} className={imageClasses} />
        <div className={classes.imgCardOverlay}>
          <h3 className={classes.overlayTitle}>{title}</h3>
          <p className={classes.overlayTitle}>{description}</p>
          <Button color="info" size="sm" to={projectLink} component={Link}>
            Learn More
          </Button>
        </div>
      </GridItem>
    );
  };

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Projects</h2>
      <div>
        <GridContainer spacing={3}>
          {projectCard({
            description:
              "A chrome extension that protects children browsing the internet.",
            title: "Safe.net",
            image: safenet,
            imageAlt: "Safe.net",
            projectLink: "/projects/safenet",
          })}
          {projectCard({
            description:
              "A web app that keeps track of points, news, and documents\
			  between companies participating in the sustainable\
			  transportation initiative.",
            title: "Travelwise",
            image: travelwise,
            imageAlt: "Travelwise",
            projectLink: "/projects/travelwise",
          })}
          {projectCard({
            description:
              "A full stack application which detects human faces in photos.",
            title: "Smartbrain",
            image: smartbrain,
            imageAlt: "smartbrain",
            projectLink: "/projects/smartbrain",
          })}
          {projectCard({
            description:
              "An admin portal which manages the adjudications for the Ontario",
            title: "Dancefest",
            image: dancefest,
            imageAlt: "Dancefest",
            projectLink: "/projects/dancefest",
            md: 6,
          })}
          {projectCard({
            description: "A digital mood journal that predicts your emotions.",
            title: "Myndset",
            image: myndset,
            imageAlt: "Myndset",
            projectLink: "/projects/myndset",
            md: 6,
          })}
          {projectCard({
            description:
              "A mobile app that identifies if an item is recycling, compost,\
			  or landfill.",
            title: "Recycle Right",
            image: recycleRight,
            imageAlt: "Recycle Right",
            projectLink: "/projects/recycleRight",
            md: 6,
          })}
          {projectCard({
            description:
              "An inifnite runner game that follows a student through the\
			  hectic hallways of the University of Waterloo.",
            title: "Waterloo Rush",
            image: waterlooRush,
            imageAlt: "Waterloo Rush",
            projectLink: "/projects/waterlooRush",
            md: 6,
          })}
        </GridContainer>
      </div>
    </div>
  );
}
