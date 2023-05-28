import React from 'react'
import {SiPandas, SiNumpy, SiScikitlearn, SiTensorflow,SiKeras,SiPlotly } from "react-icons/si";

const MLFrameworks = () => {
  return (
    <div
      className="flex flex-col items-start py-4 px-6 w-full rounded-lg col-span-12 lg:col-span-4"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}
    >
      <h3 className="text-white font-bold text-xl mt-2">Machine Learning/Deep Learning Tools</h3>
      <p className="text-gray-500 text-sm mt-1">
        ML/DL tools that I have experience with
      </p>
      <div className="flex items-center flex-wrap mt-8 w-fulljustify-center">
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiPandas className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Pandas</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiNumpy className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Numpy</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiKeras className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Keras</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiTensorflow className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Tensorflow</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiPlotly className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Plotly</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiScikitlearn className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Scikit Learn</p>
        </div>
      </div>
    </div>
  )
}

export default MLFrameworks