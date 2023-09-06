import React, { useState } from "react";
import pinkArrow from "../../assets/pinkArrow.png";
import blackArrow from "../../assets/blackArrow.png";
import ExploreHeader from "../Utils/ExploreHeader";

const City = ({ showCity, setShowCity, showTime, setShowTime }) => {
  const [activeCity, setActiveCity] = useState();
  const [activeCall, setActiveCall] = useState();

  const handleTime = () => {
    setShowTime(true);
    setShowCity(false);
  };
  const cities = [
    { name: "Bangkok" },
    { name: "Chiangmai" },
    { name: "Dan Nok" },
    { name: "Had Yai" },
    { name: "Krabi" },
    { name: "Pattaya" },
    { name: "Phuket" },
  ];

  return (
    <>
      <input checked={showCity} type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-[843px]">
          <div className="p-[25px] md:p-[55px]">
            <button
              onClick={() => setShowCity(false)}
              className="btn btn-sm btn-circle btn-ghost text-[#FB869E] absolute right-2 top-2"
            >
              ✕
            </button>
            <div className="max-w-[523px] mx-auto">
              <ExploreHeader showCity={showCity} />

              <div className="flex flex-col gap-3">
                {cities.map((city, index) => (
                  <button
                    onClick={() => setActiveCity(index)}
                    key={index}
                    className={
                      activeCity === index
                        ? "activeExplore flex justify-between items-center w-full text-[#FB869E] text-[14px] md:text-[16px] md:font-[400] border-[1px] border-[#686868] outline-none hover:opacity-90 rounded-[5px] px-[10px] py-[6px]"
                        : "flex justify-between items-center w-full text-[rgba(0, 0, 0, 0.80)] text-[14px] md:text-[16px] md:font-[400] border-[1px] border-[#686868] outline-none hover:opacity-90 rounded-[5px] px-[10px] py-[6px]"
                    }
                  >
                    {city.name}
                    <img
                      src={activeCity === index ? pinkArrow : blackArrow}
                      alt="Arrow"
                    />
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-[25px] pt-[25px] border-b-[1px] border-[#737373]">
                <button
                  onClick={() => setActiveCall("outCall")}
                  className={`${
                    activeCall === "outCall" && "bg-[#FB869E] text-[#FFF]"
                  } activeExplore hover:bg-[#FB869E] hover:text-[#FFF] text-[#FB869E] border-[#FB869E] text-[14px] md:text-[16px] font-[400] border-[1px]  outline-none hover:opacity-90 rounded-[15px] px-[10px] py-[6px]`}
                >
                  OUTCALL (She comes to you)
                </button>
                <button
                  onClick={() => setActiveCall("inCall")}
                  className={`${
                    activeCall === "inCall" &&
                    "bg-[#FB869E] text-[#FFF] border-[#FB869E]"
                  } activeExplore hover:bg-[#FB869E] hover:text-[#FFF] hover:border-[#FB869E] text-[#000] text-[14px] md:text-[16px] font-[400] border-[1px] border-[#000] outline-none hover:opacity-90 rounded-[15px] px-[10px] py-[6px]`}
                >
                  INCALL(You go to her)
                </button>
              </div>
            </div>
            <div className="pt-[35px] flex flex-col md:flex-row items-center justify-center gap-5 md:gap-[5rem]">
              <button
                onClick={() => setShowCity(false)}
                className="bg-transparent  hover:bg-[#FB869E] hover:text-[#FFF] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[20px] px-[25px] py-[10px] lg:px-[50px] lg:py-[10px] text-[#FB869E] text-[18px] md:text-[25px] font-[400]"
              >
                Back
              </button>
              <button
                onClick={handleTime}
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

export default City;
