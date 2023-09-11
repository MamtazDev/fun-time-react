import React, { useState } from "react";
import ExploreHeader from "../Utils/ExploreHeader";

const Gender = ({
  showGender,
  setShowGender,
  showTime,
  setShowTime,
  setshowPersonList,
}) => {
  const [gender, setGender] = useState();

  const handleBack = () => {
    setShowTime(true);
    setShowGender(false);
  };
  const handleNext = () => {
    setshowPersonList(true);
    setShowGender(false);
  };
  return (
    <>
      <input checked={showGender} type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-[843px]">
          <div className="p-[25px] md:p-[55px]">
            <button
              onClick={() => setShowGender(false)}
              className="btn btn-sm btn-circle btn-ghost text-[#FB869E] absolute right-2 top-2"
            >
              ✕
            </button>
            <div className="max-w-[523px] mx-auto">
              <ExploreHeader showGender={showGender} />

              <div className="flex items-center justify-center gap-4 pb-[25px] pt-[25px] border-b-[1px] border-[#737373]">
                <button
                  onClick={() => setGender("female")}
                  type="radio"
                  className={`${
                    gender === "female" &&
                    "border-[#FB869E] bg-[#FB869E] text-[#FFF]"
                  } hover:bg-[#FB869E] hover:text-[#FFF] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[15px] px-[35px] py-[10px]  text-[#FB869E] text-[14px] md:text-[16px] font-[400]`}
                >
                  Female
                </button>
                <button
                  onClick={() => setGender("ladyboy")}
                  type="radio"
                  className={`${
                    gender === "ladyboy" &&
                    "border-[#FB869E] bg-[#FB869E] text-[#FFF]"
                  }  border-[1px] border-[#000] outline-none hover:border-[#FB869E] hover:bg-[#FB869E] hover:text-[#FFF] hover:opacity-90 rounded-[15px] px-[35px] py-[10px] text-[#000] text-[14px] md:text-[16px] font-[400]`}
                >
                  Transsexual
                </button>
              </div>
            </div>
            <div className="pt-[35px] flex flex-col md:flex-row items-center justify-center gap-5 md:gap-[5rem]">
              <button
                onClick={handleBack}
                className="bg-transparent  hover:bg-[#FB869E] hover:text-[#FFF] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[20px] px-[25px] py-[10px] lg:px-[50px] lg:py-[10px] text-[#FB869E] text-[18px] md:text-[25px] font-[400]"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="bg-[#FB869E] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[20px] px-[25px] py-[10px] lg:px-[50px] lg:py-[10px] text-[#FFF] text-[18px] md:text-[25px] font-[400]"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gender;
