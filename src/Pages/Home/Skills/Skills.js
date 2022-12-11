import React from "react";

const Skills = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-3 gap-6 mb-10">
      <div className="flex flex-col justify-center items-center">
        <h2>React</h2>
        <div className="radial-progress text-primary" style={{ "--value": 95 }}>
          95%
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2>JavaScript</h2>
        <div className="radial-progress text-primary" style={{ "--value": 70 }}>
          70%
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2>Express.js</h2>
        <div className="radial-progress text-primary" style={{ "--value": 60 }}>
          60%
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2>Node.js</h2>
        <div className="radial-progress text-primary" style={{ "--value": 50 }}>
          50%
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2>HTML</h2>
        <div className="radial-progress text-primary" style={{ "--value": 95 }}>
          95%
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2>CSS</h2>
        <div className="radial-progress text-primary" style={{ "--value": 70 }}>
          70%
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2>MongoDB</h2>
        <div className="radial-progress text-primary" style={{ "--value": 55 }}>
          55%
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2>Tailwind</h2>
        <div className="radial-progress text-primary" style={{ "--value": 90 }}>
          90%
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2>BootStrap</h2>
        <div className="radial-progress text-primary" style={{ "--value": 90 }}>
          90%
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2>Firebase</h2>
        <div className="radial-progress text-primary" style={{ "--value": 100 }}>
          100%
        </div>
      </div>
    </div>
  );
};

export default Skills;
