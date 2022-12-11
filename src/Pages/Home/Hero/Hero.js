import React from "react";
import image from '../../../images/profile.jpg';
import Typewriter from 'typewriter-effect';

const name = document.getElementById('name');
const typeWriter = new Typewriter(name, {
  loop: true,
  delay: 75,
})


const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <img
            src={image}
            className="max-w-sm lg:w-1/2 md:w-72 w-72 rounded-full shadow-2xl"
            alt=""
          />
          <div className="lg:w-1/2 mx-auto lg:mt-0 md:mt-0 mt-6">
            <h1 className="lg:text-5xl text-4xl font-bold lg:text-left text-center">HI, I'M <br/>
            <span id="name" className="text-primary">
              SHAMIM SARKAR
              </span>
            </h1>
            <p className="py-6 lg:text-left text-center">
                Full-Stack Web Developer | MERN Stack Developer | REACT Developer
            </p>
            <p className="lg:text-left text-center">
            <a href="Shamim-sarkar-resume.pdf"
            download='Shamim-sarkar-resume.pdf'
             className="btn btn-primary">
                DOWNLOAD RESUME
            </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
