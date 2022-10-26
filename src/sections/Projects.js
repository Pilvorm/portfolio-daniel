import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { VscLinkExternal } from 'react-icons/vsc'

import { useRef } from "react";
import { useInView } from "framer-motion";


const projectData = [
    {
        id: 1,
        thumbnail: 'caffeinline',
        title: "Caffein Line",
        description: "A landing page of an online cafe serving beverages and desserts.",
        tools: ['HTML', 'SCSS', 'Tailwind', 'jQuery', 'Swiper'],
        visit: 'https://caffeinline.netlify.app/',
        github: 'https://github.com/Pilvorm/Caffein-Line'
    },
    {
        id: 2,
        thumbnail: 'TributePageNew',
        title: "Cordae Tribute Page (Reimagined)",
        description: "A tribute page about one of my favorite hip-hop artist, Cordae.",
        tools: ['HTML', 'SCSS', 'jQuery'],
        visit: 'https://cordae-tribute-page-reimagined.vercel.app/',
        github: 'https://github.com/Pilvorm/Cordae-Tribute-Page-Reimagined'
    },
    {
        id: 3,
        thumbnail: 'Markdown',
        title: "Markdown Previewer",
        description: "A tool to preview markdowns.",
        tools: ['React', 'SCSS'],
        visit: 'https://markdown-previewer-tool.vercel.app/',
        github: 'https://github.com/Pilvorm/markdown-previewer'
    },
    {
        id: 4,
        thumbnail: 'Quote',
        title: "Random Movie Quote Generator",
        description: "Get a random quote from iconic movies!",
        tools: ['HTML', 'SCSS', 'jQuery'],
        visit: 'https://random-movie-quotes.vercel.app/',
        github: 'https://github.com/Pilvorm/Random-Movie-Quote'
    },
    {
        id: 5,
        thumbnail: 'hishot',
        title: "HISHOT 2022",
        description: "Event landing page held by HIMTI Binus University. Appointed as web development staff.",
        tools: ['HTML', 'CSS', 'Bootstrap', 'JS'],
        visit: 'https://hishot.himtibinus.or.id/',
        github: 'https://github.com/himtibinus'
    },
    {
        id: 6,
        thumbnail: 'techfest',
        title: "TECHFEST 2022",
        description: "Landing page of new event held by HIMTI Binus University. Appointed as coordinator of web development division.",
        tools: ['HTML', 'CSS', 'Tailwind', 'React'],
        visit: 'https://techfest.himtibinus.or.id',
        github: 'https://github.com/himtibinus'
    },
    {
        id: 7,
        thumbnail: 'Documentation',
        title: "C Language Documentation",
        description: "A documentation of C programming language.",
        tools: ['HTML', 'CSS', 'JS', 'Highlight.js'],
        visit: 'https://c-language-documentation.vercel.app/',
        github: 'https://github.com/Pilvorm/Technical-Documentation'
    },
    {
        id: 8,
        thumbnail: 'SurveyForm',
        title: "Streaming Site Survey Form",
        description: "A survey form of a streaming website.",
        tools: ['HTML', 'CSS'],
        visit: 'https://survey-form-ecru.vercel.app/',
        github: 'https://github.com/Pilvorm/Survey-Form'
    },
    {
        id: 9,
        thumbnail: 'lego',
        title: "Product Landing Page",
        description: "A landing page of the video game LEGO Star Wars: The Skywalker Saga.",
        tools: ['HTML', 'CSS'],
        visit: 'https://legoproductlanding.netlify.app/',
        github: 'https://github.com/Pilvorm/Product-Landing'
    },
    {
        id: 10,
        thumbnail: 'TributePageOld',
        title: "Cordae Tribute Page (Legacy)",
        description: "Older version of a tribute page about Cordae.",
        tools: ['HTML', 'SCSS'],
        visit: 'https://cordae-tribute-page.vercel.app/',
        github: 'https://github.com/Pilvorm/Cordae-Tribute-Page'
    },
];

const projectList = projectData.map((project) => (
    <div className='project-card w-[100%] sm:w-[47.5%] lg:w-[30%] flex flex-col gap-5 px-5 py-8' key={project.id}>
        <a href={project.visit} target='_blank'>
            <img
                src={require('../assets/' +
                    project.thumbnail +
                    '.png')}
                alt={project.title}
            />
            <VscLinkExternal size={32} className='external-link text-white' />
        </a>
        <h3 className='font-[Pangea-Regular] text-lg'>{project.title}</h3>
        <p className='font-[Baskerville-BT-Roman]'>{project.description}</p>
        <div className='tool-list flex flex-wrap gap-x-[2px] gap-y-[2px] items-center justify-self-end'>
            {project.tools.map((tool, index) => (
                <p key={index}className='tool text-sm font-[Pangea-Light] px-5 h-8 text-white bg-[#1C6758] flex justify-center items-center'>{tool}</p>
            ))}
            <a href={project.github} target='_blank' className='px-5 h-8 text-white bg-[#1C6758] flex justify-center items-center hover:bg-[#3D8361] transition-all'><FaGithub size={24} /></a>
        </div>
    </div>
))

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }, { threshold: 0.2 });

    return (
        <div className='projects flex flex-col gap-28 mt-56 mx-4 sm:mx-24 xl:mx-36' ref={ref}>
            <h2 className='font-[Pangea-Regular] text-4xl text-center'
                style={{
                    transform: isInView ? "none" : "translateY(-100px)", opacity: isInView ? 1 : 0, transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                Projects
            </h2>
            <div className='project-list max-md:max-h-[1250px] overflow-y-auto flex flex-wrap gap-y-14 justify-center sm:justify-between'
            style={{transform: isInView ? "none" : "translateY(100px)", opacity: isInView ? 1 : 0, transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
        }}>

                {projectList}

            </div>
        </div>
    )

}
export default Projects