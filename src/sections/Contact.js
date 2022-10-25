import React from 'react'
import { AiOutlineMail, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'

import { useRef } from "react";
import { useInView } from "framer-motion";

function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }, { threshold: 0.2 });

    return (
        <div className='contact flex flex-col gap-28 my-56 mx-4 sm:mx-24 xl:mx-36 items-center' ref={ref}>
            <h2 className='font-[Pangea-Regular] text-4xl text-center'
            style={{
                transform: isInView ? "none" : "translateY(-100px)", opacity: isInView ? 1 : 0, transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                Contact
            </h2>
            <div className='socials-list w-[80%] sm:w-[100%] flex max-sm:flex-col sm:flex-wrap justify-start sm:justify-center gap-14 text-xl'>

                <a href='mailto:daniel.sumarly@binus.ac.id' className='social flex gap-5 items-center'style={{
                    transform: isInView ? "none" : "translateX(-100px)", opacity: isInView ? 1 : 0, transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                }}>
                    <AiOutlineMail />
                    <p>daniel.sumarly@binus.ac.id</p>
                </a>

                <a href="https://www.linkedin.com/in/danielemerald/" target='_blank' className='social flex gap-5 items-center'
                style={{
                    transform: isInView ? "none" : "translateX(-100px)", opacity: isInView ? 1 : 0, transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                }}>
                    <AiFillLinkedin />
                    <p>danielemerald</p>
                </a>

                <a href="https://github.com/Pilvorm" target='_blank' className='social flex gap-5 items-center'
                style={{
                    transform: isInView ? "none" : "translateX(100px)", opacity: isInView ? 1 : 0, transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                }}>
                    <FaGithub />
                    <p>Pilvorm</p>
                </a>

                <a href="https://www.instagram.com/danielemrld/" target='_blank' className='social flex gap-5 items-center'
                style={{
                    transform: isInView ? "none" : "translateX(100px)", opacity: isInView ? 1 : 0, transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                }}>
                    <AiOutlineInstagram />
                    <p>@danielemrld</p>
                </a>
            </div>
        </div>
    )
}

export default Contact