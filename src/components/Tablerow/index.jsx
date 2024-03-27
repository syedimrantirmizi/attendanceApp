import React from "react";

const Tablerow = ({ name, id, phoneNo, email }) => {
  const color = name == "Student Name" ? null : "text-gray-600"
  return (
    <div className={`flex justify-between font-coolvertica w-full ${name == "Student Name" ? "border-b-2 border-black" : null}`}>
      <div className={`text-lg text-nowrap w-full text-center ${color}`}>{name}</div>
      <div className={`text-lg text-nowrap w-full text-center ${color}`}>{id}</div>
      <div className={`text-lg text-nowrap w-full text-center ${color}`}>{phoneNo}</div>
      <div className={`text-lg text-nowrap w-full text-center ${color}`}>{email}</div>
      <div className={`text-lg text-nowrap w-full text-center ${color}`}>Actions</div>
    </div>
  );
};

export default Tablerow;
