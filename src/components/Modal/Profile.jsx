import React from "react";

const Profile = ({ showProfileModal, setShowProfileModal }) => {
  return (
    <>
      <input
        checked={showProfileModal}
        type="checkbox"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box max-w-[542px]">
          <div className="p-[25px] md:p-[55px] max-w-[300px] mx-auto">
            <div className="flex flex-wrap justify-between">
              <p className="text-[#504949] text-[18px] md:text-[25px] font-[600] text-center mb-[20px]">
                {/* My Profile */}
                Admin Profile
              </p>
              <button onClick={()=>setShowProfileModal(false)} className="btn btn-sm btn-circle btn-ghost text-[#FB869E]">
            
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
        </div>
      </div>
    </>
  );
};

export default Profile;
