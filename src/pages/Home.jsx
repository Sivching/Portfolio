import React from "react";
import Section from "../components/Section";
import About from "../components/About";
import Skill from "../components/Skill";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="h-[500vh]  bg-slate-700 pb-24 overflow-hidden ">
      <Section />
      <About />
      <Skill />
      <Contact />
    </div>
  );
};

export default Home;
