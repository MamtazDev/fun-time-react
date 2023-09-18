import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/headerLogo.png";
import SignIn from "./Modal/SignIn";
import Profile from "./Modal/Profile";
import SignUp from "./Modal/SignUp";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const Header = ({ setShowSignInModal, showSignInModal }) => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const { isSignedIn, signOut } = useContext(AuthContext);

  useEffect(() => {
    // Check if the Google Translate script has already been loaded
    if (!window.googleTranslateElementInit) {
      const script = document.createElement("script");

      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };

      // Clean up the script and window variable when the component unmounts
      return () => {
        document.body.removeChild(script);
        delete window.googleTranslateElementInit;
      };
    }
  }, []);

  return (
    <header>
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center py-6">
        <Link to="/" className="flex items-center md:mb-0 mb-2">
          <img className="h-[132px] w-[243px] " src={logo} alt="Logo" />
        </Link>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* <div id="google_translate_element"></div> */}

          {!isSignedIn && (
            <button
              className={`
            
           inline-flex items-center bg-[#FB869E] border-0 outline-none hover:opacity-90 rounded-[41px] px-[25px] py-[12px] lg:px-[35px] lg:py-[16px] text-[16px] md:text-[20px] text-[#FFF]  font-[600]`}
              onClick={() => setShowSignInModal(true)}
            >
              Sign In
            </button>
          )}
          {isSignedIn && (
            <button
              className="inline-flex items-center bg-[#FB869E] border-0 outline-none hover:opacity-90 rounded-[41px] px-[25px] py-[12px] lg:px-[35px] lg:py-[16px] text-[16px] md:text-[20px] text-[#FFF] font-[600]"
              onClick={() => setShowProfileModal(true)}
            >
              My Profile
            </button>
          )}

          {!isSignedIn && (
            <button
              className={` inline-flex items-center bg-transparent  hover:bg-[#FB869E] hover:text-[#FFF] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[41px] px-[25px] py-[12px] lg:px-[35px] lg:py-[16px] text-[#FB869E] text-[16px] md:text-[20px] font-[600]`}
              onClick={() => setShowSignUpModal(true)}
            >
              Sign Up
            </button>
          )}
          {isSignedIn && (
            <button
              onClick={signOut}
              className=" inline-flex items-center bg-transparent  hover:bg-[#FB869E] hover:text-[#FFF] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[41px] px-[25px] py-[12px] lg:px-[35px] lg:py-[16px] text-[#FB869E] text-[16px] md:text-[20px] font-[600]"
            >
              Sign Out
            </button>
          )}
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
