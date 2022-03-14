import React from "react";
import MajorProjectCard from "../Components/MajorProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./swiperstyles.css";
import SwiperCore, { Navigation } from "swiper";
import OtherProjectCard from "../Components/OtherProjectCard";
import { majorProjects } from "../MajorProjects";
import { OtherProjects } from "../OtherProjects";
import {BsArrowRight} from "react-icons/bs";
import {GITHUB_URL} from "../Constants";

SwiperCore.use([Navigation]);

const ProjectsSection = ({ reference }) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full py-24  bg-slateGrey"
      ref={reference}
    >
      <h3 className="text-white font-bold text-center text-3xl md:text-5xl ">Projects</h3>
      <p className="text-lightGreen font-medium mt-2">Most Recent Works</p>
      <div className="flex items-center w-full justify-center mt-12 px-2 md:px-10">
        <Swiper
          navigation={true}
          className="mySwiper w-full flex items-center justify-center"
        >
          {majorProjects.map((item, index) => (
            <SwiperSlide
              className="flex items-center justify-center w-full"
              key={index}
            >
              <MajorProjectCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col items-start w-full px-8 md:px-40 mt-24 py-6">
        <h3 className="text-lightGreen text-2xl font-medium text-center">
          &lt; Other Noteworthy Projects &gt;
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8">
          {OtherProjects.map((item, index) => (
            <OtherProjectCard
              name={item.name}
              description={item.description}
              link={item.link}
              key={index}
            />
          ))}
          <div
            className="rounded-lg p-4 flex flex-col items-center justify-start md:justify-center"
            style={{ height: "25vh" }}
          >
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-lightGreen text-lg font-medium px-3 py-2 rounded-md flex items-center justify-center mt-3 hover:underline transition duration-200"
            >
              All Projects&nbsp;<BsArrowRight/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
