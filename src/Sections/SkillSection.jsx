import React from "react";
import CodingProfiles from "../Components/CodingProfiles";
import Frameworks from "../Components/Frameworks";
import ProgrammingLanguages from "../Components/ProgrammingLanguages";
import Tools from "../Components/Tools";

const SkillSection = ({reference}) => {
  return (
    <div className="flex items-center justify-center flex-col px-6 md:px-36 pt-24 pb-36 bg-darkGrey w-full" ref = {reference}>
      <h3 className="text-white font-bold text-3xl text-center md:text-5xl ">Skills</h3>
      <p className="text-lightGreen font-medium mt-2 text-center">My Technical Skills</p>
      <div className="mt-12 grid grid-cols-1 gap-x-20 md:w-9/12 w-11/12">
        <ProgrammingLanguages />
        <Frameworks />
        <Tools />
        <CodingProfiles/>
      </div>
    </div>
  );
};

export default SkillSection;
