import { ArrowUpward } from "@mui/icons-material";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
  const handleUserPopup = () => {};
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <>
      <div className="top-0 left-0 w-full absolute z-10 bg-gradient-to-b from-black flex  justify-between">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="w-40 ml-4"
        />
        {user && (
          <div className="m-2">
            <button
              onClick={() => {
                setIsUserProfileOpen(!isUserProfileOpen);
              }}
              className="flex"
            >
              <img
                className="w-10 rounded-sm"
                src="https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABWdoQDrgD7cokEYrF-FVdgfoil5wiBMg6j3GeUjYY_av6C64opFSXOsJ5U8EF02G6SB6b4zUw4MSG6EtpQu8gUBg1Y5Bgs4.png?r=229"
                alt="Sign out"
              />

              <span>
                {isUserProfileOpen ? (
                  <ArrowDropUpIcon />
                ) : (
                  <ArrowDropDownIcon />
                )}
              </span>
            </button>
          </div>
        )}
      </div>
      {isUserProfileOpen && (
        <div className="bg-slate-900 w-44 rounded-md absolute top-14  z-10 right-4">
          <button className="text-white p-2" onClick={handleSignOut}>
            Sign out of Netflix
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
