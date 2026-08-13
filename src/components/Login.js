import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    setIsSignedIn(!isSignedIn);
  };
  const onClickSignBtn = () => {
    const msg = checkValidData(
      isSignedIn,
      isSignedIn ? "" : name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMsg(msg);
    if (msg) return;

    if (!isSignedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              dispatch(
                addUser({
                  uid: user.uid,
                  email: user.email,
                  displayName: user.displayName,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMsg(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //dispatch(addUser({ uid: user.uid, email: user.email }));
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-4 w-3/12 absolute top-52 left-0 right-0 mx-auto  bg-black rounded-md bg-opacity-80"
      >
        <h1 className="font-bold text-white p-2 text-3xl ">
          {isSignedIn ? "Sign in" : "Sign up"}
        </h1>
        {!isSignedIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="bg-slate-800 my-3 p-4 border-b-slate-500 rounded-sm w-full text-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="bg-slate-800 my-3 p-4 border-b-slate-500 rounded-sm w-full text-white"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="bg-slate-800  my-3 p-4 border-b-slate-500 rounded-sm w-full text-white"
        />
        <p className="text-red-700 font-bold">{errorMsg}</p>
        <button
          onClick={onClickSignBtn}
          className="bg-red-600 my-6 p-4 cursor-pointer text-white rounded-md w-full"
        >
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
