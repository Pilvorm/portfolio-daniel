import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import CV from "../assets/CV-Daniel Emerald Sumarly.pdf";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="hero h-[750px] md:h-[650px] flex flex-col justify-center items-center gap-7 mt-[73px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="font-[Pangea-Regular] text-5xl">Daniel Sumarly</h1>
      <p className="font-[Baskerville-BT-Roman] italic text-3xl">
        Front-End Developer
      </p>

    </motion.div>
  );
};

export default Hero;
