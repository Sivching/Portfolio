import React from "react";
import { Link } from "react-router-dom";
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
    label: "About",
    path: "/about",
  },
  {
    label: "Skill",
    path: "/skill",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];
const Footer = () => {
  return (
    <div className="bg-slate-800 h-[25vh]  flex flex-col gap-5 justify-center items-center">
      <div className="  w-[90%] mx-auto flex justify-center gap-5 ">
        {lists.map((p) => {
          return (
            <li className="font-bold text-gray-400 list-none lg:text-xl  ">
              <Link
                className=" hover:text-white transition-all ease-in-out duration-300"
                to={p.path}
              >
                {p.label}
              </Link>
            </li>
          );
        })}
      </div>
      <div className="flex justify-center  text-gray-400 gap-5 text-[25px] lg:text-3xl ">
        <a
          href="https://web.facebook.com/sivching.yi"
          className=" transition-all hover:scale-110 ease-in-out duration-300"
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
      <p className="text-gray-400 text-center text-sm w-[300px] ">
        Copyright © 2024 - All right reserved by Yi Sivching
      </p>
    </div>
  );
};

export default Footer;
