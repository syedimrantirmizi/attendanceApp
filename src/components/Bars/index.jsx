import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Bars = ({ onClick }) => {
  const [transform, setTransform] = useState(true);
  const navigate = useNavigate();
  const cursorEvent = (e) => {
    if (e.target.localName == "img"){
      return
    } 
    setTransform(true)
    if (transform) {
      window.addEventListener("click", cursorEvent);
    } else {
      setTransform(true)
      window.removeEventListener("click", cursorEvent);
    }
  };
  useEffect(
    () => {
      if (transform) {
        window.addEventListener("click", cursorEvent);
      } else {
        window.removeEventListener("click", cursorEvent);
      }
    },
    [transform, setTransform]
  );

  return (
    <>
      <nav className="fixed top-0 z-50 w-full h-[8vh]">
        <div className="h-[8vh] flex items-center justify-between px-10 border-b-2 bg-white">
          <p
            className="font-coolvertica text-xl flex items-center gap-3 select-none cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <img
              src="/school.svg"
              className="w-11 p-1 rounded-full border-blue-400 border"
              alt=""
            />
            Attendance App
          </p>
          <button
            onClick={(e) => {
              setTransform(!transform);
            }}
          >
            <img
              onClick={onClick}
              src="/threelines.svg"
              alt=""
              className="max-w-6 w-full"
            />
          </button>
        </div>
        <div
          className={`${
            transform ? "-translate-x-full" : ""
          } transition-transform transform duration-500 w-56 h-screen bg-blue-400 border-r shadow-md ${
            transform ? "" : "shadow-blue-400"
          } border-gray-400 py-5 px-3 flex flex-col font-coolvertica text-white gap-3`}
        >
          <div
            onClick={() => navigate("/dashboard")}
            className="h-[7vh] bg-blue-400 hover:bg-blue-600 transition-colors duration-300 flex px-8 text-lg items-center select-none cursor-pointer rounded-lg"
          >
            Dashboard
          </div>
          <div
            onClick={() => navigate("/attendance")}
            className="h-[7vh] bg-blue-400 hover:bg-blue-600 transition-colors duration-300 flex px-8 text-lg items-center select-none cursor-pointer rounded-lg"
          >
            Attendance
          </div>
          <div
            onClick={() => navigate("/addstd")}
            className="h-[7vh] bg-blue-400 hover:bg-blue-600 transition-colors duration-300 flex px-8 text-lg items-center select-none cursor-pointer rounded-lg"
          >
            Add Student
          </div>
          <div
            onClick={() => {
              localStorage.removeItem("uid");
              localStorage.removeItem("data");
              navigate("/");
            }}
            className="h-[7vh] bg-blue-400 hover:bg-blue-600 transition-colors duration-300 flex px-8 text-lg items-center select-none cursor-pointer rounded-lg"
          >
            Log out
          </div>
        </div>
      </nav>
    </>
  );
};

export default Bars;
