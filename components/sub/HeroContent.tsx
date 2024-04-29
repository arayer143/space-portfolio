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

      className=" items-center justify-center text-center mt-40"
    >
  


        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[57px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#5b3cb9] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-center text-[13px]">
           Developer Portfolio
          </h1>
        </motion.div>



        <motion.div
          variants={slideInFromLeft(0.5)}
          className=" mt-6 text-5xl font-bold  text-white text-center "
        >
          <span>
            Hello, Im
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Alex Rayer{" "}
            </span>
           
          </span>


          <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 mt-5 text-center align-center "
        >
          I&apos;m a Full Stack Developer with experience in Website
          development, SEO and Deployment. Check out my projects and skills.
        </motion.p>


        </motion.div>



        <motion.div
        variants={slideInFromLeft(0.5)}
          className=" mt-6 font-bold  text-white text-center ">

    
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-1 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
 
      <a
        href="public/Resume.pdf"
        download="Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500 "
      >

        <span>Download Resume</span>
      </a>


      
        </motion.a>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-1 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
 
      <a
        href="mailto:alexrayer7@gmail.com"
    
        className="flex items-center justify-center px-1 py-1 my-2 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500 "
      >

        <span>Email Me</span>
      </a>
      
        </motion.a>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-1 button-primary text-center text-white cursor-pointer rounded-lg max-w-[50px]"
        >
 
      <a
        href="mailto:alexrayer7@gmail.com"
    
        className="flex items-center justify-center px-1 py-1 my-2 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500 "
      >

      
      </a>
      
        </motion.a>
        </motion.div>

   

   
    </motion.div>
  );
};

export default HeroContent;
