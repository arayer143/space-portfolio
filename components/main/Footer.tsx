"use client";

import React from "react";
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";
import {
  slideInFromLeft,
} from "@/utils/motion";







const Footer = () => {
  return (
    <motion.div 
    initial="hidden"
    animate="visible"
    className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[20]">

        <div className="w-full flex flex-col items-center justify-center">

            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap z-[20]">
                

             
    <div className="object-contain rounded-lg ">

                    
                    <div className="font-bold text-[16px]">Contact Me</div>
                 
                

                        
                    
                    <a href="tel:985-869-2356" className="flex items-center button-primary justify-center px-2 py-2 my-2 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"> <Icon className="mr-3" icon="ic:baseline-phone" />
                        Call Me
                    </a> 

                  

               
                    
                    <a href="mailto:alexrayer7@gmail.com" className="flex items-center button-primary justify-center px-4 py-2 my-2 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"> <Icon className="mr-3" icon="ic:baseline-email" />
                        Email
                    </a> 



                    
                    <a href="https://www.linkedin.com/in/alex-rayer/" className="flex items-center button-primary justify-center px-2 py-2 my-2 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"> <Icon className="mr-3" icon="mdi:linkedin" />
                        Linkedin
                    </a> 

         
               
                </div>
           

            </div>

        </div>
    </motion.div>
  )
}

export default Footer