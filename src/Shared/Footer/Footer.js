import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-primary text-base-content rounded text-white">
        <div className="grid grid-flow-col gap-4">
          <a href="#about-me" className="link link-hover">About Me</a>
          <a href="#contact" className="link link-hover">Contact</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/shamim-s">
              <GoMarkGithub className="text-2xl cursor-pointer"/>
            </a>
            <a href="https://web.facebook.com/alpha.sk399">
              <FaFacebook className="text-2xl cursor-pointer"/>
            </a>
            <a href="https://www.linkedin.com/in/shamim-sarkar-29847113a/">
              <FaLinkedin className="text-2xl cursor-pointer"/>
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2022 - All right reserved by Shamim Sarkar</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
