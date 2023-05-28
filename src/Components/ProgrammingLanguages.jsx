import React from "react";
import { SiCplusplus, SiPython } from "react-icons/si";
import {DiJavascript1} from "react-icons/di";
import {TbBrandGolang} from "react-icons/tb"

const ProgrammingLanguages = () => {
  return (
    <div
      className="flex flex-col items-start py-4 px-6 w-full rounded-lg col-span-12 lg:col-span-4"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}
    >
      <h3 className="text-white font-bold text-xl mt-2">
        Programming Languages
      </h3>
      <p className="text-gray-500 text-sm mt-1">
        Languages that I have practiced and have hands-on experience with
      </p>
      <div className="flex items-center flex-wrap mt-8 w-fulljustify-center">
        <div className="flex flex-col items-center mx-3 my-4">
          <SiCplusplus className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen md:text-base text-sm mt-1">C++</p>
        </div>
        <div className="flex flex-col items-center mx-3 my-4">
          <DiJavascript1 className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen md:text-base text-sm mt-1">Javascript</p>
        </div>
        <div className="flex flex-col items-center mx-3 my-4">
          <SiPython className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen md:text-base text-sm mt-1">Python</p>
        </div>
        <div className="flex flex-col items-center mx-3 my-4">
          <TbBrandGolang className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen md:text-base text-sm mt-1">Golang</p>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingLanguages;
