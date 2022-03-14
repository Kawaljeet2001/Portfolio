import React from "react";
import { BiErrorCircle } from "react-icons/bi";

const FormFieldError = ({ errors, fieldname }) => {
  return (
    <>
      {errors[fieldname] && (
        <p className="text-red-500 mt-2 font-sans font-medium text-sm flex items-center">
          <BiErrorCircle />
          &nbsp;{errors[fieldname].message}
        </p>
      )}
    </>
  );
};

export default FormFieldError;
