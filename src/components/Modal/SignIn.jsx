import React, { useContext, useState } from "react";
import logo from "../../assets/headerLogo.png";
import { AuthContext } from "../context/AuthContext";

const SignIn = ({
  showSignInModal,
  setShowSignInModal,
  setShowSignUpModal,
}) => {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)


  const handleSignUpShow = () => {
    setShowSignInModal(false);
    setShowSignUpModal(true);
  };

  const loginData = {
    email: email,
    password: password
  };
  
  // Define the URL for the login endpoint
  const loginUrl = 'http://localhost:8000/api/users/login';
  
  // Define the headers for the request
  const headers = {
    'Content-Type': 'application/json',
  };



  const handleSignin = () => {
    event.preventDefault();

    console.log(email, password)


          
      // Create the POST request
      fetch(loginUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(loginData) // Convert the login data to a JSON string
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the JSON response from the server
        })
        .then(data => {
          // Handle the login success here
          console.log('Login successful:', data);
          setShowSignInModal(false);
          localStorage.setItem("token", data.accessTOken)
        })
        .catch(error => {
          // Handle errors here, e.g., authentication failure or network issues
          console.error('Login failed:', error);
        });




   
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
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="block">
                <input
                  type="password"
                  name="password"
                  className="mt-1 px-3 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full  sm:text-sm text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
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
