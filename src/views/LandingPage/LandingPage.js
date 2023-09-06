import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { HashLink as Link } from "react-router-hash-link";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import AboutSection from "./Sections/AboutSection";
import ProjectSection from "./Sections/ProjectSection";

const useStyles = makeStyles(styles);

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <Parallax
        filter
        image={require("assets/img/bg5.jpg")}
        className={classes.fullView}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} className={classes.px}>
              <h1 className={classNames(classes.title, "glow")}>
                Hey there! I&apos;m Lena.
              </h1>
              <h4>
                Thanks for checking out my website! I am a software engineer and
                a recent engineering graduate from the University of Waterloo. I
                have an interest in technology and entrepreneurship. Here, you
                can learn more about my skills and past projects. Feel free to
                look around.
              </h4>
              <br />
              <Button color="rose" size="lg" to="/#about" component={Link}>
                Get To Know Me
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <AboutSection />
          <ProjectSection />
        </div>
      </div>
    </div>
  );
}
