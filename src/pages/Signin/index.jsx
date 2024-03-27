import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { ToastAlert } from "../../utils/toast";

const Signin = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isHidden, setIsHidden] = useState(true);
  const navigate = useNavigate();
  const Signin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        setIsHidden(false);
        const user = userCredential.user;
        localStorage.setItem("uid", user.uid);
        const userData = (await getDoc(doc(db, "users", user.uid))).data();
        localStorage.setItem("data", JSON.stringify(userData));
        if (userData.type == "admin") {
          ToastAlert("Welcome Back", "success");
          navigate("/dashboard");
        } else {
          ToastAlert("Welcome Back", "success");
          navigate("/portal");
        }
      })
      .catch((error) => {
        ToastAlert(error.code || error.message, "error");
        console.log(error);
      });
  };
  return (
    <>
      <Loader isHidden={isHidden} />
      <div className="flex justify-around items-center h-full min-h-screen max-md:w-[100%]">
        <div className="flex justify-center items-center min-w-xl max-md:flex-col p-10 rounded-lg border-2 gap-5 shadow-sm shadow-gray-00 ">
          <div className="flex flex-col items-center">
            <img
              src="/Mobile-login.svg"
              className="max-md:w-[300px] md:w-[350px] lg:w-[600px]"
              alt="peoplelogin"
            />
          </div>
          <form className="gap-10 flex flex-col w-[400px]" onSubmit={Signin}>
            <p className="text-2xl font-coolvertica text-gray-400 ">
              Welcome Back!
            </p>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              className="p-5 rounded-lg outline-none hover:shadow-md focus:shadow-md hover:shadow-blue-600 transition-all duration-200 font-coolvertica text-gray-500 focus:shadow-blue-600 border"
              placeholder="Email Address"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="p-5 rounded-lg outline-none hover:shadow-md focus:shadow-md hover:shadow-blue-600 border transition-all duration-200 font-coolvertica text-gray-500 focus:shadow-blue-600"
              placeholder="Password"
            />
            <button
              type="submit"
              className="bg-blue-400 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 font-coolvertica hover:shadow-md hover:shadow-blue-600 hover:scale-105"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
