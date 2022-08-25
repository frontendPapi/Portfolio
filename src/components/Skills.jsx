import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import JavaScript from "../assets/javascript.png";
import Reactt from "../assets/react.png";

function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#292929]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-[#f5f5f5]">
        <div>
          <p className="text-4xl font-bold inline  border-b-4 border-[#ED2939]">
            Skills
          </p>
          <p className="py-4 text-[1.3rem]">
            This are technologies i've worked with.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 w-full gap-4 py-8 text-center">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4 text-[1.3rem]">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4 text-[1.3rem]">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4 text-[1.3rem]">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="GitHub icon" />
            <p className="my-4 text-[1.3rem]">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4 text-[1.3rem]">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Reactt} alt="React icon" />
            <p className="my-4 text-[1.3rem]">React.js</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
