import React from "react";
import Calculator from "../assets/calculator.webp";
import ToDo from "../assets/todo.jpg";
import Game from "../assets/game.jpg";

function Work() {
  return (
    <div name="work" className="w-full md:h-screen text-[#f5f5f5] bg-[#292929]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 text-[#f5f5f5] border-[#ED2939]">
            Work
          </p>
          <p className="py-6 text-[1.3rem]">Check out my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${Calculator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center  mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#f5f5f5] tracking-wider">
                Calculator
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/frontendPapi/Calculator" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#f5f5f5] text-[#292929] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ToDo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center  content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#f5f5f5] tracking-wider">
                To Do List
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/frontendPapi/To-do-list" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#f5f5f5] text-[#292929] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Game})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#f5f5f5] tracking-wider">
                Game
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/frontendPapi/Rock-Paper-Scissors" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#f5f5f5] text-[#292929] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
