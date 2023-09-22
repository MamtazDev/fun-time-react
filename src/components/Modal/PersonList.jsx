import React, { useContext, useEffect, useState } from "react";
import slider from "../../assets/slider.png";
import location from "../../assets/locationBlack.png";
import clockk from "../../assets/clockBlack.png";
import gender from "../../assets/genderBlack.png";
import { AuthContext } from "../context/AuthContext";

const PersonList = ({
  showPersonList,
  setshowPersonList,
  setShowGender,
  setshowPersonDetails,
  setShowConfirmRequrst,
}) => {
  const { searchParams, searchCompanions,clock,setRequrestCompanion } = useContext(AuthContext);
  const handleBack = () => {
    setShowGender(true);
    setshowPersonList(false);
  };

  const handleRequest = (e, value) => {
    e.stopPropagation();
    setshowPersonList(false);
    setShowConfirmRequrst(true);
    setshowPersonDetails(false);
    setRequrestCompanion(value);
  };
  const handleDetails = () => {
    setshowPersonList(false);
    setshowPersonDetails(true);
  };


  const city = searchParams[0]?.split("=")[1]
  const gnder = searchParams[1]?.split("=")[1]





  // const getCompanion = async () => {
  //   const resData = await getSearchCompanion(searchParams);
  //   // console.log(resData, "gg");
  //   setCompanions(resData);
  // };

  // useEffect(() => {
  //   getCompanion();
  // }, [showPersonList]);

  return (
    <>
      <input
        checked={showPersonList}
        type="checkbox"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box max-w-[1443px]">
          <div className="p-[25px] md:p-[55px]">
            <button
              onClick={() => setshowPersonList(false)}
              className="btn btn-sm btn-circle btn-ghost text-[#FB869E] absolute right-2 top-2"
            >
              ✕
            </button>
            <div className="max-w-[523px] mx-auto mb-[45px]">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-0 mb-8">
                <div className="flex items-center gap-1">
                  <img className="inline-block" src={location} alt="Location" />
                  <span className="text-[#000] text-[20px] md:text-[25px] font-[400]">
                    {city}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <img className="inline-block" src={clockk} alt="Time" />
                  <span className="text-[#000] text-[20px] md:text-[25px] font-[400]">
                    {clock}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <img className="inline-block" src={gender} alt="Gender" />
                  <span className="text-[#000] text-[20px] md:text-[25px] font-[400] capitalize">
                    {gnder}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] pb-[35px]">
              {searchCompanions.length > 0 &&
                searchCompanions?.map((data, index) => (
                  <div
                    onClick={() => handleDetails(data)}
                    key={index}
                    className="border-[1px] rounded-[25px]  border-[#FB869E]"
                  >
                    <img
                      className="w-full rounded-tl-[25px]  rounded-tr-[25px]"
                      src={data?.image !== "url" ? data?.image : slider}
                      alt="Profile Image"
                    />
                    <div className="text-left px-[25px] py-[10px]">
                      <div className="flex items-center justify-between pb-[10px] border-b-[.5px] border-[#000]">
                        <p className="text-[#000] text-[18px] md:text-[25px] font-[400]">
                          {data?.name}
                        </p>
                        <p className="text-[#000] text-[12px] md:text-[15px] font-[300]">
                          {data?.city}
                        </p>
                      </div>
                      <div className="pb-[10px] pt-[10px] border-b-[.5px] border-[#000]">
                        <p className="text-left text-[#000] text-[12px] md:text-[15px] font-[300]">
                          {data?.age} years old
                        </p>
                      </div>
                      <div className="flex items-center justify-start gap-3 pt-[10px] pb-[10px] border-b-[.5px] border-[#000]">
                        <p className="text-[#000] text-[12px] md:text-[15px] font-[300]">
                          {data?.height}
                        </p>
                        <p className="text-[#000] text-[12px] md:text-[15px] font-[300]">
                          |
                        </p>
                        <p className="text-[#000] text-[12px] md:text-[15px] font-[400]">
                          {data?.measurement}
                        </p>
                      </div>
                      <button
                        onClick={(e) => handleRequest(e, data)}
                        className="mt-[25px] bg-transparent border-[.5px] border-[#000] hover:border-[#FB869E] outline-none hover:bg-[#FB869E] hover:text-[#FFF] hover:opacity-90 rounded-[10px] px-[15px] py-[5px] text-[#000] text-[15px] font-[500]"
                      >
                        Send request
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            <div className="pt-[35px] flex flex-col md:flex-row items-center justify-center gap-5 md:gap-[5rem] border-t-[1px] border-[#000]">
              <button
                onClick={handleBack}
                className="bg-transparent  hover:bg-[#FB869E] hover:text-[#FFF] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[20px] px-[25px] py-[10px] lg:px-[50px] lg:py-[10px] text-[#FB869E] text-[18px] md:text-[25px] font-[400]"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonList;
