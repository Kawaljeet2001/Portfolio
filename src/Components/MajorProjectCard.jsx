import React from "react";
import { AiFillGithub } from "react-icons/ai";
import ProjectTechnology from "./ProjectTechnology";

const MajorProjectCard = ({ data }) => {
  return (
    <div
      className="py-10 px-2 md:px-12 bg-darkGrey w-10/12 rounded-xl flex flex-col-reverse md:flex-row items-center"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      }}
    >
      <div className="flex flex-col w-11/12 md:w-6/12">
        <h3 className="text-gray-300 text-lg md:text-2xl font-bold mt-4 md:mt-0">{data.name}</h3>
        <p className="mt-2 md:mt-6 text-gray-500">{data.description}</p>
        <div className="hidden md:flex items-center flex-wrap mt-16">
          {data.tools.map((item, index) => (
            <ProjectTechnology name={item} key={index} />
          ))}
        </div>
        <div className="mt-10 flex items-center w-full flex-wrap">
          {data.githubLink && (
            <a
              className="bg-white text-sm md:text-base px-1 md:px-3 py-1.5 rounded-md font-bold flex items-center justify-center mr-2 md:mr-4 hover:bg-lightGreen"
              target="_blank"
              rel="noreferrer"
              href={data.githubLink}
            >
              <AiFillGithub className="hidden md:block mr-1.5" /> Github <span className="md:block hidden">Repo</span>
            </a>
          )}
          {data.liveLink && (
            <a
              className="text-lightGreen flex items-center mx-4 underline md:text-base text-sm"
              target="_blank"
              rel="noreferrer"
              href={data.liveLink}
            >
              Live
            </a>
          )}
          {data.demoLink && (
            <a
              className="text-lightGreen flex items-center mx-4 underline md:text-base text-sm"
              target="_blank"
              rel="noreferrer"
              href={data.demoLink}
            >
              Video Demo
            </a>
          )}
        </div>
      </div>
      <div className="w-7/12 md:w-6/12 h-full md:ml-8 flex items-center md:items-start justify-center">
        <img src={data.imgLink} className="rounded-lg" alt="Project" />
      </div>
    </div>
  );
};

export default MajorProjectCard;
