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
      <div className="h-full w-full flex flex-col md:flex-row gap-5 px-10">
        <ProjectCard
          src="/cleanslatelogo.png"
          href="https://github.com/"
          href2="https://www.facebook.com/"
          title="Modern Next.js Portfolio"
          name="Github"
          name2="facebook"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
       
        <ProjectCard
          src="/CardImage.png"
          href="https://github.com/"
          name="Github"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        
        <ProjectCard
          src="/SpaceWebsite.png"
          href="https://github.com/"
          title="Space Themed Website"
          name="Github"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;
