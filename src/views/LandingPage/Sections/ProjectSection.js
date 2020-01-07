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
import dancefest from "assets/img/projects/dancefest/dancefest3.jpg";

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
              <br />
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
              <br />
              <p className={classes.overlayTitle}>
                A chrome extension that protects children on the browsing the
                internet.
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
            <img src={dancefest} alt="Safe.net" className={imageClasses} />
            <div className={classes.imgCardOverlay}>
              <h3 className={classes.overlayTitle}>Safe.net</h3>
              <br />
              <p className={classes.overlayTitle}>
                A chrome extension that protects children on the browsing the
                internet.
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
        </GridContainer>
      </div>
    </div>
  );
}
