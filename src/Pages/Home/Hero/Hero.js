import React, { useCallback } from "react";
import image from "../../../images/BG.png";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <motion.div
      animate={{ y: 20 }}
      transition={{
        delay: 0.5,
        x: { duration: 2 },
        default: { ease: "linear" }
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          width: "100",
          fpsLimit: 100,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#000dff",
            },
            links: {
              color: "#000dff",
              distance: 180,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div id="tsparticles" className="hero min-h-screen">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <img src={image} className="max-w-sm lg:w-2/3 md:w-72 w-72" alt="" />
          <div className="lg:w-1/2 mx-auto lg:mt-0 md:mt-0 mt-6">
            <h1 className="lg:text-5xl text-4xl font-bold lg:text-left text-center">
              HI, I'M <br />
              <span id="name" className="text-primary">
                SHAMIM SARKAR
              </span>
            </h1>
            <p className="py-6 lg:text-left text-center">
              Full-Stack Web Developer | MERN Stack Developer | REACT Developer
            </p>
            <p className="lg:text-left text-center">
              <a
                href="Shamim-sarkar-resume.pdf"
                download="Shamim-sarkar-resume.pdf"
                className="btn btn-primary"
              >
                DOWNLOAD RESUME
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
