import React from "react";

const ContactDetailsCard = ({ name, value, icon , url}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center mb-8"
    >
      <div className="p-4 rounded-full bg-slateGrey">{icon}</div>
      <div className="px-4">
        <h3 className="text-lightGreen font-medium text-base md:text-lg">{name}</h3>
        <p className="text-gray-500 text-sm md:text-base">{value}</p>
      </div>
    </a>
  );
};

export default ContactDetailsCard;
