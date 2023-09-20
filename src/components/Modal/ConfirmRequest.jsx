import React, { useContext, useEffect } from "react";
import details from "../../assets/profile_details.png";
import { AuthContext } from "../context/AuthContext";
import { sendRequest, sendSms } from "../../api/bookings";
import { useNavigate } from "react-router-dom";

const ConfirmRequest = ({ showConfirmRequest, setShowConfirmRequrst }) => {
  const { requestCompanion, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const userPlace = form.place.value;
    const roomNumber = form.room.value;
    const specialRequests = form.specialRequest.value;
    const userData = {
      userName,
      userEmail,
      userPlace,
      roomNumber,
      specialRequests,
    };
    // console.log(data);

    const resData = await sendRequest({
      data: userData,
      id: requestCompanion?._id,
    });
    if (resData.status === 200) {
      const data = {
        userNumber: user?.phone,
        companionNumber: requestCompanion?.phone,
      };
      const resSmsData = await sendSms(data);
      // console.log(resSmsData, "gg");

      // if (resSmsData) {
      // }
    }
  };

  // useEffect(() => {}, [showConfirmRequest]);
  return (
    <>
      <input
        checked={showConfirmRequest}
        type="checkbox"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box max-w-[843px]">
          <div className="p-[25] md:px-[55px] md:py-[25px]">
            <button
              onClick={() => setShowConfirmRequrst(false)}
              className="btn btn-sm btn-circle btn-ghost text-[#FB869E] absolute right-2 top-2"
            >
              ✕
            </button>
            <div className="">
              <h2 className="text-[20px] md:text-[35px] text-[##474343] font-[700] mb-[30px]">
                Confirm Request
              </h2>
              <div className="p-[25px] rounded-[5px] bg-[#FFF0F0]">
                <div className="flex flex-wrap flex-col items-center md:items-start md:flex-row gap-2 ">
                  <img
                    className="w-[111px] h-[103px] rounded-[15px]"
                    src={details}
                    alt="Profile Image"
                  />
                  <div>
                    <div>
                      <span className="text-[12px] md:text-[16px] text-[#000] font-[400]">
                        {requestCompanion?.name}
                      </span>
                      {/* <span className="text-[12px] md:text-[16px] text-[#000] font-[400]">
                        Female
                      </span> */}
                      <p className="text-[12px] md:text-[16px] text-[#000] font-[400]">
                        Today 05:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="p-[25px] flex flex-col gap-[20px]">
                  <div>
                    <label className="block text-left text-[12px] md:text-[16px] text-[#8B8B8B] font-[600]">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="e.g John Doe"
                      className="border-[1px] bg-[#FBFAF5] border-[#686868] rounded-[5px] w-full text-[12] md:text-[16] text-[#8B8B8B] font-[600] px-[10px] py-[6px]"
                    />
                  </div>
                  <div>
                    <label className="block text-left text-[12px] md:text-[16px] text-[#8B8B8B] font-[600]">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="e.g myemail@gmail.com"
                      className="border-[1px] bg-[#FBFAF5] border-[#686868] rounded-[5px] w-full text-[12] md:text-[16] text-[#8B8B8B] font-[600] px-[10px] py-[6px]"
                    />
                  </div>
                  <div>
                    <label className="block text-left text-[12px] md:text-[16px] text-[#8B8B8B] font-[600]">
                      Place
                    </label>
                    <input
                      name="place"
                      type="text"
                      placeholder="Search here"
                      className="border-[1px] bg-[#FBFAF5] border-[#686868] rounded-[5px] w-full text-[12] md:text-[16] text-[#8B8B8B] font-[600] px-[10px] py-[6px]"
                    />
                  </div>
                  <div>
                    <label className="block text-left text-[12px] md:text-[16px] text-[#8B8B8B] font-[600]">
                      Room
                    </label>
                    <input
                      name="room"
                      type="text"
                      placeholder="e.g 1337"
                      className="border-[1px] bg-[#FBFAF5] border-[#686868] rounded-[5px] w-full text-[12] md:text-[16] text-[#8B8B8B] font-[600] px-[10px] py-[6px]"
                    />
                  </div>
                  <div>
                    <label className="block text-left text-[12px] md:text-[16px] text-[#8B8B8B] font-[600]">
                      Special Requests
                    </label>
                    <input
                      name="specialRequest"
                      type="text"
                      placeholder="e.g Bring Candy with you"
                      className="border-[1px] bg-[#FBFAF5] border-[#686868] rounded-[5px] w-full text-[12] md:text-[16] text-[#8B8B8B] font-[600] px-[10px] py-[6px]"
                    />
                  </div>
                </div>

                <div className="pt-[25px] flex flex-col md:flex-row items-center justify-center gap-5 border-t-[1px] border-[##737373]">
                  <button
                    onClick={() => setShowConfirmRequrst(false)}
                    className="bg-transparent hover:bg-[#FB869E] hover:text-[#FFF] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[20px] px-[25px] py-[10px] lg:px-[50px] lg:py-[10px] text-[#FB869E] text-[18px] md:text-[25px] font-[400]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#FB869E] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[20px] px-[25px] py-[10px] lg:px-[50px] lg:py-[10px] text-[#FFF] text-[18px] md:text-[25px] font-[400]"
                    // onClick={() => setShowConfirmRequrst(false)}
                  >
                    Confirm Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmRequest;
