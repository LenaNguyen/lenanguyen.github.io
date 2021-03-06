import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import MyndsetPage from "views/MyndsetPage/MyndsetPage";
import SafenetPage from "views/SafenetPage/SafenetPage";
import SmartbrainPage from "views/SmartbrainPage/SmartbrainPage";
import DancefestPage from "views/DancefestPage/DancefestPage";
import TravelwisePage from "views/TravelwisePage/TravelwisePage";
import RecycleRightPage from "views/RecycleRight/RecycleRightPage";
import WaterlooRushPage from "views/WaterlooRushPage/WaterlooRushPage";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import CarAIPage from "./views/CarAIPage/CarAIPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter basename={"/"} history={hist}>
    <ScrollToTop />
    <Switch>
      <Header
        color="transparent"
        brand="Lena Nguyen"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "dark",
        }}
      />
    </Switch>
    <Switch>
      <Route path="/projects/myndset" component={MyndsetPage} />
      <Route path="/projects/safenet" component={SafenetPage} />
      <Route path="/projects/smartbrain" component={SmartbrainPage} />
      <Route path="/projects/dancefest" component={DancefestPage} />
      <Route path="/projects/travelwise" component={TravelwisePage} />
      <Route path="/projects/recycleRight" component={RecycleRightPage} />
      <Route path="/projects/waterlooRush" component={WaterlooRushPage} />
      <Route path="/projects/carAI" component={CarAIPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
