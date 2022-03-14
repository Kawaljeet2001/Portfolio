import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { RESUME_URL, PROFILE_PHOTO_URL } from "../Constants";

const AboutMe = ({ reference }) => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center bg-darkGrey py-24"
      ref={reference}
    >
      <h3 className="text-white font-bold text-3xl text-center md:text-5xl ">
        About Me
      </h3>
      <p className="text-lightGreen font-medium mt-1">Introduction</p>
      <div className="flex flex-col md:flex-row py-10 mt-2 md:mt-12 px-6 md:px-36 items-center md:items-start w-full  justify-center">
        <div className="overflow-hidden w-9/12 md:w-3/12 rounded-2xl">
          <img
            src={PROFILE_PHOTO_URL}
            alt="Kawaljeet Singh"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-start flex-col justify-center w-11/12 md:w-6/12 md:mt-0 mt-10 px-6 md:px-12">
          <p className="text-gray-200">
            Hello! I am Kawaljeet, a 6th semester student at IIIT Gwalior
            currently pursuing my Integrated B.Tech in Information Technology,
            with 9.27/10 Gradepoint.
          </p>
          <p className="text-gray-400 mt-5">
            I am a MERN Stack and Python Developer and I really enjoy learning
            new things, seeking opportunities and building products that add
            value. My focus remains on not just aquiring software engineering
            principles to make cool Applications, but at the same time, to
            integrate Machine Learning and Deep Learning Systems along with the
            application's UI, to create a hybrid product that is better than a
            regular Full Stack Application.
          </p>
          <p className="text-gray-400 mt-5">
            I am focussed, organised and a good team player. In free time, I
            like to expand my skills in the field of Visual Effects and 3D Art.
          </p>
          <a
            className="bg-lightGreen py-2.5 mt-6 px-4 rounded-md text-darkGrey font-bold flex items-center hover:bg-white"
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
          >
            Download Resume{" "}
            <AiOutlineFileDone className="ml-3 font-bold text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
