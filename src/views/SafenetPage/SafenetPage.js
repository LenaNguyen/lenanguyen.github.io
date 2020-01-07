import React from "react";
import ProjectTemplate from "views/Templates/ProjectTemplate.js";
import image1 from "assets/img/projects/safenet/safenet2.jpg";
import image2 from "assets/img/projects/safenet/safenet3.jpg";

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
      <img src={image1} alt="First slide" className="slick-image" />
    </div>,
    <div key={1}>
      <img src={image2} alt="yearly view" className="slick-image" />
    </div>
  ];
  return (
    <ProjectTemplate
      title="Safe.net"
      backgroundImage={require("assets/img/bg8-min.jpg")}
      sourceCodeLink="https://github.com/LenaNguyen/Myndset"
      description={description}
      techStack={techStack}
      mediaList={mediaList}
    />
  );
}
