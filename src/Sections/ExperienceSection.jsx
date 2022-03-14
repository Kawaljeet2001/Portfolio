import React from "react";
import ExperienceCard from "../Components/ExperienceCard";
import { Experiences } from "../Experiences";

const ExperienceSection = ({ reference }) => {
  return (
    <div
      className="flex items-center justify-center flex-col px-6 md:px-36 pt-24 pb-36 bg-slateGrey w-full"
      ref={reference}
    >
      <h3 className="text-white font-bold text-3xl md:text-5xl text-center">Work Experience</h3>
      <p className="text-lightGreen font-medium mt-2">
        My Professional work experience
      </p>
      <div className="mt-24 flex flex-col w-full items-center">
        {Experiences.map((item, index) => (
          <ExperienceCard
            direction={item.direction}
            title={item.title}
            link={item.link}
            start={item.start}
            end={item.end}
            organisation={item.organisation}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
