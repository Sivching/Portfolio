import React from "react";
import Image from "../assets/ching1.jpg";
const About = () => {
  return (
    <div
      id="about"
      className="w-[90%]  pt-44 xl:w-[80%] mx-auto   text-gray-200 "
    >
      <h1
        data-aos="fade-right"
        data-aos-delay="0"
        className="text-4xl lg:text-5xl text-blue-400 font-bold border-b-4 lg:border-b-8 w-[106px] lg:w-[140px] border-blue-400  "
      >
        About
      </h1>
      <div className="mt-10 grid gap-12 grid-cols-1 lg:grid-cols-2 items-center  ">
        <img
          data-aos="fade-right"
          src={Image}
          alt="Profile"
          className="w-60 h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover rounded-xl border-2 border-black shadow-lg shadow-cyan-500/50 mx-auto"
        />
        <div
          data-aos="fade-left"
          className="border-2 border-gray-500 shadow-xl px-7 py-5 rounded-lg text-lg lg:text-xl xl:text-2xl leading-relaxed text-justify"
        >
          <p>
            I completed high school in 2022 and finished Level 12 English at
            Pannasastra University of Cambodia in 2019. Currently, I'm a
            fourth-year Information Technology student at the National
            University of Management. I am seeking a full-time opportunity where
            I can further develop my skills and contribute meaningfully to your
            team. I'm confident that my education, dedication, and integrity
            make me a strong candidate. I would be happy to discuss my abilities
            further if given the opportunity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
