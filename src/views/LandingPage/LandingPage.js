import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import AboutSection from "./Sections/AboutSection";
import ProjectSection from "./Sections/ProjectSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Lena Nguyen"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 450,
          color: "dark"
        }}
        {...rest}
      />
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
                Thanks for checking out my website! I am a software developer,
                currently studying Systems Design Engineering at the University
                of Waterloo. Here, you can learn more about my skills and past
                projects. Feel free to look around.
              </h4>
              <br />
              <Button
                color="rose"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
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
