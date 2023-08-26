import React, { useState } from "react";
import logo from "../assets/headerLogo.png";
import SignIn from "./Modal/SignIn";
import Profile from "./Modal/Profile";

const Header = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  return (
    <header>
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center py-2">
        <a className="flex items-center md:mb-0">
          <img
            className="h-[216px] w-[243px] object-cover"
            src={logo}
            alt="Logo"
          />
        </a>

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
          {/* <!-- Profile Modal Start --> */}
          <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box max-w-[542px]">
              <div className="p-[55px] max-w-[300px] mx-auto">
                <div className="flex flex-wrap justify-between">
                  <p className="text-[#504949] text-[18px] md:text-[25px] font-[600] text-center mb-[20px]">
                    My Profile
                  </p>
                  <button className="btn btn-sm btn-circle btn-ghost text-[#FB869E]">
                    ✕
                  </button>
                </div>
                <form action="">
                  <label className="block">
                    <input
                      type="text"
                      name="Name"
                      className="mt-1 px-4 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full sm:text-sm  text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                      placeholder="John"
                    />
                  </label>
                  <label className="block">
                    <input
                      type="text"
                      name="Name"
                      className="mt-1 px-4 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full sm:text-sm  text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                      placeholder="Apple"
                    />
                  </label>
                  <label className="block">
                    <input
                      type="email"
                      name="email"
                      className="mt-1 px-4 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full sm:text-sm  text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                      placeholder="myemail@gmail.com"
                    />
                  </label>
                  <label className="block">
                    <input
                      type="text"
                      name="phone"
                      className="mt-1 px-4 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full sm:text-sm  text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                      placeholder="18004167878 "
                    />
                  </label>
                  <label className="block">
                    <input
                      type="password"
                      name="password"
                      className="mt-1 px-3 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full  sm:text-sm text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                      placeholder="New Password"
                    />
                  </label>
                  <button
                    className="items-center bg-[#FB869E] border-0 outline-none hover:opacity-90 rounded-[5px] px-[10px] py-[10px] text-[#FFF] text-[20px] md:text-[25px] font-[400] lg:font-[800] w-full"
                    type="submit"
                  >
                    Update
                  </button>
                </form>
              </div>
            </form>
          </dialog>
          {/* <!-- Profile Modal End --> */}

          <button
            className="inline-flex items-center bg-transparent  hover:bg-[#FB869E] hover:text-[#FFF] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[41px] px-[25px] py-[12px] lg:px-[35px] lg:py-[16px] text-[#FB869E] text-[16px] md:text-[20px] font-[600]"
            // onclick="my_modal_signup.showModal()"
          >
            Sign Up
          </button>
          {/* <!--Sign Up  Modal Start --> */}
          <dialog id="my_modal_signup" className="modal">
            <form method="dialog" className="modal-box max-w-[1042px] p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="leftBg px-[25px] py-[100px] flex items-center">
                  <img
                    className="w-full"
                    src="./assets/images/funTime.png"
                    alt="Fun Time"
                  />
                </div>
                <div className="px-[47px] py-[55px]">
                  <div className="flex flex-wrap justify-between">
                    <p className="text-[#504949] text-[18px] lg:font-[25px] font-[600] text-center mb-[20px]">
                      Sign Up
                    </p>
                    <button className="signUpCross btn btn-sm btn-circle btn-ghost  text-[#FB869E]">
                      ✕
                    </button>
                  </div>
                  <form action="">
                    <div className="signup grid grid-cols-1 md:grid-cols-2 items-center w-full gap-2">
                      <label className="block">
                        <input
                          type="text"
                          name="firstName"
                          className="w-full  px-4 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block sm:text-sm  text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                          placeholder="First Name"
                        />
                      </label>
                      <label className="block">
                        <input
                          type="text"
                          name="lastName"
                          className="w-full px-4 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block sm:text-sm  text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                          placeholder="Last Name"
                        />
                      </label>
                    </div>
                    <label className="block">
                      <input
                        type="text"
                        name="phone"
                        className="px-4 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full sm:text-sm  text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                        placeholder="Phone Number"
                      />
                    </label>
                    <label className="block">
                      <input
                        type="email"
                        name="email"
                        className="px-4 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full sm:text-sm  text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                        placeholder="Email"
                      />
                    </label>
                    <label className="block">
                      <input
                        type="password"
                        name="password"
                        className="px-3 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full  sm:text-sm text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                        placeholder="Password"
                      />
                    </label>
                    <button
                      className="items-center bg-[#FB869E] border-0 outline-none hover:opacity-90 rounded-[5px] px-[10px] py-[10px] text-[#FFF] text-[20px] md:text-[25px] font-[400] lg:font-[800]  w-full"
                      type="submit"
                    >
                      Create account
                    </button>
                  </form>
                  <div className="flex justify-between items-center mt-[20px]">
                    <div className="md:w-[58px] md:h-[1px] bg-[#ACACAC]"></div>
                    <div>
                      <button className="px-2 text-[#979797] text-[14px] font-[400]">
                        Already have an account?{" "}
                        <span
                          className="text-[#3F3F3F] font-[500] ml-2.5"
                          //   onclick="my_modal_signin.showModal()"
                        >
                          Sign in
                        </span>
                      </button>
                    </div>
                    <div className="md:w-[58px] md:h-[1px] bg-[#ACACAC]"></div>
                  </div>
                </div>
              </div>
            </form>
          </dialog>
          {/* <!-- Sign Up Modal End --> */}
        </div>
      </div>

      <SignIn
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
      <Profile
        showProfileModal={showProfileModal}
        setShowProfileModal={setShowProfileModal}
      />
    </header>
  );
};

export default Header;
