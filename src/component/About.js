import React from "react";
import Common from "./Common";

const About = () => {
  let para = `Your Full Satisfaction is Gurranted. We will work with You untill you have fully staisfied with Your Project
  You will Get full support anytime after completing Your Project.`;
  return (
    <div>
      <Common
        Name="Quality About Our Work"
        para={para}
        btnData="Contact Us"
        link="/contact"
      ></Common>
    </div>
  );
};

export default About;
