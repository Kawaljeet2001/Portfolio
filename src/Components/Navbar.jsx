import React, { useState, useEffect } from "react";
import {
  AiFillGithub,
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { GITHUB_URL, LINKEDIN_URL, EMAIL_URL } from "../Constants";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { RiContactsBookLine } from "react-icons/ri";

const Navbar = ({
  homeSectionRef,
  aboutSectionRef,
  experienceSectionRef,
  projectsSectionRef,
  contactSectionRef,
  skillsSectionRef,
}) => {
  const [NavbarShadow, setNavbarShadow] = useState();
  const [changeColor, setChangeColor] = useState("Home");
  const [responsiveNavbar, setResponsiveNavbar] = React.useState("0px");
  const [activeState, setActiveState] = React.useState("");

  const navbarRef = React.useRef(null);

  const buttonData = [
    {
      name: "Home",
      divid: "aboutsection",
      ref: homeSectionRef,
      icon: <AiOutlineHome className="text-3xl" />,
    },
    {
      name: "About",
      divid: "aboutsection",
      ref: aboutSectionRef,
      icon: <AiOutlineUser className="text-3xl" />,
    },
    {
      name: "Skills",
      divid: "aboutsection",
      ref: skillsSectionRef,
      icon: <AiOutlineSetting className="text-3xl" />,
    },
    {
      name: "Experience",
      divid: "experiencesection",
      ref: experienceSectionRef,
      icon: <RiContactsBookLine className="text-3xl" />,
    },
    {
      name: "Projects",
      divid: "projects",
      ref: projectsSectionRef,
      icon: <BsFillFileEarmarkBarGraphFill className="text-3xl" />,
    },
    {
      name: "Contact Me",
      divid: "contactsection",
      ref: contactSectionRef,
      icon: <RiContactsBookLine className="text-3xl" />,
    },
  ];

  const scrollToSection = (ref) => {
    setNavbarShadow(1);
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const executeScroll = (reference) => {
    scrollToSection(reference);
  };
  const changeSection = (e) => {
    // setActiveSection(e);
  };

  function handleAutomaticSectionChange() {
    if (
      window.scrollY + 20 > aboutSectionRef.current.offsetTop &&
      window.scrollY + 20 < skillsSectionRef.current.offsetTop
    )
      setChangeColor("About");
    else if (
      window.scrollY + 20 > skillsSectionRef.current.offsetTop &&
      window.scrollY + 20 < experienceSectionRef.current.offsetTop
    )
      setChangeColor("Skills");
    else if (
      window.scrollY + 20 > experienceSectionRef.current.offsetTop &&
      window.scrollY + 20 < projectsSectionRef.current.offsetTop
    )
      setChangeColor("Experience");
    else if (
      window.scrollY + 20 > projectsSectionRef.current.offsetTop &&
      window.scrollY + 20 < contactSectionRef.current.offsetTop
    )
      setChangeColor("Projects");
    else if (window.scrollY + 20 > contactSectionRef.current.offsetTop)
      setChangeColor("Contact Me");
    else setChangeColor("Home");
  }
  useEffect(() => {
    const handleScroll = () => {
      setNavbarShadow(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);

  window.addEventListener("scroll", handleAutomaticSectionChange);

  function toggleAccordion() {
    console.log("clicked");
    setActiveState(activeState === "" ? "active" : "");
    setResponsiveNavbar(
      activeState === "active" ? "0px" : `${navbarRef.current.scrollHeight}px`
    );
  }

  return (
    <div
      className={`font-sans fixed transition duration-300 top-0 text-white bg-slateGrey md:bg-slateGrey z-30 w-full ${
        NavbarShadow !== 0
          ? "md:shadow-navbar"
          : "py-8 drop-shadow-none"
      } px-36`}
    >
      <div className="hidden md:flex items-center justify-center md:justify-start transition duration-100 ease-linear w-full">
        <a
          href="/"
          className="flex text-white md:text-lightGreen font-medium text-lg w-4/12 md:w-3/12 cursor-pointer font-sans"
        >
          Kawaljeet{" "}
          <span className="text-white opacity-90 block">
            &nbsp;Singh Batra
          </span>
        </a>
        <div className="hidden md:flex items-center font-mono float-right top-0 w-7/12">
          {buttonData.map((item, index) => (
            <button
              className={` ${
                changeColor === item.name ? "text-lightGreen" : "text-grey"
              } flex items-center justify-center font-bold text-sm mx-5 hover:text-lightGreen transition duration-300`}
              key={index}
              // data-aos="fade"
              // data-aos-once="false"
              // data-aos-duration="1000"
              onClick={() => {
                changeSection(item.name);
                executeScroll(item.ref);
              }}
            >
              {changeColor === item.name && "< "} {item.name}{" "}
              {changeColor === item.name && " >"}
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center py-2 md:py-2 md:justify-end w-6/12 md:w-3/12 font-mono">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="block p-2 md:p-4 rounded-full ml-4 cursor-pointer hover:bg-lightGreen hover:text-slateGrey"
            style={{ background: "#333438" }}
          >
            <AiFillGithub className="text-lightGreen font-medium text-lg" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="block p-2 md:p-4 rounded-full ml-4 cursor-pointer hover:bg-lightGreen hover:text-slateGrey"
            style={{ background: "#333438" }}
          >
            <FaLinkedinIn className="text-lightGreen font-medium text-lg" />
          </a>
          <a
            href={EMAIL_URL}
            target="_blank"
            rel="noreferrer"
            className="block p-2 md:p-4 rounded-full ml-4 cursor-pointer hover:bg-lightGreen hover:text-slateGrey"
            style={{ background: "#333438" }}
          >
            <GoMail className="text-lightGreen font-medium text-lg" />
          </a>
          <button
            className="md:hidden block text-white"
            onClick={toggleAccordion}
          >
            <MdKeyboardArrowUp
              className={`text-2xl ml-8 transition duration-300 ${
                activeState === "active" ? "transform rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
   
    </div>
  );
};

export default Navbar;
