import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = ({ isHidden }) => {
  return (
    <div
      className={`min-h-screen h-full  justify-center items-center ${
        !isHidden ? "flex" : "hidden"
      }`}
    >
      <InfinitySpin
        visible={true}
        
      
        color="#60A5FA"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
