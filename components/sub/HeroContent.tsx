"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";


const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#5b3cb9] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
           Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 mt-6 text-6xl font-bold  text-white  w-auto h-auto"
        >
          <span>
            Hello, Im
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Alex Rayer{" "}
            </span>
           
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Developer with experience in Website
          development, SEO and Deployment. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
 
      {/* Resume */}
      <a
        href="/Resume.pdf"
        download="Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >

        <span>Download Resume</span>
      </a>
        </motion.a>
      </div>

   
    </motion.div>
  );
};

export default HeroContent;
