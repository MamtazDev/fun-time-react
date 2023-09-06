import React from "react";
import bird from "../../assets/bird.png";

const PersonDetails = ({
  showPersonDetails,
  setshowPersonList,
  setshowPersonDetails,
  setShowConfirmRequrst,
}) => {
  const handleBack = () => {
    setshowPersonList(true);
    setshowPersonDetails(false);
  };

  const handleRequest = () => {
    setShowConfirmRequrst(true);
    setshowPersonDetails(false);
  };
  return (
    <>
      <input
        checked={showPersonDetails}
        type="checkbox"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box max-w-[843px]">
          <div className="p-[10px] md:p-[55px]">
            <button
              onClick={() => setshowPersonDetails(false)}
              className="btn btn-sm btn-circle btn-ghost text-[#FB869E] absolute right-2 top-2"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-[5px] px-[50px] pb-[35px]">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <img
                  key={index}
                  className="w-full"
                  src={bird}
                  alt="Profile Image"
                />
              ))}
            </div>
            <div className="px-[10px] pb-[35px]">
              <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                <p className="text-[#8C8C8C] text-[16px] font-[400]">Name</p>
                <p className="text-[#000] text-[16px] font-[500]">
                  ChickenNuggets
                </p>
              </div>
              <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                <p className="text-[#8C8C8C] text-[16px] font-[400]">City</p>
                <p className="text-[#000] text-[16px] font-[500]">Bangkok</p>
              </div>
              <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                <p className="text-[#8C8C8C] text-[16px] font-[400]">Gender</p>
                <p className="text-[#000] text-[16px] font-[500]">Female</p>
              </div>
              <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                <p className="text-[#8C8C8C] text-[16px] font-[400]">Age</p>
                <p className="text-[#000] text-[16px] font-[500]">33</p>
              </div>
              <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                <p className="text-[#8C8C8C] text-[16px] font-[400]">Height</p>
                <p className="text-[#000] text-[16px] font-[500]">1.65 CM</p>
              </div>
              <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                <p className="text-[#8C8C8C] text-[16px] font-[400]">
                  Measurements
                </p>
                <p className="text-[#000] text-[16px] font-[500]">35 D-24-35</p>
              </div>
              <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                <p className="text-[#8C8C8C] text-[16px] font-[400]">
                  Boob Type
                </p>
                <p className="text-[#000] text-[16px] font-[500]">Natural</p>
              </div>
              <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                <p className="text-[#8C8C8C] text-[16px] font-[400]">
                  Body Type
                </p>
                <p className="text-[#000] text-[16px] font-[500]">Athletic</p>
              </div>
              <div className="flex flex-col md:flex-row  justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                <p className="text-[#8C8C8C] text-[16px] font-[400]">Do’s</p>
                <p className="text-[#000] text-[16px] font-[500]">
                  DDOS SPAM EMAIL GANK SPAMDDOS SPAM
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                <p className="text-[#8C8C8C] text-[16px] font-[400]">Don't</p>
                <p className="text-[#000] text-[16px] font-[500]">
                  DDOS SPAM EMAIL GANK SPAMDDOS SPAM
                </p>
              </div>
            </div>
            <div className="pt-[35px] flex flex-col md:flex-row items-center justify-center gap-5 md:gap-[5rem] border-t-[1px] border-[##737373]">
              <button
                onClick={handleBack}
                className="bg-transparent  hover:bg-[#FB869E] hover:text-[#FFF] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[20px] px-[25px] py-[10px] lg:px-[50px] lg:py-[10px] text-[#FB869E] text-[18px] md:text-[25px] font-[400]"
              >
                Back
              </button>
              <button
                onClick={handleRequest}
                className="bg-[#FB869E] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[20px] px-[25px] py-[10px] lg:px-[50px] lg:py-[10px] text-[#FFF] text-[18px] md:text-[25px] font-[400]"
              >
                Send Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonDetails;
