/*eslint-disable*/
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, Person } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Projects"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/projects/dancefest" className={classes.dropdownLink}>
              Dancefest
            </Link>,
            <Link to="/projects/myndset" className={classes.dropdownLink}>
              Myndset
            </Link>,
            <Link to="/projects/recycleRight" className={classes.dropdownLink}>
              Recycle Right
            </Link>,
            <Link to="/projects/safenet" className={classes.dropdownLink}>
              Safe.net
            </Link>,
            <Link to="/projects/smartbrain" className={classes.dropdownLink}>
              Smartbrain
            </Link>,
            <Link to="/projects/travelwise" className={classes.dropdownLink}>
              Travelwise
            </Link>,
            <Link to="/projects/waterlooRush" className={classes.dropdownLink}>
              Waterloo Rush
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/#about" className={classes.navLink} color="transparent">
          <Person className={classes.icons} /> About
        </Button>
      </ListItem>
    </List>
  );
}
