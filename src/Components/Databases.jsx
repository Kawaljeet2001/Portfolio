import React from "react";
import { DiMongodb, DiMysql } from "react-icons/di";
import { SiPostgresql, SiRedis } from "react-icons/si";

const Databases = () => {
  return (
    <div
      className="flex flex-col items-start py-4 px-6 w-full rounded-lg col-span-12 lg:col-span-4"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}
    >
      <h3 className="text-white font-bold text-xl mt-2">Databases</h3>
      <p className="text-gray-500 text-sm mt-1">
        Databases that I have practiced and have hands-on experience with
      </p>
      <div className="flex items-center flex-wrap mt-8 w-fulljustify-center">
        <div className="flex flex-col items-center mx-3 my-4">
          <DiMysql className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">MySQL</p>
        </div>
        <div className="flex flex-col items-center mx-3 my-4">
          <SiPostgresql className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center mx-3 my-4">
          <SiRedis className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Redis</p>
        </div>
        <div className="flex flex-col items-center mx-3 my-4">
          <DiMongodb className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Mongo DB</p>
        </div>
      </div>
    </div>
  );
};

export default Databases;
