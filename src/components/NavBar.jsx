import React, { useState } from "react";
import { Link } from "react-scroll";
import { MdOutlineCancel } from "react-icons/md";
import { FaAlignRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const lists = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Skill",
    path: "skill",
  },
  {
    label: "Contact",
    path: "contact",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[100%] z-40  bg-slate-800 fixed left-0 top-0 ">
      <div className="w-[100%] md:w-[90%] xl:w-[80%] md:mx-auto md:py-5 xl:py-8  gap-3   flex flex-col md:flex-row  justify-between">
        <h2 className=" font-bold  text-2xl lg:text-3xl ml-5 mt-3 md:mt-0 z-0 md:z-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
          Yi Sivching
        </h2>
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl absolute right-6 text-white top-4 md:hidden "
          >
            {isOpen ? <MdOutlineCancel /> : <FaAlignRight />}
          </button>
        </div>
        <ul
          className={`flex flex-col md:flex-row   absolute md:static transition-all ease-in-out duration-500 z-10 md:-z-0 w-[70%] h-[100vh] md:h-0 md:w-0 bg-slate-800 md:bg-white -translate-x-96 ${
            isOpen && "translate-x-0"
          }`}
        >
          <h2 className=" font-bold md:hidden  flex justify-center text-2xl xl:text-3xl  mt-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
            Yi Sivching
          </h2>
          {lists.map((p) => {
            return (
              <li className="font-bold text-white text-xl lg:text-2xl xl:text-3xl ml-6 mt-8 md:mt-0 ">
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-blue-400 cursor-pointer hover:border-b-4 border-b-blue-400 transition-all ease-in-out duration-300"
                  onClick={() => setIsOpen(false)}
                  to={p.path}
                >
                  {p.label}
                </Link>
              </li>
            );
          })}
          <div className="flex mt-8 gap-5 text-white text-[25px] ml-6 md:hidden ">
            <a
              href="https://web.facebook.com/sivching.yi"
              className="transition-all hover:scale-110 ease-in-out duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/ching_gt/"
              className=" transition-all hover:scale-110 ease-in-out duration-300  "
            >
              <FaInstagram />
            </a>
            <a
              href=""
              className=" hover:scale-110 transition-all ease-in-out duration-300"
            >
              {" "}
              <FaTelegram />
            </a>
            <a
              href="https://github.com/Sivching"
              className="hover:scale-110 transition-all ease-in-out duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
