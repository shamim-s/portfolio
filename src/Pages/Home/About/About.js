import React from "react";
import image from "../../.././images/profile.jpg";
import Skills from "../Skills/Skills";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div 
      data-aos="fade-right"
      id="about-me"
      className="mt-10 p-4"
    >
      <h1 className="text-2xl font-bold text-center text-primary">About Me</h1>
      <div className="lg:flex justify-center items-center">
        <div className="lg:w-1/4 w-72 mx-auto">
          <img src={image} alt="" className="mask mask-circle mx-auto" />
        </div>
        <div className="lg:w-1/2 w-full">
          <p>
            Hi, I am Shamim Sarkar. I'm a Full-Stack Web Developer. I have done
            many full-stack projects with React.js, Node.js, Express.js,
            Tailwind, firebase, JsonWebToken, etc. I'm very interested in Web
            Development and coding. I love learning new web development
            features, frameworks, and technologies.
          </p>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-5 mt-10 text-center text-primary">
        Skills
      </h1>
      <Skills />
    </div>
  );
};

export default About;
