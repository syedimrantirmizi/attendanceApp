import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bars from "../../components/Bars";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Tablerow from "../../components/Tablerow";
import { InfinitySpin } from "react-loader-spinner";
import { ToastAlert } from "../../utils/toast";

const Dashboard = () => {
  const [dropDown, setDropDown] = useState(true);
  const [stdlist, setStdlist] = useState(null);

  const fetchData = async () => {
    const docSnap = await getDocs(collection(db, "users"));
    const tempArr = [];
    docSnap.forEach((user) => {
      tempArr.push({ ...user.data(), id: user.id });
    });

    setStdlist(tempArr);
  };
  const cursorEvent = (e) => {
    if (e.target.localName == "img") {
      return;
    }
    setDropDown(true);
    if (dropDown) {
      window.addEventListener("click", cursorEvent);
    } else {
      setDropDown(true);
      window.removeEventListener("click", cursorEvent);
    }
  };
  useEffect(() => {
    if (dropDown) {
      window.addEventListener("click", cursorEvent);
    } else {
      window.removeEventListener("click", cursorEvent);
    }
  }, [dropDown, setDropDown]);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Bars onClick={() => setDropDown(!dropDown)} />
      <div className="flex mt-[8vh] gap-5 overflow-x-hidden">
        <div
          className={` bg-blue-400 ${
            !dropDown ? "-translate-x-full" : "translate-x-0"
          } transition-transform transform duration-500 flex justify-start`}
        >
          <div className="px-5 flex flex-col justify-center font-coolvertica text-7xl stroke-black w-28 break-words text-center py-[114.5px] text-white h-full bg-blue-400">
            <p className="text-wrap">DASHBOARD</p>
          </div>
        </div>
        {!stdlist ? (
          <div className="w-full flex justify-center">
            <InfinitySpin
              visible={true}
              width="300"
              color="#60A5FA"
              ariaLabel="infinity-spin-loading"
            />
          </div>
        ) : (
          <div className="flex justify-start mt-[1vh]">
            <div
              className={` py-12 ${
                !dropDown
                  ? "translate-x-32 px-20 max-w-[83%]"
                  : "translate-x-0 px-10 max-w-[90%]"
              } transition-all gap-10 transform duration-500 flex flex-col bg-gray-200 w-screen h-min rounded-3xl shadow-md shadow-gray-300`}
            >
              <Tablerow
                key={"main"}
                name={"Student Name"}
                id={"Student Id"}
                phoneNo={"Student Phone No"}
                email={"Student Email"}
              />
              {stdlist?.map((value, index) => {
                if (value.type == "admin") {
                  return;
                }
                return (
                  <>
                    <Tablerow
                      key={index}
                      name={value.name}
                      id={value.rollNo}
                      phoneNo={value.phoneNo}
                      email={value.email}
                    />
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
