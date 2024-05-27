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
      <div className="mt-10 grid  grid-cols-1 lg:grid-cols-2 justify-items-center  items-center ">
        <img
          src={Image}
          className="w-60 h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 lg:mt-12 lg:-ml-44 xl:-ml-60 rounded-lg lg:rounded-xl border-2 border-black shadow-lg shadow-cyan-500/50"
        />
        <div className="mt-10 lg:mt-12 rounded-xl px-7 pb-5 py-3 xl:px-12 xl:py-8 border shadow-lg shadow-cyan-500/50  ">
          <table cellPadding={8} className="lg:text-xl xl:text-2xl">
            <tr className="flex ">
              <th>Full Name </th>
              <td className="ml-12">: Yi Sivching</td>
            </tr>
            <tr className="ml-1 flex  ">
              <th>Sex </th>
              <td className="ml-[93px] lg:ml-[105px] xl:ml-[118px] ">: Male</td>
            </tr>
            <tr className=" flex ">
              <th>Dob </th>
              <td className="ml-[93px] lg:ml-[103px] xl:ml-[115px] ">
                : 22 February 2003
              </td>
            </tr>
            <tr className="flex ">
              <th>Age </th>
              <td className="ml-[93px] lg:ml-[105px] xl:ml-[118px] ">: 21</td>
            </tr>
            <tr className="flex ">
              <th>Ethnicity</th>
              <td className="ml-14 lg:ml-[59px] xl:ml-[64px] ">: Khmer</td>
            </tr>
            <tr className="flex ">
              <th>Nationality</th>
              <td className="ml-9">: Cambodia</td>
            </tr>
            <tr className="mr-20 flex ">
              <th>Marital Status</th>
              <td className="ml-[14px] lg:ml-[10px] xl:ml-[4px] ">: Single</td>
            </tr>
            <tr className="mr-[55px] flex ">
              <th>Current Job </th>
              <td className="ml-[30px] ">: Student</td>
            </tr>
            <tr className=" flex ">
              <th>Pob</th>
              <td className="ml-[88px] lg:ml-[103px] xl:ml-[118px] ">
                : Srey Sonthor District, Kompong Cham Province
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;
