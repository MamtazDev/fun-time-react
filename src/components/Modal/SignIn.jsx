import React, { useContext } from "react";
import logo from "../../assets/headerLogo.png";
import { AuthContext } from "../context/AuthContext";

const SignIn = ({
  showSignInModal,
  setShowSignInModal,
  setShowSignUpModal,
}) => {
  const { signIn } = useContext(AuthContext);
  const handleSignUpShow = () => {
    setShowSignInModal(false);
    setShowSignUpModal(true);
  };
  const handleSignin = () => {
    event.preventDefault();
    setShowSignInModal(false);
  };
  return (
    <>
      <input
        checked={showSignInModal}
        type="checkbox"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box max-w-[542px]">
          <div className="p-[25px] md:p-[55px]">
            <div className="flex justify-center">
              <img className="h-[200px] w-[250px]" src={logo} alt="" />
            </div>
            <div className="flex flex-wrap justify-between">
              <p className="text-[#504949] text-[18px] md:text-[25px] font-[600] text-center mb-[20px]">
                Sign In
              </p>
              <button
                onClick={() => setShowSignInModal(false)}
                className="btn btn-sm btn-circle btn-ghost text-[#FB869E]"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSignin}>
              <label className="block">
                <input
                  type="email"
                  name="email"
                  className="mt-1 px-4 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full sm:text-sm  text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                  placeholder="Email"
                />
              </label>
              <label className="block">
                <input
                  type="password"
                  name="password"
                  className="mt-1 px-3 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full  sm:text-sm text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                  placeholder="Password"
                />
              </label>
              <button
                onClick={signIn}
                className="items-center bg-[#FB869E] border-0 outline-none hover:opacity-90 rounded-[5px] px-[10px] py-[10px] text-[#FFF] text-[20px] md:text-[25px] md:font-[400] lg:font-[800] w-full"
                // type="submit"
              >
                Sign In
              </button>
            </form>
            <div className="flex justify-between items-center mt-[20px]">
              <div className="md:w-[70px] md:h-[1px] bg-[#ACACAC]"></div>
              <div>
                <button className="px-2 text-[#979797] text-[14px] font-[400]">
                  Don’t have an account?{" "}
                  <span
                    onClick={handleSignUpShow}
                    className="text-[#3F3F3F] ml-2.5 font-[500]"
                  >
                    Sign up
                  </span>
                </button>
              </div>
              <div className="md:w-[70px] md:h-[1px] bg-[#ACACAC]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
