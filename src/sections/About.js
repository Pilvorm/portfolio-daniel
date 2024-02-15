import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript } from "react-icons/di";
import {
  FaBootstrap,
  FaReact,
  FaSass,
  FaPhp,
  FaLaravel,
  FaGithub,
  FaGitlab,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiCypress,
  SiTailwindcss,
  SiPostman,
  SiJquery,
  SiRedux,
  SiMysql,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiAdobepremierepro,
} from "react-icons/si";

import { certificationData } from "../data";

import { useRef } from "react";
import { useInView } from "framer-motion";

const certificationList = certificationData.map((certification, index) => (
  <img
    key={index}
    src={certification.img}
    alt={certification.alt}
    className="w-[85%] sm:w-[75%] xl:w-[47.5%]"
  />
));

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }, { threshold: 0.2 });

  const animate = {
    right: {
      transform: isInView ? "none" : "translateX(-100px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    },
    left: {
      transform: isInView ? "none" : "translateX(100px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    },
  };

  return (
    <div
      className="about
        mt-32 mx-4 sm:mx-24 xl:mx-36
        max-md:flex max-md:flex-col md:grid max-md:grid-rows-2 gap-24
        md:grid-cols-2 md:gap-12 md:justify-between
        lg:gap-28"
      ref={ref}
    >
      <div className="left flex flex-col gap-24 md:gap-14">
        <div className="desc flex flex-col gap-14 md:gap-7">
          <h2
            className="font-[Pangea-Regular] text-4xl text-center md:text-left"
            style={animate.right}
          >
            About
          </h2>
          <p
            className="font-[Baskerville-BT-Roman] text-xl text-center md:text-justify"
            style={animate.right}
          >
            Hello! I am a computer science major focusing on web development. I
            have always found designing fun, but bringing designs to life for
            people to see and use really gives me a satisfying feeling. That
            feeling pushed me to learn more about web development and how I can
            improve my work. I also enjoy video games, music and movies!
          </p>
        </div>

        <div className="skills flex flex-col gap-14 md:gap-7" ref={ref}>
          <h2
            className="font-[Pangea-Regular] text-4xl text-center md:text-left"
            style={animate.right}
          >
            Skills
          </h2>
          <div
            className="skill-list flex flex-wrap gap-7 justify-center md:justify-start"
            style={animate.right}
          >
            <AiFillHtml5 size={50} title="HTML" />{" "}
            <DiCss3 size={50} title="CSS" />{" "}
            <DiJavascript size={50} title="JavaScript" />{" "}
            <FaSass size={50} title="Sass/SCSS" />{" "}
            <FaBootstrap size={50} title="Bootstrap" />{" "}
            <SiTailwindcss size={50} title="Tailwind" />{" "}
            <FaReact size={50} title="React.js" />{" "}
            <SiNextdotjs size={50} title="Next.js" />
            <SiJquery size={50} title="jQuery" />{" "}
            <SiRedux size={50} title="Redux" />
            <SiCypress size={50} title="Cypress" />
            <FaPhp size={50} title="php" />{" "}
            <FaLaravel size={50} title="Laravel" />{" "}
            <SiMysql size={50} title="MySQL" />
            <SiPostman size={50} title="Postman" />
            <FaGithub size={50} title="GitHub" />{" "}
            <FaGitlab size={50} title="GitLab" />{" "}
            <FaFigma size={50} title="Figma" />{" "}
            <SiAdobephotoshop size={50} title="Adobe Photoshop" />{" "}
            <SiAdobelightroom size={50} title="Adobe Lightroom" />{" "}
            <SiAdobepremierepro size={50} title="Adobe Premiere Pro" />
          </div>
        </div>
      </div>

      <div className="right flex flex-col gap-14 md:gap-7 h-auto" ref={ref}>
        <h2
          className="font-[Pangea-Regular] text-4xl max-xl:text-center"
          style={animate.left}
        >
          Certifications
        </h2>
        <div
          className="certifications flex max-h-[950px] lg:max-h-[750px] overflow-y-auto max-xl:flex-col gap-y-7 items-center xl:justify-between xl:flex-wrap"
          style={animate.left}
        >
          {certificationList}
        </div>
      </div>
    </div>
  );
};

export default About;
