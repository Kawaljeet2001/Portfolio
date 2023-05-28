import React from "react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { LEETCODE_URL, GEEKSFORGEEKS_URL, HACKERRANK_URL } from "../Constants";
const CodingProfiles = () => {
  return (
    <div
      className="flex flex-col items-start pt-4 pb-8 px-8 w-full rounded-lg col-span-12 lg:col-span-4"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}
    >
      <h3 className="text-white font-bold text-xl mt-2">Coding Profiles</h3>
      <p className="text-gray-500 text-sm mt-1">
        Platforms where I solve Data Structures and Algorithms related problems
      </p>
      <div className="flex items-center flex-wrap mt-8 w-fulljustify-center space-y-10">
        <a
          href={LEETCODE_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-start justify-start md:mx-4 "
        >
          <SiLeetcode className="text-5xl text-gray-400" />
          <div className="flex flex-col ml-2">
            <h3 className="text-lightGreen ">Leetcode</h3>
            <p className="text-gray-500 text-sm">
              Solved <span className="text-white">600+</span> problems
            </p>
          </div>
        </a>
        <a
          href={GEEKSFORGEEKS_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-start justify-start mx-0 md:mx-4 "
        >
          <SiGeeksforgeeks className="text-5xl text-gray-400" />
          <div className="flex flex-col ml-3">
            <h3 className="text-lightGreen ">Geeks For Geeks</h3>
            <p className="text-gray-500 text-sm">
              Solved <span className="text-white">100+</span> problems
            </p>
          </div>
        </a>
        <a
          href={HACKERRANK_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-start justify-start mx-0 md:mx-4 "
        >
          <FaHackerrank className="text-5xl text-gray-400" />
          <div className="flex flex-col ml-3">
            <h3 className="text-lightGreen ">Hackerrank</h3>
            <p className="text-gray-500 text-sm">
              <span className="text-white">5*</span> in problem solving
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CodingProfiles;
