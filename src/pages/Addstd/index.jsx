import React, { useEffect, useState } from "react";
import Bars from "../../components/Bars";
import Inputfield from "../../components/Inputfield";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastAlert } from "../../utils/toast";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import Addstdbutton from "../../components/Addstdbutton";
import { InfinitySpin } from "react-loader-spinner";

const Addstd = () => {
  const [dropDown, setDropDown] = useState(true);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phoneNo, setPhoneNo] = useState(null);
  const [rollNo, setrollNo] = useState(0);
  const [loader, setLoader] = useState(false);
  const addnewstd = async (e) => {
    e.preventDefault();
    let temparr = [];
    const q = query(collection(db, "users"), where("type", "==", "std"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      temparr.push(doc);
    });
    setrollNo(temparr.length + 1);
  };
  useEffect(() => {
    if (rollNo == 0) {
      return;
    }
    if (!email || !password) {
      console.log("why");
      setrollNo(0);
      ToastAlert("Email or password missing", "error");
      return;
    }
    if (!name || !phoneNo) {
      ToastAlert("required fields are missing", "error");
      setrollNo(0);
      return;
    }
    setLoader(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const docsnap = await setDoc(doc(db, "users", user.uid), {
          name,
          email,
          phoneNo,
          rollNo,
          type: "std",
          uid: user.uid,
        });
        setLoader(false);
        ToastAlert("Student Added", "success");
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
        ToastAlert(error.code || error.message, "error");
        setrollNo(0);
      });
  }, [rollNo]);

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
  return (
    <div>
      <Bars onClick={() => setDropDown(!dropDown)} />
      <div className="flex mt-[8vh] gap-5 overflow-x-hidden">
        <div
          className={` bg-blue-400 ${
            !dropDown ? "-translate-x-full" : "translate-x-0"
          } transition-transform transform duration-500 flex justify-start`}
        >
          <div
            className={`px-5 flex flex-col gap-8 justify-center font-coolvertica text-7xl stroke-black w-28 break-words text-center py-[62.5px] text-white h-screen overflow-hidden bg-blue-400`}
          >
            <p className="text-wrap text-black/50">ADD</p> <p>STUDENT</p>
          </div>
        </div>
        <form
          onSubmit={addnewstd}
          className={`mt-[2vh] gap-10 flex h-min flex-col w-full transition-all transform duration-500 ${
            !dropDown
              ? "translate-x-24 max-w-[80%]"
              : " translate-x-0 max-w-[85%]"
          } `}
        >
          <div className="flex gap-10 px-20">
            <Inputfield
              type="text"
              label="Student Name"
              placeH="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Inputfield
              type="password"
              label="Password"
              placeH="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex gap-10 px-20">
            <Inputfield
              type="email"
              label="Student Email"
              placeH="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Inputfield
              type="text"
              label="Phone Number"
              placeH="PhoneNo"
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <div className={`px-20 ${loader ? "flex justify-center" : ""}`}>
            {!loader ? (
              <Addstdbutton />
            ) : (
              <InfinitySpin
                visible={true}
                width="200"
                color="#60A5FA"
                ariaLabel="infinity-spin-loading"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addstd;
