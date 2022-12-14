import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {Link} from 'react-scroll'

function Home({handleClick}) {
  return (
    <div name="home" className="w-full h-screen bg-[#292929]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-[#ED2939] text-[1.3rem]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#f5f5f5]">
          Dejan Mihajlov
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#787878]">
          I'am a Frontend Developer
        </h2>
        <p className="text-[#787878] text-[1.3rem] py-4 max-w-[700px]">
          I'am a Fronend Developer with no experience who work on own small
          project, iam looking for intership and start work on real projects.
        </p>
        <div>
          <button className="text-[#f5f5f5] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ED2939] hover:border-[#ED2939]">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
