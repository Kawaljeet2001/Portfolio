import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaArtstation } from "react-icons/fa";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  ARTSTATIONURL,
  INSTAGRAM_URL,
} from "../Constants";
const Footer = () => {
  return (
    <div
      className="w-full p-4 flex flex-col md:flex-row items-center md:justify-between bg-darkGrey px-6 md:px-36"
      style={{ height: "16vh" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-start w-full ">
        <a
          href="/"
          className="text-lightGreen font-medium text-base md:text-lg cursor-pointer font-sans"
        >
          Kawaljeet <span className="text-white opacity-90">Singh Batra</span>
        </a>
        <p className="md:ml-10 text-sm text-gray-500 text-center">
          © Kawaljeet Singh Batra. All Rights Reserved
        </p>
      </div>
      <div className="flex items-center mt-7 md:mt-0">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="block mx-4 cursor-pointer hover:bg-lightGreen hover:text-slateGrey"
          style={{ background: "#333438" }}
        >
          <AiFillGithub className="text-white hover:text-lightGreen font-medium text-lg" />
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="block mx-4 cursor-pointer hover:bg-lightGreen hover:text-slateGrey"
          style={{ background: "#333438" }}
        >
          <FaLinkedinIn className="text-white hover:text-lightGreen font-medium text-lg" />
        </a>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="block mx-4 cursor-pointer hover:bg-lightGreen hover:text-slateGrey"
          style={{ background: "#333438" }}
        >
          <AiFillInstagram className="text-white hover:text-lightGreen font-medium text-lg" />
        </a>

        <a
          href={ARTSTATIONURL}
          target="_blank"
          rel="noreferrer"
          className="block mx-4 cursor-pointer hover:bg-lightGreen hover:text-slateGrey"
          style={{ background: "#333438" }}
        >
          <FaArtstation className="text-white hover:text-lightGreen font-medium text-lg" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
