import React from "react";
import location from "../../assets/locationPink.png";
import blacklocation from "../../assets/locationBlack.png";
import clock from "../../assets/clockPink.png";
import blackClock from "../../assets/clockBlack.png";
import Gender from "../../assets/genderPink.png";
import blackGender from "../../assets/genderBlack.png";

const ExploreHeader = ({ showCity, showTime, showGender }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-0 mb-8">
      <div className="activeExplore">
        <div
          className={`${
            showCity ? "border-[#FB869E]" : "border-[#ACACAC]"
          } flex items-center gap-1 border-b-[2px]  pb-[20px]`}
        >
          <img
            className="inline-block"
            src={showCity ? location : blacklocation}
            alt="Location"
          />
          <span
            className={`${
              showCity && "text-[#FB869E]"
            } text-[20px] md:text-[25px] font-[400]`}
          >
            City
          </span>
        </div>
      </div>

      <div>
        <div
          className={`${
            showTime ? "border-[#FB869E]" : "border-[#ACACAC]"
          } flex items-center gap-1 border-b-[2px]  pb-[20px]`}
        >
          <img
            className="inline-block"
            src={showTime ? clock : blackClock}
            alt="Time"
          />
          <span
            className={`${
              showTime && "text-[#FB869E]"
            } text-[20px] md:text-[25px] font-[400]`}
          >
            Time
          </span>
        </div>
      </div>

      <div>
        <div
          className={`${
            showGender ? "border-[#FB869E]" : "border-[#ACACAC]"
          } flex items-center gap-1 border-b-[2px]  pb-[20px]`}
        >
          <img
            className="inline-block"
            src={showGender ? Gender : blackGender}
            alt="Gender"
          />
          <span
            className={`${
              showGender && "text-[#FB869E]"
            } text-[20px] md:text-[25px] font-[400]`}
          >
            Gender
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExploreHeader;
