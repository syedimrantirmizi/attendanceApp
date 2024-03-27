import React from "react";

const list = ({stdName,stdId,stdPh,stdEmail,type}) => {
  return (
    <div className="flex gap-[12vw] font-coolvertica">
      <div className="text-lg text-nowrap">Student Name</div>
      <div className="text-lg text-nowrap">Student Id</div>
      <div className="text-lg text-nowrap">Student Phone No</div>
      <div className="text-lg text-nowrap">Student Email</div>
      <div className="text-lg text-nowrap">Type</div>
      <div className="text-lg text-nowrap">Actions</div>
    </div>
  );
};

export default list;
