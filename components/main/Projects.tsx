import React from "react";
import ProjectCard from "../sub/ProjectCard";



const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
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
          description="Clean Slate is my first website I created for a small business in my area."
          description2="Langages Used: HTML, CSS, JS, SCSS"
          description3="Frameworks: Bootstrap"
        />
       
        <ProjectCard
          src="/HMW-logo .png"
          href="https://github.com/arayer143/Brunell_Website"
          href2="https://teambrunellfinance.com/"
          title="Team Brunell Finace"
          name="Github"
          name2="Live Website"
          description="Teambrunellfinace.com is website for a finance company that really knows how to make your money work for you. This site is also made with the Bootstrap framework"
          description2="Langages Used: HTML, CSS, JS, SCSS, PHP"
          description3="Frameworks: Bootstrap"

        />
        
        <ProjectCard
          src="/RayDunn-logo-noBG.png"
          href="https://github.com/arayer143/RayDunn-Website"
          href2="https://raydunnsolutions.com/"
          title="RayDunn Web Solutions"
          name="Github"
          name2="Live Website"
          description="RayDunn Web Solutions is the homepage to my web design company I started that is helping three small companies with web design, SEO, and development."
          description2="Langages Used: HTML, CSS, JS, SCSS"
          description3="Frameworks: Bootstrap"

        />

          <ProjectCard
          src="/pristinelogo-no-bg.jpg"
          href="https://github.com/arayer143/Pristine-Clean-Website"
          href2="https://pristinecleansoftwash.com"
          title="Pristine Clean Soft Wash"
          name="Github"
          name2="Live Website"
          description="Pristine Clean Soft Wash is a Website for a Wash Company in Louisiana that is a clone of the Clean Slate Project. "
          description2="Langages Used: HTML, CSS, JS, SCSS"
          description3="Frameworks: Bootstrap"

        />

      </div>
    </div>
  );
};

export default Projects;
