"use client";

import { Icon } from '@iconify/react';
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
} from "@/utils/motion";


interface Props {
  src: string;
  title: string;
  description: string;

  href: string;
  href2: string;
  name: string;
  name2: string;
}

const ProjectCard = ({ src, title, description, href, href2, name, name2 }: Props) => {
  return (

    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-row items-center justify-center px-5 mt-5  z-[20]"
  >

    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

   
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white  cursor-pointer rounded-lg max-w-[50px]"
        >
 

      <a href={href} className="flex items-center button-primary justify-center py-1 my-2 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"> <Icon className="mr-3" icon="feather:github" />
        
        {name}
      </a>
   
 
    
      <a href={href2} className="flex items-center button-primary  justify-center px-2 py-1 my-2 rounded-full cursor-pointer  dark:bg-dark-200 dark:bg-black-500"> <Icon className="mr-3" icon="iconoir:internet" />

        {name2}
      </a>
      
        </motion.a>

      
      </div>

  
      </motion.div>
  );
};

export default ProjectCard;
