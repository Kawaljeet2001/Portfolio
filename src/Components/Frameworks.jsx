import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb, DiDjango, DiMysql } from "react-icons/di";
import {
  SiTailwindcss,
  SiPostgresql,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";
const Frameworks = () => {
  return (
    <div
      className="flex flex-col items-start py-4 px-8 w-full rounded-lg mt-10"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}
    >
      <h3 className="text-white font-bold text-xl mt-2">
        Frameworks & Libraries
      </h3>
      <p className="text-gray-500 text-sm mt-1">Libraries and Frameworks that I commonly work with</p>
      <div className="flex items-center flex-wrap mt-8 w-fulljustify-center">
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <FaReact className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">React.js</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiRedux className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Redux</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiNextdotjs className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Next.js</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <FaNodeJs className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Node.js</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <DiDjango className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Django</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiTailwindcss className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <DiMongodb className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Mongo DB</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <DiMysql className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">MySQL</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiPostgresql className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">PostgreSQL</p>
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
