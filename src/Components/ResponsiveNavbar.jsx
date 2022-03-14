import React from "react";
import { AiOutlineHome, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { RiContactsBookLine } from "react-icons/ri";
import { RESPONSIVE_NAVBAR_SOCIAL_ICONS } from "../SocialMedia";

const ResponsiveNavbar = ({
  homeSectionRef,
  aboutSectionRef,
  experienceSectionRef,
  projectsSectionRef,
  contactSectionRef,
  skillsSectionRef,
}) => {
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
  const [changeSectionTitleColor, setchangeSectionTitleColor] =
    React.useState("Home");
  const [responsiveNavbar, setResponsiveNavbar] = React.useState("0px");
  const [activeState, setActiveState] = React.useState("");

  const executeScroll = (reference) => {
    window.scrollTo({
      top: reference.current.offsetTop,
      behavior: "smooth",
    });
  };
  const toggleAccordion = () => {
    setActiveState(activeState === "" ? "active" : "");
    setResponsiveNavbar(
      activeState === "active" ? "0px" : `${navbarRef.current.scrollHeight}px`
    );
  };
  function handleAutomaticSectionChange() {
    if (
      window.scrollY + 20 > aboutSectionRef.current.offsetTop &&
      window.scrollY + 20 < skillsSectionRef.current.offsetTop
    )
      setchangeSectionTitleColor("About");
    else if (
      window.scrollY + 20 > skillsSectionRef.current.offsetTop &&
      window.scrollY + 20 < experienceSectionRef.current.offsetTop
    )
      setchangeSectionTitleColor("Skills");
    else if (
      window.scrollY + 20 > experienceSectionRef.current.offsetTop &&
      window.scrollY + 20 < projectsSectionRef.current.offsetTop
    )
      setchangeSectionTitleColor("Experience");
    else if (
      window.scrollY + 20 > projectsSectionRef.current.offsetTop &&
      window.scrollY + 20 < contactSectionRef.current.offsetTop
    )
      setchangeSectionTitleColor("Projects");
    else if (window.scrollY + 20 > contactSectionRef.current.offsetTop)
      setchangeSectionTitleColor("Contact Me");
    else setchangeSectionTitleColor("Home");
  }
  window.addEventListener("scroll", handleAutomaticSectionChange);
  return (
    <div
      className={`font-sans fixed md:hidden bottom-0 rounded-t-2xl pb-4 shadow-navbar transition duration-300 text-white bg-slateGrey z-30 w-full px-2 `}
    >
      <div className="flex items-center justify-center">
        <a
          href="/"
          className="flex text-white md:text-lightGreen font-medium text-lg w-4/12 md:w-3/12 cursor-pointer font-sans"
        >
          Kawaljeet
        </a>
        <div className="flex items-center py-2 md:py-2 md:justify-end w-6/12 md:w-3/12 font-mono">
          {RESPONSIVE_NAVBAR_SOCIAL_ICONS.map((item, index) => (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="block p-2 md:p-4 rounded-full ml-4 cursor-pointer hover:bg-lightGreen hover:text-slateGrey"
              style={{ background: "#333438" }}
              key={index}
            >
              {item.icon}
            </a>
          ))}
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
      <div
        className="w-full overflow-hidden bg-slateGrey grid grid-cols-3 gap-y-4 md:hidden items-center flex-wrap transition duration-300"
        ref={navbarRef}
        style={{
          maxHeight: `${responsiveNavbar}`,
          transition: "max-height 0.6s ease",
        }}
      >
        {buttonData.map((item, index) => (
          <button
            className={` ${
              changeSectionTitleColor === item.name
                ? "text-lightGreen"
                : "text-grey"
            }  font-medium md:font-bold text-sm flex flex-col items-center mx-5 my-2 hover:text-lightGreen transition duration-300`}
            key={index}
            onClick={() => {
              executeScroll(item.ref);
            }}
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
