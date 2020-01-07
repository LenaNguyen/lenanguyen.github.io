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

import myndset from "assets/img/projects/myndset/myndset1.jpg";
import safenet from "assets/img/projects/safenet/safenet1.1.jpg";
import dancefest from "assets/img/projects/dancefest/dancefest1.jpg";
import smartbrain from "assets/img/projects/smartbrain/smartbrain1-min.jpg";
import recycleRight from "assets/img/projects/recycleRight/recycleRight1-min.jpg";
import waterlooRush from "assets/img/projects/waterlooRush/waterlooRush1-min.png";
import travelwise from "assets/img/projects/travelwise/travelwise1-min.jpg";

const useStyles = makeStyles(styles);

export default function ProjectSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgFluid);
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Projects</h2>
      <div>
        <GridContainer spacing={3}>
          <GridItem xs={12} sm={12} md={8}>
            <img src={myndset} alt="Myndset" className={imageClasses} />
            <div className={classes.imgCardOverlay}>
              <h3 className={classes.overlayTitle}>Myndset</h3>
              <p className={classes.overlayTitle}>
                A digital mood journal that predicts your emotions.
              </p>
              <Button color="info" size="sm" href="/projects/myndset">
                Learn More
              </Button>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img src={safenet} alt="Safe.net" className={imageClasses} />
            <div className={classes.imgCardOverlay}>
              <h3 className={classes.overlayTitle}>Safe.net</h3>
              <p className={classes.overlayTitle}>
                A chrome extension that protects children on the browsing the
                internet.
              </p>
              <Button color="info" size="sm" href="/projects/safenet">
                Learn More
              </Button>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <img src={dancefest} alt="Dancefest" className={imageClasses} />
            <div className={classes.imgCardOverlay}>
              <h3 className={classes.overlayTitle}>Dancefest</h3>
              <p className={classes.overlayTitle}>
                An admin portal which manages the adjudications for the Ontario
                Dancefest
              </p>
              <Button
                color="info"
                size="sm"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </Button>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <img src={travelwise} alt="Travelwise" className={imageClasses} />
            <div className={classes.imgCardOverlay}>
              <h3 className={classes.overlayTitle}>Travelwise</h3>
              <p className={classes.overlayTitle}>
                A web app that keeps track of points, news, and documents
                between companies participating in the sustainable
                transportation initiative.
              </p>
              <Button color="info" size="sm" href="/projects/travelwise">
                Learn More
              </Button>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img src={smartbrain} alt="Smartbrain" className={imageClasses} />
            <div className={classes.imgCardOverlay}>
              <h3 className={classes.overlayTitle}>Smartbrain</h3>
              <p className={classes.overlayTitle}>
                A full stack application which detects human faces in photos.
              </p>
              <Button color="info" size="sm" href="/projects/smartbrain">
                Learn More
              </Button>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img
              src={recycleRight}
              alt="Recycle Right"
              className={imageClasses}
            />
            <div className={classes.imgCardOverlay}>
              <h3 className={classes.overlayTitle}>Recycle Right</h3>
              <p className={classes.overlayTitle}>
                A mobile app that identifies if an item is recycling, compost,
                or landfill.
              </p>
              <Button color="info" size="sm" href="/projects/recycleRight">
                Learn More
              </Button>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img
              src={waterlooRush}
              alt="Waterloo Rush"
              className={imageClasses}
            />
            <div className={classes.imgCardOverlay}>
              <h3 className={classes.overlayTitle}>Waterloo Rush</h3>
              <p className={classes.overlayTitle}>
                An inifnite runner game that follows a student through the
                hectic hallways of the University of Waterloo.
              </p>
              <Button color="info" size="sm" href="/projects/waterlooRush">
                Learn More
              </Button>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
