import React from "react";
import ProjectTemplate from "views/Templates/ProjectTemplate.js";
import image1 from "assets/img/projects/safenet/safenet2.jpg";
import video1 from "assets/video/projects/safenet/safenet1.mp4";
import newsImage1 from "assets/img/projects/safenet/safenet-article-1-min.jpg";
import newsImage2 from "assets/img/projects/safenet/safenet-article-2-min.jpg";
import Emoji from "components/Emoji/Emoji";
import { Link } from "@material-ui/core";

export default function SafenetPage() {
  const description = `Safe.net aims to increase the security of children on the internet. 
  It consists of a chrome extension which detects input fields asking for sensistive information, 
  such as your address or credit card number, and then disables the input field so that 
  the information cannot be submitted. The user then has the option to "Request Access", 
  which sends the current url to a parent portal where parents can log in and check the 
  site their child is trying to access. They also have the option of creating a block list, 
  which will block access to the listed websites.`;

  const techStack = "React, Node.js, Google APIs, Firestore, JavaScript";

  const mediaList = [
    <div key={0}>
      <video
        autoPlay
        muted
        loop
        src={video1}
        alt="Safe.net Demo"
        className="slick-image"
      />
    </div>,
    <div key={4}>
      <img src={image1} alt="yearly view" className="slick-image" />
    </div>,
  ];
  return (
    <ProjectTemplate
      title="Safe.net"
      backgroundImage={require("assets/img/bg10-min.jpg")}
      sourceCodeLink="https://github.com/LenaNguyen/Myndset"
      description={description}
      techStack={techStack}
      mediaList={mediaList}
    >
      <h2>
        <Emoji symbol="📰" label="news" /> Awards and News
      </h2>
      <p>
        This project won <strong>first place overall</strong> at Citizen Hacks!
        Check out some of the articles written about the project below.
      </p>
      <br />
      <h4>
        <Link
          style={{ color: "#FFFFFF" }}
          href="https://uwaterloo.ca/systems-design-engineering/news/syde-student-shared-top-prize-recent-hackathon"
        >
          SYDE student shared the top prize at a recent hackathon
        </Link>
      </h4>
      <img src={newsImage1} alt="Article Preview" />
      <br />
      <br />
      <h4>
        <Link
          style={{ color: "#FFFFFF" }}
          href="https://cs.uwaterloo.ca/news/anne-chung-lena-nguyen-win-first-place-citizen-hacks"
        >
          Second-year CS student Anne Chung and her teammate Lena Nguyen win
          privacy-themed Citizen Hacks competition
        </Link>
      </h4>
      <img src={newsImage2} alt="Article Preview" />
    </ProjectTemplate>
  );
}
