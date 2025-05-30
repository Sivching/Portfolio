import React from "react";
import Image from "../assets/ching.jpg";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Section = () => {
  return (
    <div
      id="/"
      className="w-[90%] h-[100vh]  xl:w-[80%] mx-auto pt-32 grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center"
    >
      <div data-aos="fade-right" className="text-gray-200  ">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold  ">
          Hello Everyone! I'm{" "}
          <span className="from-blue-600 via-green-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            Yi Sivching
          </span>
        </h1>
        <p className="text-lg lg:text-xl xl:text-2xl mt-3 lg:mt-5 ">
          I am a Full-Stack Developer. Full-Stack Developer with a
          specialization in front-end and back-end web development. I enjoy
          building full-stack websites.
        </p>

        <button className="px-3 py-3 xl:px-4 xl:py-4 lg:mt-7 font-bold text-md xl:text-lg rounded-xl hover:text-white mt-5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
          <a href="/public/Yi Sivching_Full Stack Developer.pdf" download>
            Download CV
          </a>
        </button>
      </div>
      <div>
        <img
          data-aos="fade-left"
          src={Image}
          className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mt-16 border-2 border-black rounded-[50%] shadow-lg shadow-cyan-500/50 "
        />
      </div>
      <div
        data-aos="fade-right"
        className="flex mt-5  lg:-mt-[400px]  lg:-ml-[280px] xl:-ml-[560px] text-white gap-5 text-[25px] md:text-[28px] lg:text-3xl xl:text-4xl  "
      >
        <a
          href="https://web.facebook.com/sivching.yi"
          className=" transition-all hover:scale-110 ease-in-out duration-300  "
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
    </div>
  );
};

export default Section;
