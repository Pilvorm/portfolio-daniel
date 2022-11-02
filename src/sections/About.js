import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJavascript } from 'react-icons/di'
import { FaBootstrap, FaReact, FaSass, FaPhp, FaLaravel, FaGithub, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiJquery, SiRedux, SiMysql, SiAdobephotoshop, SiAdobelightroom, SiAdobepremierepro } from 'react-icons/si'

import responsive from '../assets/responsive.png'
import javascript from '../assets/javascript.png'
import fundamental from '../assets/fundamental.jpg'
import html from  '../assets/html.jpg'

import { useRef } from "react";
import { useInView } from "framer-motion";

const certificationData = [
    {
        img: responsive,
        alt: 'Responsive Web Design'
    },
    {
        img: javascript,
        alt: 'JavaScript Algorithms and Data Structures'
    },
    {
        img: fundamental,
        alt: 'Web Development Fundamentals'
    },
    {
        img: html,
        alt: 'HTML'
    }
];

const certificationList = certificationData.map((certification, index) => (
    <img src={certification.img} alt={certification.alt} key={index} className='w-[85%] sm:w-[75%] xl:w-[47.5%]' />
));

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }, { threshold: 0.2 });

    return (
        <div className='about
        mt-32 mx-4 sm:mx-24 xl:mx-36
        max-md:flex max-md:flex-col md:grid max-md:grid-rows-2 gap-24
        md:grid-cols-2 md:gap-12 md:justify-between
        lg:gap-28' ref={ref}>
            <div className='left flex flex-col gap-24 md:gap-14'>
                <div className='desc flex flex-col gap-14 md:gap-7'>
                    <h2 className='font-[Pangea-Regular] text-4xl text-center md:text-left'
                        style={{
                            transform: isInView ? "none" : "translateX(-100px)", opacity: isInView ? 1 : 0, transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}>
                        About
                    </h2>
                    <p className='font-[Baskerville-BT-Roman] text-xl text-center md:text-justify' style={{
                        transform: isInView ? "none" : "translateX(-100px)", opacity: isInView ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}>Hello! I am a computer science major focusing on web development. I have always found designing fun, but bringing designs to life for people to see and use really gives me a satisfying feeling. That feeling pushed me to learn more about web development and how I can improve my work. I also enjoy video games and movies!</p>
                </div>

                <div className='skills flex flex-col gap-14 md:gap-7' ref={ref}>
                    <h2 className='font-[Pangea-Regular] text-4xl text-center md:text-left'
                        style={{
                            transform: isInView ? "none" : "translateX(-100px)", opacity: isInView ? 1 : 0, transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}>
                        Skills
                    </h2>
                    <div className='skill-list flex flex-wrap gap-7 justify-center md:justify-start'
                        style={{
                            transform: isInView ? "none" : "translateX(-100px)", opacity: isInView ? 1 : 0, transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}>
                        <AiFillHtml5 size={52} title='HTML' /> <DiCss3 size={52} title='CSS' /> <DiJavascript size={52} title='JavaScript' /> <FaSass size={52} title='Sass/SCSS' /> <FaBootstrap size={52} title='Bootstrap' /> <SiTailwindcss size={52} title='Tailwind' /> <SiJquery size={52} title='jQuery' /> <FaReact size={52} title='React' /> <SiRedux size={52} title='Redux' />
                        <SiMysql size={52} title='MySQL' /> <FaPhp size={52} title='php' /> <FaLaravel size={52} title='Laravel' /> <FaGithub size={52} title='Github' /> <FaFigma size={52} title='Figma' /> <SiAdobephotoshop size={52} title='Adobe Photoshop' /> <SiAdobelightroom size={52} title='Adobe Lightroom' /> <SiAdobepremierepro size={52} title='Adobe Premiere Pro' />
                    </div>
                </div>
            </div>

            <div className='right flex flex-col gap-14 md:gap-7 h-auto' ref={ref}>
                <h2 className='font-[Pangea-Regular] text-4xl max-xl:text-center'
                    style={{
                        transform: isInView ? "none" : "translateX(100px)", opacity: isInView ? 1 : 0, transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}>
                    Certifications
                </h2>
                <div className='certifications flex max-h-[950px] lg:max-h-[750px] overflow-y-auto max-xl:flex-col gap-y-7 items-center xl:justify-between xl:flex-wrap' style={{
                    transform: isInView ? "none" : "translateX(100px)", opacity: isInView ? 1 : 0, transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                    {certificationList}
                </div>
            </div>
        </div>
    )
}

export default About