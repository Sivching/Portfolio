import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactjs from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/express.png";
import mysql from "../assets/mysql.png";
import github from "../assets/github.jpg";

const images = [
  {
    images: html,
    label: "HTML",
  },
  {
    images: css,
    label: "CSS",
  },
  {
    images: javascript,
    label: "Javascript",
  },
  {
    images: reactjs,
    label: "React JS",
  },
  {
    images: tailwind,
    label: "Tailwind CSS",
  },
  {
    images: nodejs,
    label: "Node JS",
  },
  {
    images: expressjs,
    label: "Express JS",
  },
  {
    images: mysql,
    label: "MySQL",
  },
  {
    images: github,
    label: "Github",
  },
];

const Skill = () => {
  return (
    <div id="skill" className="w-[90%] h-[100vh] pt-44 xl:w-[80%] mx-auto  ">
      <h1
        data-aos="fade-right"
        data-aos-delay="0"
        className="text-4xl lg:text-5xl font-bold text-blue-400 border-b-4 lg:border-b-8 w-[70px] lg:w-[93px] border-blue-400  "
      >
        Skill
      </h1>
      <div className="mt-10  xl:mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  justify-items-center items-center px-5 gap-8">
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className=" group w-36 h-36 xl:w-48 xl:h-48 rounded-xl flex justify-center items-center shadow-lg shadow-orange-500/50"
        >
          <img
            className="w-44 xl:w-64 group-hover:scale-125 transition-all ease-in-out duration-500  "
            src={html}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="group w-36 h-36 xl:w-48 xl:h-48 rounded-xl  flex justify-center items-center shadow-lg shadow-blue-500/50"
        >
          <img
            className="w-[95px] xl:w-[125px] group-hover:scale-125 transition-all ease-in-out duration-500  "
            src={css}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="group w-36 h-36 xl:w-48 xl:h-48 rounded-xl flex justify-center items-center shadow-lg shadow-yellow-500/50"
        >
          <img
            className="w-44 xl:w-64 group-hover:scale-125 transition-all ease-in-out duration-500"
            src={javascript}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="group w-36 h-36 xl:w-48 xl:h-48 rounded-xl flex justify-center items-center shadow-lg shadow-cyan-500/50"
        >
          <img
            className="w-44 xl:w-64 group-hover:scale-125 transition-all ease-in-out duration-500"
            src={reactjs}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="group w-36 h-36 xl:w-48 xl:h-48 rounded-xl flex  justify-center items-center shadow-lg shadow-blue-500/50"
        >
          <img
            className="w-24 xl:w-32 group-hover:scale-125 transition-all ease-in-out duration-500"
            src={tailwind}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="group w-36 h-36 xl:w-48 xl:h-48 rounded-xl flex justify-center items-center shadow-lg shadow-green-500/50"
        >
          <img
            className="w-28 xl:w-36 group-hover:scale-110 transition-all ease-in-out duration-500"
            src={nodejs}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="group w-36 h-36 xl:w-48 xl:h-48 rounded-xl flex justify-center items-center shadow-lg shadow-slate-500/50"
        >
          <img
            className="w-52  group-hover:scale-125 transition-all ease-in-out duration-500"
            src={expressjs}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="group w-36 h-36 xl:w-48 xl:h-48 rounded-xl flex justify-center items-center shadow-lg shadow-cyan-500/50"
        >
          <img
            className="w-24 xl:w-28 group-hover:scale-110 transition-all ease-in-out duration-500"
            src={mysql}
          />
        </div>
      </div>
    </div>
  );
};

export default Skill;
