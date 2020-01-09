import React from "react";
import ProjectTemplate from "views/Templates/ProjectTemplate.js";
import image1 from "assets/img/projects/myndset/myndset2-min.jpg";
import image2 from "assets/img/projects/myndset/myndset3-min.jpg";

export default function MyndsetPage() {
  const description = ` Myndset is a digital mood journal that integrates with your
	Google Home or Amazon Alexa. When a users says the command for
	opening Myndset on their IoT device, the device will initiate a
	conversation with the user about their day. From that
	conversation, the program will predict the user's mood and
	log it to their account in an online web application which keeps
	track of these entries.`;

  const techStack =
    "React, Node.js, Firestore, Vioceflow, DialogFlow, Microsoft Azure";

  const mediaList = [
    <div key={0}>
      <img src={image1} alt="monthly view" className="slick-image" />
    </div>,
    <div key={1}>
      <img src={image2} alt="yearly view" className="slick-image" />
    </div>
  ];
  return (
    <ProjectTemplate
      title="Myndset"
      backgroundImage={require("assets/img/bg13-min.jpg")}
      sourceCodeLink="https://github.com/LenaNguyen/Myndset"
      description={description}
      techStack={techStack}
      mediaList={mediaList}
    />
  );
}
