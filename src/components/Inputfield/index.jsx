import React from "react";

const Inputfield = ({type, label,placeH,onChange}) => {
  return (
    <div className="w-1/2 flex-col flex gap-5">
      <p className="text-black font-coolvertica text-xl">{label}</p>
      <input
        type={`${type}`} placeholder={`${placeH}`} onChange={onChange}
        className={`bg-blue-400 w-full text-white hocus:outline-1 hocus:outline hocus:outline-gray-400 hocus:scale-105 hocus:bg-white hocus:text-black cursor-pointer focus:outline focus:outline-gray-400 transition transition-color duration-300 px-5 py-6 rounded-lg text-base font-coolvertica placeholder:text-white hover:placeholder:text-black placeholder:focus:text-white`}
      />
    </div>
  );
};

export default Inputfield;
