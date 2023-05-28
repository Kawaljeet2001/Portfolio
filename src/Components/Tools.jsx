import React from "react";
import { FaGitAlt, FaGithub, FaAws } from "react-icons/fa";
import { DiHeroku } from "react-icons/di";
import { SiNetlify, SiPostman, SiFirebase, SiDocker,  } from "react-icons/si";
const Tools = () => {
  return (
    <div
      className="flex flex-col items-start py-4 px-6 w-full rounded-lg col-span-12 lg:col-span-4"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}
    >
      <h3 className="text-white font-bold text-xl mt-2">Tools</h3>
      <p className="text-gray-500 text-sm mt-1">
        Tools that I use whilst working on my projects and internships
      </p>
      <div className="flex items-center flex-wrap mt-8 w-fulljustify-center">
        <div className="flex flex-col items-center mx-3 my-4">
          <FaGitAlt className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-sm md:text-base text-lightGreen">Git</p>
        </div>
        <div className="flex flex-col items-center mx-3 my-4">
          <FaGithub className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-sm md:text-base text-lightGreen">Github</p>
        </div>
        <div className="flex flex-col items-center mx-3 my-4">
          <SiPostman className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-sm md:text-base text-lightGreen">Postman</p>
        </div>
        <div className="flex flex-col items-center mx-3 my-4">
          <FaAws className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-sm md:text-base text-lightGreen">AWS</p>
        </div>
        <div className="flex flex-col items-center mx-3 my-4">
          <SiDocker className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-sm md:text-base text-lightGreen">Docker</p>
        </div>
        <div className="flex flex-col items-center mx-3 my-4">
          <SiNetlify className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-sm md:text-base text-lightGreen">Netlify</p>
        </div>

        <div className="flex flex-col items-center mx-3 my-4">
          <SiFirebase className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-sm md:text-base text-lightGreen">Firebase</p>
        </div>
        <div className="flex flex-col items-center mx-3 my-4">
          <DiHeroku className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-sm md:text-base text-lightGreen">Heroku</p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
