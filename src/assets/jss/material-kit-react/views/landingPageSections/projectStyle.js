import {
  cardTitle,
  title,
  centerItems,
  roseColorRgb,
  whiteColor
} from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const { imgCardOverlay, imgFluid, ...imageStylesRest } = imagesStyle;
let overlayTitle = {
  ...cardTitle,
  color: whiteColor,
  transition: "all 0.5s linear 0s"
};

export default {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  ...imageStylesRest,
  imgFluid: {
    ...imgFluid,
    height: "100%"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  },
  overlayTitle,
  imgCardOverlay: {
    ...imgCardOverlay,
    top: "12px",
    right: "12px",
    bottom: "12px",
    left: "12px",
    background: `rgba(${roseColorRgb}, 0.8)`,
    opacity: 0,
    transition: "all 0.5s linear 0s",
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "&:hover": {
      opacity: 1
    }
  },
  centerItems
};
