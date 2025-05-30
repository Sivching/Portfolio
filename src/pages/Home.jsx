import React from "react";
import Section from "../components/Section";
import About from "../components/About";
import Skill from "../components/Skill";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="  bg-slate-700 pb-24 overflow-hidden ">
      <Section />
      {/* <About /> */}
      <Skill />
      <Contact />
    </div>
  );
};

export default Home;
