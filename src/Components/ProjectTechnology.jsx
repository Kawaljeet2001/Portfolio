import React from "react";

const ProjectTechnology = ({name}) => {
  return (
    <div className="bg-slateGrey px-3 mr-3 mt-3 py-1.5 border border-gray-600 text-lightGreen text-opacity-80 rounded-sm" style={{fontSize : "12px"}}>
      {name}
    </div>
  );
};

export default ProjectTechnology;
