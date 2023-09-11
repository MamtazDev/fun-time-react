import React, { useState } from "react";
import ExploreHeader from "../Utils/ExploreHeader";
import TimePickers from "./TimePicker";
import Timepickernew from "./Timepickernew";

const Time = ({ showTime, setShowTime, setShowCity, setShowGender }) => {
  
  const handleCity = () => {
    setShowCity(true);
    setShowTime(false);
  };
  const handleGender = () => {
    setShowTime(false);
    setShowGender(true);
  };

 
  return (
    <>
      <input checked={showTime} type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-[843px]">
          <div className="p-[25px] md:p-[55px]">
            <button
              onClick={() => setShowTime(false)}
              className="btn btn-sm btn-circle btn-ghost text-[#FB869E] absolute right-2 top-2"
            >
              ✕
            </button>
            <div className="max-w-[523px] mx-auto">
              <ExploreHeader showTime={showTime} />

              <div className="pb-[25px] pt-[25px] border-b-[1px] border-[#737373]">
                {/* <h2 className="text-[25px] md:text-[45px] text-[#000] font-[700] mb-[65px] text-center">
                  Today
                </h2> */}
                <Timepickernew />
                {/* <TimePickers /> */}

                {/* <div className="flex items-center justify-center gap-4">
                  <p className="px-[5px] rounded-[20px] text-[45px] md:text-[75px] text-[#FFF] bg-[#FB869E] font-[700]">
                    04
                  </p>
                  <p className="text-[25px] md:text-[75px] text-[#FB869E] font-[700]">
                    :
                  </p>
                  <p className="px-[5px] rounded-[20px] text-[45px] md:text-[75px] text-[#FFF] bg-[#FB869E]  font-[700]">
                    04
                  </p>
                  <div>
                    <p className="text-[18px] md:text-[25px] text-[#000] font-[700]">
                      AM
                    </p>
                    <p className="activeExplore text-[18px] md:text-[25px] text-[#FB869E] font-[700]">
                      PM
                    </p>
                  </div>
                </div> */}
              </div>

              {/* <div className="pb-[25px] pt-[25px] border-b-[1px] border-[#737373]">
                <h2 className="text-[18px] md:text-[35px] text-[#000] font-[400] mb-[35px]">
                  Duration
                </h2>
                <div className="flex items-center justify-center gap-4">
                  <p
                    onClick={handleDecrement}
                    className="text-[40px] md:text-[70px] text-[#000] font-[400] cursor-pointer"
                  >
                    -
                  </p>
                  <p className="text-[40px] md:text-[70px] text-[#000] font-[400]">
                    {time}H
                  </p>
                  <p
                    onClick={handleIncrement}
                    className="text-[40px] md:text-[70px] text-[#000] font-[400] cursor-pointer"
                  >
                    +
                  </p>
                </div>
              </div> */}
            </div>
            <div className="pt-[35px] flex flex-col md:flex-row items-center justify-center gap-5 md:gap-[5rem]">
              <button
                className="bg-transparent  hover:bg-[#FB869E] hover:text-[#FFF] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[20px] px-[25px] py-[10px] lg:px-[50px] lg:py-[10px] text-[#FB869E] text-[18px] md:text-[25px] font-[400]"
                onClick={handleCity}
              >
                Back
              </button>
              <button
                className="bg-[#FB869E] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[20px] px-[25px] py-[10px] lg:px-[50px] lg:py-[10px] text-[#FFF] text-[18px] md:text-[25px] font-[400]"
                onClick={handleGender}
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

export default Time;
