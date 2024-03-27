import React from "react";

const Loader = ({isHidden}) => {
  return (
    <div
      className={`min-h-screen h-full  justify-center items-center ${
        !isHidden ? "flex" : "hidden"
      }`}
    >
      <div
        className="inline-block h-72 w-72 animate-spin rounded-full border-[25px] border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loader;
