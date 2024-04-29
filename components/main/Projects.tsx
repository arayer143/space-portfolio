import React from "react";
import ProjectCard from "../sub/ProjectCard";



const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text ">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-1 px-10 py-2">
        <ProjectCard
          src="/cleanslatelogo.png"
          href="https://github.com/arayer143/Clean-Slate-Pressure-Washing-Website"
          href2="https://cleanslatepressurewashingnola.com/"
          title="Clean Slate Pressure Washing"
          name="Github"
          name2="Live Website"
          description="Clean Slate is my first website I created for a small business in my area. This site uses the Bootstrap framework with HTML, CSS, JS, & SCSS."
        />
       
        <ProjectCard
          src="/HMW-logo .png"
          href="https://github.com/arayer143/Brunell_Website"
          href2="https://teambrunellfinance.com/"
          title="TeamBrunellFinace.com"
          name="Github"
          name2="Live Website"
          description="Teambrunellfinace.com is website for a finance company that really knows how to make your money work for you. This site is also made with the Bootstrap framework"
          
        />
        
        <ProjectCard
          src="/SpaceWebsite.png"
          href="https://github.com/"
          href2="https://www.facebook.com/"
          title="Modern Next.js Portfolio"
          name="Github"
          name2="Live Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;
