import React from "react";
import { AiFillGithub } from "react-icons/ai";

const OtherProjectCard = ({ name, description, link }) => {
  return (
    <div
      className="rounded-lg bg-darkGrey p-4 flex flex-col justify-between items-start"
      style={{ height: "25vh" }}
    >
      <div>
        <h3 className="text-gray-300 font-bold">{name}</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="bg-white text-darkGrey px-3 py-2 rounded-md  flex items-center justify-center mt-3 hover:bg-lightGreen font-bold"
      >
        <AiFillGithub className="mr-1.5" />Github Repo
      </a>
    </div>
  );
};

export default OtherProjectCard;
