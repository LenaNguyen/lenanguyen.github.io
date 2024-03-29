import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import {
  ImportantDevices,
  Storage,
  Code,
  Settings,
  Email,
  AssignmentInd as Resume,
  Build,
} from "@material-ui/icons";

import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import IconButton from "components/IconButton/IconButton.js";
import ResumePdf from "assets/Lena-Nguyen-Resume.pdf";

import styles from "assets/jss/material-kit-react/views/landingPageSections/aboutStyle.js";

const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="about">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>About Me</h2>
          <h5 className={classes.description}>
            Stemming from my curiosity of technology, I enjoy exploring how it
            is used by people to connect, optimize, and amaze the world. Working
            as a software developer has allowed me to be a part of leveraging
            today’s technology to build cool projects.
          </h5>
        </GridItem>
      </GridContainer>

      <GridContainer container justify="center" className={classes.my2}>
        <GridItem xs={6} sm={2} md={1}>
          <IconButton
            id="resume"
            title="Resume"
            color="rose"
            href={ResumePdf}
            target="_blank"
          >
            <Resume fontSize="large" />
          </IconButton>
        </GridItem>
        <GridItem xs={6} sm={2} md={1}>
          <IconButton
            id="email"
            title="Email"
            color="info"
            size="lg"
            href="mailto:lena.ln.nguyen@gmail.com"
          >
            <Email fontSize="large" />
          </IconButton>
        </GridItem>
        <GridItem xs={6} sm={2} md={1}>
          <IconButton
            id="github"
            title="GitHub"
            color="github"
            size="lg"
            href="https://github.com/LenaNguyen"
            target="_blank"
          >
            <GitHub fontSize="large" />
          </IconButton>
        </GridItem>
        <GridItem xs={6} sm={2} md={1}>
          <IconButton
            id="linkedIn"
            title="LinkedIn"
            color="linkedIn"
            size="lg"
            href="https://linkedin.com/in/nguyenlena1/"
            target="_blank"
          >
            <LinkedIn fontSize="large" />
          </IconButton>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer container justify="center">
          <GridItem xs={12} sm={6} md={2}>
            <InfoArea title="Languages" icon={Code} iconColor="info" vertical>
              <ul className={classes.simpleList}>
                <li>Ruby</li>
                <li>Kotlin</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>PHP</li>
                <li>C++</li>
                <li>GraphQL</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </InfoArea>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
            <InfoArea
              title="Back End"
              icon={Settings}
              iconColor="info"
              vertical
            >
              <ul className={classes.simpleList}>
                <li>Rails</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Flask</li>
                <li>.NET</li>
              </ul>
            </InfoArea>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
            <InfoArea
              title="Data Storage"
              icon={Storage}
              iconColor="info"
              vertical
            >
              <ul className={classes.simpleList}>
                <li>MySql</li>
                <li>PostgreSQL</li>
                <li>Firebase</li>
                <li>Amazon S3</li>
                <li>Redis</li>
              </ul>
            </InfoArea>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
            <InfoArea
              title="DevOps &amp; Tools"
              icon={Build}
              iconColor="info"
              vertical
            >
              <ul className={classes.simpleList}>
                <li>AWS</li>
                <l1>Elasticsearch</l1>
                <li>Docker</li>
                <li>StatsD</li>
                <li>Prometheus</li>
                <li>Git</li>
              </ul>
            </InfoArea>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
            <InfoArea
              title="Front End"
              icon={ImportantDevices}
              iconColor="info"
              vertical
            >
              <ul className={classes.simpleList}>
                <li>React</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </InfoArea>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
