import React, { useEffect, useState } from "react";
import Bars from "../../components/Bars";

const Attendance = () => {
  const [dropDown, setDropDown] = useState(true);
  const cursorEvent = (e) => {
    if (e.target.localName == "img"){
      return
    } 
    setDropDown(true)
    if (dropDown) {
      window.addEventListener("click", cursorEvent);
    } else {
      setDropDown(true)
      window.removeEventListener("click", cursorEvent);
    }
  };
  useEffect(
    () => {
      if (dropDown) {
        window.addEventListener("click", cursorEvent);
      } else {
        window.removeEventListener("click", cursorEvent);
      }
    },
    [dropDown, setDropDown]
  );
  return (
    <div>
      <Bars onClick={() => setDropDown(!dropDown)} />
      <div
        className={`h-screen mt-[9vh] bg-white ${
          !dropDown ? "-translate-x-full" : "translate-x-0"
        } transition-transform transform duration-500 flex justify-start`}
      >
        <div className="px-5 font-coolvertica text-7xl stroke-black text-white h-fit py-5 bg-blue-400">
          Attendance
        </div>
      </div>
    </div>
  );
};

export default Attendance;
