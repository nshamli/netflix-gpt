import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const handleClick = () => {
    setIsSignedIn(!isSignedIn);
  };
  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0ce6c17e-e188-4f13-aaf2-6366e12ba739/web/IN-en-20260803-TRIFECTA-perspective_7730cca2-6324-4104-bf66-1a1f6e1a3e61_large.jpg"
          alt="background-img"
        ></img>
      </div>
      {/* <div className="p-4 w-3/12 absolute top-52 left-0 right-0 mx-auto  bg-black h-auto rounded-md"> */}
      <form className="p-4 w-3/12 absolute top-52 left-0 right-0 mx-auto  bg-black rounded-md bg-opacity-60">
        <h1 className="font-bold text-white p-2 text-2xl ">
          {isSignedIn ? "Sign in" : "Sign up"}
        </h1>
        <input
          type="text"
          placeholder="Email"
          className="bg-slate-800 my-3 p-4 border-b-slate-500 rounded-sm w-full"
        />

        <input
          type="text"
          placeholder="Password"
          className="bg-slate-800  my-3 p-4 border-b-slate-500 rounded-sm w-full"
        />

        <button className="bg-red-600 my-6 p-4 cursor-pointer text-white rounded-md w-full">
          {isSignedIn ? "Sign in" : "Sign up"}
        </button>
        <p className="text-white cursor-pointer p-2" onClick={handleClick}>
          {isSignedIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered, Sign In Now"}
        </p>
      </form>
    </div>
    // </div>
  );
};

export default Login;
