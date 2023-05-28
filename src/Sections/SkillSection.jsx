import React from "react";
import CodingProfiles from "../Components/CodingProfiles";
import Frameworks from "../Components/Frameworks";
import ProgrammingLanguages from "../Components/ProgrammingLanguages";
import Tools from "../Components/Tools";
import Databases from "../Components/Databases";
import MLFrameworks from "../Components/MLFrameworks";

const SkillSection = ({reference}) => {
  return (
    <div className="flex items-center justify-center flex-col pt-24 pb-36 bg-darkGrey w-full" ref = {reference}>
      <h3 className="text-white font-bold text-3xl text-center md:text-5xl ">Skills</h3>
      <p className="text-lightGreen font-medium mt-2 text-center">My Technical Skills</p>
      <div className="mt-12 grid grid-cols-12 gap-10 w-11/12 px-0 md:px-12 lg:px-24 md:w-full">
        <ProgrammingLanguages />
        <Frameworks />
        <Databases/>
        <Tools />
        <MLFrameworks/>
        <CodingProfiles/>
      </div>
    </div>
  );
};

export default SkillSection;
