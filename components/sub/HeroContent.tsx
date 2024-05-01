"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from '@iconify/react';
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
          className="Welcome-box py-[8px] px-[57px] border border-[#7042f88b] opacity-[0.9] ml-10"
        >
          <SparklesIcon className="text-[#5b3cb9] h-5 w-5 mr-2"  />
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
          <div 
          className=" align-center">
          I&apos;m a Web Developer with experience in Website
          development, SEO and Deployment. Check out my projects and skills.

          </div>
        </motion.p>


        </motion.div>

        <div className="w-full h-full flex flex-col mt-10 text-white items-center justify-around flex-wrap z-[20]">
       
        <a href="tel:985-869-2356" className="flex items-center button-primary justify-center px-2 py-2 my-2 rounded-full cursor-pointer"> <Icon className="mr-3" icon="ic:baseline-phone" />
                        Call Me
                    </a> 

                  

               
                    
                    <a href="mailto:alexrayer7@gmail.com" className="flex items-center button-primary justify-center px-4 py-2 my-2 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"> <Icon className="mr-3" icon="ic:baseline-email" />
                        Email
                    </a> 



                    
                    <a href="https://www.linkedin.com/in/alex-rayer/" className="flex items-center button-primary justify-center px-2 py-2 my-2 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"> <Icon className="mr-3" icon="mdi:linkedin" />
                        Linkedin
                    </a> 


                      
                    <a href="https://www.linkedin.com/in/alex-rayer/" className="flex items-center button-primary justify-center px-2 py-2 my-2 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"> <Icon className="mr-3" icon="mdi:linkedin" />
                        Linkedin
                    </a> 



</div>

      
   



   

   
    </motion.div>
  );
};

export default HeroContent;
