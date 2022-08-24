import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#292929] text-[#f5f5f5]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ED2939]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Dejan, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-[1.3rem]">I start mu jurney with programing on 15.10.2021 in CodeAcademy. CodeAcademy have program for Frontend Developers with HTML, CSS, BootStrap, GIT, JavaScript and React.js. In this moment i'm certificate for Frontend Developer and i'm looking for intership and work on real projects.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
