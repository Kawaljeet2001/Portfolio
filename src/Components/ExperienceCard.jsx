import React from "react";
import { BiCalendar } from "react-icons/bi";

const ExperienceCard = ({
  direction,
  title,
  link,
  start,
  end,
  organisation,
}) => {
  return (
    <div
      className={`w-11/12 md:w-6/12 flex ${
        direction === "right" ? "flex-row-reverse" : "flex-row"
      } items-center justify-center`}
    >
      <div className="w-6/12"></div>
      <div
        className={`
        relative flex items-start justify-center w-6/12 px-4`}
        style={{ height: "17vh" }}
      >
        <div
          className={`w-4 h-4 top-0 ${
            direction === "right" ? "-right-2" : "-left-2"
          } absolute bg-lightGreen rounded-full`}
        ></div>
        <div
          className={`absolute top-0 bg-lightGreen ${
            direction === "right" ? "-right-0.5" : "-left-0"
          } w-0.5 h-full`}
        ></div>
        <div className="flex flex-col items-start h-full justify-start">
          <h2 className="font-bold text-gray-300">{title}</h2>
          <a
            target="_blank"
            rel="noreferrer"
            href={link}
            className="text-lightGreen text-sm underline hover:text-white"
          >
            {organisation}
          </a>
          <p className="mt-3 text-gray-500 text-sm flex justify-start md:items-center">
            <BiCalendar className="hidden md:block" />
            &nbsp;{start} - {end}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
