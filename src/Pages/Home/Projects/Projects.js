import React, { useEffect, useState } from "react";
import project1 from "../../.././images/project-1.png";
import project2 from "../../.././images/project-2.png";
import project3 from "../../.././images/project-3.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://my-portfolio-server-teal.vercel.app/projects')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProjects(data);
    })
  },[])
  return (
    <div id="projects" className="mt-10 mb-10">
      <h1 className="text-2xl text-center font-bold text-primary">Projects</h1>
    <div className="p-4">
      {
        projects.map((project, index) =>  <ProjectCard key={project._id} project={project}/>) 
      }
    </div>
    </div>
  );
};

export default Projects;
