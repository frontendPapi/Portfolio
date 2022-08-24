import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo1.jpg";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[120px] flex justify-between items-center px-4 bg-[#292929] text-[#f5f5f5]">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "120px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex text-[1.3rem]  ">
        <li className="hover:text-[#ED2939]">Home</li>
        <li className="hover:text-[#ED2939]">About</li>
        <li className="hover:text-[#ED2939]">Skills</li>
        <li className="hover:text-[#ED2939]">Work</li>
        <li className="hover:text-[#ED2939]">Contact</li>
      </ul>

      {/* Hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars className="text-[2rem] hover:text-[#ED2939]" /> : <FaTimes className="text-[2rem] hover:text-[#ED2939]" />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden "
            : "absolute top-0 left-0 w-full h-screen bg-[#292929] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl hover:text-[#ED2939]">Home</li>
        <li className="py-6 text-3xl hover:text-[#ED2939]">About</li>
        <li className="py-6 text-3xl hover:text-[#ED2939]">Skills</li>
        <li className="py-6 text-3xl hover:text-[#ED2939]">Work</li>
        <li className="py-6 text-3xl hover:text-[#ED2939]">Contact</li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-[#f5f5f5] "
              href="https://www.linkedin.com/in/dejan-mihajlov-743492223/" rel="noreferrer" target={'_blank'}
            >
              Linkendin <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-[#f5f5f5]"
              href="https://github.com/frontendPapi" rel="noreferrer" target={'_blank'}
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-[#f5f5f5] "
              href="https://outlook.com" rel="noreferrer" target={'_blank'}
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="/" rel="noreferrer" target={'_blank'}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
