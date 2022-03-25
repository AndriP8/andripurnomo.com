import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import TechStackTooltip from "TechStack/TechStack.tooltip";

const TechStack = () => {
  return (
    <div className="mt-12">
      <h3>Current Favorite Tech Stack</h3>
      <div className="my-3 flex flex-wrap">
        <TechStackTooltip techStack="Create-react-app, first frontend library I learned, great for handling user interfaces managing multiple states">
          <FaReact className="text-5xl mx-2 my-1 cursor-pointer" />
        </TechStackTooltip>
        <TechStackTooltip techStack="Typescript is a cool programming language, great for reducing data type errors in writing code">
          <SiTypescript className="text-5xl mx-2 my-1 cursor-pointer" />
        </TechStackTooltip>
        <TechStackTooltip techStack="NextJS is a framework for react, it's great if you want to implement SSR and SSG which are not in create-react-app">
          <SiNextdotjs className="text-5xl mx-2 my-1 cursor-pointer" />
        </TechStackTooltip>
        <TechStackTooltip techStack="TailwindCSS is an excellent css framework, there you get a lot of utility classes and it can be customized">
          <SiTailwindcss className="text-5xl mx-2 my-1 cursor-pointer" />
        </TechStackTooltip>
        <TechStackTooltip techStack="NodeJS is a runtime environment for javascript, you can run javascript code not only on the frontend but also on the backend">
          <FaNodeJs className="text-5xl mx-2 my-1 cursor-pointer" />
        </TechStackTooltip>
      </div>
    </div>
  );
};

export default TechStack;
