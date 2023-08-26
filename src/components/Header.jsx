import React, { useState } from "react";
import logo from "../assets/headerLogo.png";
import SignIn from "./Modal/SignIn";
import Profile from "./Modal/Profile";
import SignUp from "./Modal/SignUp";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  return (
    <header>
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center py-2">
        <Link to="/" className="flex items-center md:mb-0 mb-2">
          <img
            className="h-[132px] lg:h-[216px] w-[243px] "
            src={logo}
            alt="Logo"
          />
        </Link>

        <div className="flex flex-col md:flex-row gap-1 items-center">
          <button
            className="inline-flex items-center bg-[#FB869E] border-0 outline-none hover:opacity-90 rounded-[41px] px-[25px] py-[12px] lg:px-[35px] lg:py-[16px] text-[16px] md:text-[20px] text-[#FFF]  font-[600]"
            onClick={() => setShowSignInModal(true)}
          >
            Sign In
          </button>

          <button
            className="inline-flex items-center bg-[#FB869E] border-0 outline-none hover:opacity-90 rounded-[41px] px-[25px] py-[12px] lg:px-[35px] lg:py-[16px] text-[16px] md:text-[20px] text-[#FFF] font-[600]"
            onClick={() => setShowProfileModal(true)}
          >
            Profile
          </button>

          <button
            className="inline-flex items-center bg-transparent  hover:bg-[#FB869E] hover:text-[#FFF] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[41px] px-[25px] py-[12px] lg:px-[35px] lg:py-[16px] text-[#FB869E] text-[16px] md:text-[20px] font-[600]"
            onClick={() => setShowSignUpModal(true)}
          >
            Sign Up
          </button>
        </div>
      </div>

      <SignIn
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
        setShowSignUpModal={setShowSignUpModal}
      />
      <Profile
        showProfileModal={showProfileModal}
        setShowProfileModal={setShowProfileModal}
      />
      <SignUp
        showSignUpModal={showSignUpModal}
        setShowSignUpModal={setShowSignUpModal}
        setShowSignInModal={setShowSignInModal}
      />
    </header>
  );
};

export default Header;
