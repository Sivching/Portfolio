import React from "react";
import Image from "../assets/ching1.jpg";
const About = () => {
  const data = [
    {
      label: "Full Name",
      value: "Yi Sivching",
    },
    {
      label: "Sex",
      value: "Male",
    },
    {
      label: "DOB",
      value: "22 February 2003",
    },
    {
      label: "Age",
      value: "21",
    },
    {
      label: "Ethnicity",
      value: "Khmer",
    },
    {
      label: "Nationality",
      value: "Cambodia",
    },
    {
      label: "Marital Status",
      value: "Single",
    },
    {
      label: "Current Job",
      value: "Student",
    },
    {
      label: "POB",
      value:
        "Tnot Krom Village, Russey Srok Commune, Srey Sonthor District, Kompong Cham Province ",
    },
  ];

  return (
    <div
      id="about"
      className="w-[90%] h-[100vh] pt-44 xl:w-[80%] mx-auto   text-gray-200 "
    >
      <h1 className="text-4xl lg:text-5xl text-blue-400 font-bold border-b-4 lg:border-b-8 w-[106px] lg:w-[140px] border-blue-400  ">
        About
      </h1>
      <div className="mt-10 grid gap-10 grid-cols-1 lg:grid-cols-2 justify-items-center  items-center ">
        <img
          src={Image}
          className="w-60 h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 lg:mt-12 lg:-ml-44 xl:-ml-60 rounded-lg lg:rounded-xl border-2 border-black shadow-lg shadow-cyan-500/50"
        />
        <p className="text-lg lg:text-xl xl:text-2xl">
          I graduated high school (Grade 12) in 2022 and level 12 of English at
          Pannasastra University of Cambodia in 2019. Nowadays, I'm a
          fourth-year student of IT major at National University of Management.
        </p>
      </div>
    </div>
  );
};

export default About;
