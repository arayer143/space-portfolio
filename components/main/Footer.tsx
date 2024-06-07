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
    className=" bg-transparent text-gray-200 shadow-lg p-[15px] z-[20]">

<motion.p 
                    variants={slideInFromLeft(0.8)}
                    className="flex text-lg mb-6 text-center justify-center align-center">Contact Me</motion.p>
                

            <motion.div 
            variants={slideInFromLeft(0.8)}
            className="w-full h-full flex items-center justify-around z-[20]">


         
             
                    <motion.div 
                    variants={slideInFromLeft(0.8)}
                    className="flex justify-center rounded-lg ">

                    
             
        
                

                        
       
                    <a href="tel:985-869-2356" className="flex items-center button-primary justify-center px-2 py-3 my-2 mr-2 rounded-full cursor-pointer z-[20]"> <Icon className="mr-3" icon="ic:baseline-phone" />
                        Call Me
                    </a> 

                  

               
                    
                    <a href="mailto:alexrayer7@gmail.com" className="flex items-center button-primary justify-center px-4 py-3 my-2 mr-2 rounded-full cursor-pointer  z-[20]"> <Icon className="mr-3" icon="ic:baseline-email" />
                        Email
                    </a> 



                    
                    <a href="https://www.linkedin.com/in/alex-rayer/" className="flex items-center button-primary justify-center mr-2 px-2 py-3 my-2 rounded-full cursor-pointer z-[20]"> <Icon className="mr-3" icon="mdi:linkedin" />
                        Linkedin
                    </a> 


                      
                    <a href="https://www.linkedin.com/in/alex-rayer/" className="flex items-center button-primary justify-center px-2 py-3 my-2 rounded-full cursor-pointer z-[20]"> <Icon className="mr-3" icon="mdi:linkedin" />
                        GitHub
                    </a> 

         
               
                </motion.div>
           

            </motion.div>

    </motion.div>
  )
}

export default Footer