import React from "react";
import { FaGithub } from "react-icons/fa";
import { VscLinkExternal } from "react-icons/vsc";

import { useRef } from "react";
import { useInView } from "framer-motion";

import { projectData } from "../data";

const projectList = projectData.map((project, index) => (
  <div
    className="project-card w-[85%] sm:w-[47.5%] lg:w-[30%] flex flex-col gap-5 px-5 py-8"
    key={index}
  >
    <a href={project.visit} target="_blank" rel="noreferrer">
      <img
        src={require("../assets/" + project.thumbnail + ".png")}
        alt={project.title}
      />
      <VscLinkExternal size={32} className="external-link text-white" />
    </a>
    <h3 className="font-[Pangea-Regular] text-lg">{project.title}</h3>
    <p className="font-[Baskerville-BT-Roman]">{project.description}</p>
    <div className="tool-list flex flex-wrap gap-x-[2px] gap-y-[2px] items-center justify-self-end">
      {project.tools.map((tool, index) => (
        <p
          key={index}
          className="tool text-sm font-[Pangea-Light] px-5 h-8 text-white bg-[#1C6758] flex justify-center items-center"
        >
          {tool}
        </p>
      ))}
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="px-5 h-8 text-white bg-[#1C6758] flex justify-center items-center hover:bg-[#3D8361] transition-all"
      >
        <FaGithub size={24} />
      </a>
    </div>
  </div>
));

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }, { threshold: 0.2 });

  const animate = {
    down: {
      transform: isInView ? "none" : "translateY(-100px)",
      opacity: isInView ? 1 : 0,
      transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    },
    up: {
      transform: isInView ? "none" : "translateY(100px)",
      opacity: isInView ? 1 : 0,
      transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    },
  };

  return (
    <div
      className="projects flex flex-col gap-28 mt-56 mx-4 sm:mx-24 xl:mx-36"
      ref={ref}
    >
      <h2
        className="font-[Pangea-Regular] text-4xl text-center"
        style={animate.down}
      >
        Projects
      </h2>
      <div
        className="project-list max-md:max-h-[1250px] overflow-y-auto flex flex-wrap gap-y-14 justify-center max-sm:items-center sm:justify-between"
        style={animate.up}
      >
        {projectList}
      </div>
    </div>
  );
};
export default Projects;
