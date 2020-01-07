import React from "react";
import classNames from "classnames";
import Carousel from "react-slick";

import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GitHub from "@material-ui/icons/GitHub";

// core components
import Header from "components/Header/Header.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import IconButton from "components/IconButton/IconButton.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/templates/projectTemplate.js";

const useStyles = makeStyles(styles);

export default function ProjectTemplate(props) {
  const classes = useStyles();
  const {
    title,
    backgroundImage,
    sourceCodeLink,
    description,
    techStack,
    mediaList,
    children,
    ...rest
  } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false
  };

  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={backgroundImage} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <div
              className={classes.centerItems}
              style={{ flexDirection: "column" }}
            >
              <div className={classes.profile}>
                <h2 className={classes.title}>{title}</h2>
              </div>
              <IconButton
                justIcon
                id="source-code"
                title="Source Code"
                color="github"
                href={sourceCodeLink}
                target="_blank"
                xs={3}
                sm={1}
              >
                <GitHub />
              </IconButton>
            </div>
            <div
              className={classNames(classes.description, classes.centerText)}
            >
              <p>{description}</p>
              <br />
              <h3>Tech Stack</h3>
              <p>{techStack}</p>
            </div>
          </div>
        </div>
        <GridContainer className={classes.container}>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>{mediaList}</Carousel>
            </Card>
          </GridItem>
        </GridContainer>
        <div className={classes.description}>{children}</div>
      </div>
    </div>
  );
}
