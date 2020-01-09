import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import MyndsetPage from "views/MyndsetPage/MyndsetPage";
import SafenetPage from "views/SafenetPage/SafenetPage";
import SmartbrainPage from "views/SmartbrainPage/SmartbrainPage";
import DancefestPage from "views/DancefestPage/DancefestPage";
import TravelwisePage from "views/TravelwisePage/TravelwisePage";
import RecycleRightPage from "views/RecycleRight/RecycleRightPage";
import WaterlooRushPage from "views/WaterlooRushPage/WaterlooRushPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Header
        color="transparent"
        brand="Lena Nguyen"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "dark"
        }}
      />
    </Switch>
    <Switch>
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/projects/myndset" component={MyndsetPage} />
      <Route path="/projects/safenet" component={SafenetPage} />
      <Route path="/projects/smartbrain" component={SmartbrainPage} />
      <Route path="/projects/dancefest" component={DancefestPage} />
      <Route path="/projects/travelwise" component={TravelwisePage} />
      <Route path="/projects/recycleRight" component={RecycleRightPage} />
      <Route path="/projects/waterlooRush" component={WaterlooRushPage} />
      <Route path="/components" component={Components} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
