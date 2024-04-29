"use client";

import React from "react";
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contact Me</div>
                 
                    <div className="flex flex-row items-center mt-3 cursor-pointer">
                    
                    <a href="tel:985-869-2356" className="flex items-center button-primary  justify-center px-2 py-2 my-2 rounded-full cursor-pointer  dark:bg-dark-200 dark:bg-black-500"> <Icon className="mr-3" icon="ic:baseline-phone" />
                        Call Me
                    </a> 

                    </div>

                    <div className="flex flex-row items-center cursor-pointer">
                    
                    <a href="mailto:alexrayer7@gmail.com" className="flex items-center button-primary  justify-center px-4 py-2 my-2  rounded-full cursor-pointer  dark:bg-dark-200 dark:bg-black-500"> <Icon className="mr-3" icon="ic:baseline-email" />
                        Email
                    </a> 

                    </div>


                    <div className="flex flex-row items-center cursor-pointer">
                    
                    <a href="https://www.linkedin.com/in/alex-rayer/" className="flex items-center button-primary  justify-center px-2 py-2 my-2 rounded-full cursor-pointer  dark:bg-dark-200 dark:bg-black-500"> <Icon className="mr-3" icon="mdi:linkedin" />
                        Linkedin
                    </a> 

                    </div>
               
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                
             
                </div>

            </div>

        </div>
    </div>
  )
}

export default Footer