import React from "react";
import { ImSpinner9 } from "react-icons/im";

const Loader = () => {
    React.useEffect(() => {
        document.body.style.overflow = "hidden";
    } , [])
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-black opacity-70 z-50 flex items-center justify-center">
      <ImSpinner9 className="text-lightGreen text-6xl font-bold animate-spin transition duration-100" />
    </div>
  );
};

export default Loader;
