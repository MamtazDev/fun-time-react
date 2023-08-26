import React from "react";
import funtime from "../../assets/funTime.png";

const SignUp = ({
  showSignUpModal,
  setShowSignUpModal,
  setShowSignInModal,
}) => {
  const handleSignInShow = () => {
    setShowSignUpModal(false);
    setShowSignInModal(true);
  };
  return (
    <>
      <input
        checked={showSignUpModal}
        type="checkbox"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box max-w-[1042px] p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="leftBg px-[25px] py-[100px] flex items-center">
              <img className="w-full" src={funtime} alt="Fun Time" />
            </div>
            <div className="px-[47px] py-[55px]">
              <div className="flex flex-wrap justify-between">
                <p className="text-[#504949] text-[18px] lg:font-[25px] font-[600] text-center mb-[20px]">
                  Sign Up
                </p>
                <button
                  onClick={() => setShowSignUpModal(false)}
                  className="signUpCross btn btn-sm btn-circle btn-ghost  text-[#FB869E]"
                >
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
                    <span onClick={handleSignInShow} className="text-[#3F3F3F] font-[500] ml-2.5">
                      Sign in
                    </span>
                  </button>
                </div>
                <div className="md:w-[58px] md:h-[1px] bg-[#ACACAC]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
