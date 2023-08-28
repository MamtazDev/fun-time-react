import React from "react";
import slider from "../../assets/slider.png";
import location from "../../assets/locationBlack.png";
import clock from "../../assets/clockBlack.png";
import gender from "../../assets/genderBlack.png";

const PersonList = ({
  showPersonList,
  setshowPersonList,
  setShowGender,
  setshowPersonDetails,
  setShowConfirmRequrst,
}) => {
  const handleBack = () => {
    setShowGender(true);
    setshowPersonList(false);
  };

  const handleRequest = (e) => {
    e.stopPropagation();
    setshowPersonList(false);
    setShowConfirmRequrst(true);
    setshowPersonDetails(false);
  };
  const handleDetails = () => {
    setshowPersonList(false);
    setshowPersonDetails(true);
  };

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
                    Bangkok
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <img className="inline-block" src={clock} alt="Time" />
                  <span className="text-[#000] text-[20px] md:text-[25px] font-[400]">
                    03:30 PM
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <img className="inline-block" src={gender} alt="Gender" />
                  <span className="text-[#000] text-[20px] md:text-[25px] font-[400]">
                    Female
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] pb-[35px]">
              {[1, 2, 3].map((data, index) => (
                <div
                  onClick={handleDetails}
                  key={index}
                  className="border-[1px] rounded-[25px]  border-[#FB869E]"
                >
                  <img
                    className="w-full rounded-tl-[25px]  rounded-tr-[25px]"
                    src={slider}
                    alt="Profile Image"
                  />
                  <div className="text-left px-[25px] py-[10px]">
                    <div className="flex items-center justify-between pb-[10px] border-b-[.5px] border-[#000]">
                      <p className="text-[#000] text-[18px] md:text-[25px] font-[400]">
                        uglyduck
                      </p>
                      <p className="text-[#000] text-[12px] md:text-[15px] font-[300]">
                        Bangkok
                      </p>
                    </div>
                    <div className="pb-[10px] pt-[10px] border-b-[.5px] border-[#000]">
                      <p className="text-left text-[#000] text-[12px] md:text-[15px] font-[300]">
                        33 years old
                      </p>
                    </div>
                    <div className="flex items-center justify-start gap-3 pt-[10px] pb-[10px] border-b-[.5px] border-[#000]">
                      <p className="text-[#000] text-[12px] md:text-[15px] font-[300]">
                        167 cm
                      </p>
                      <p className="text-[#000] text-[12px] md:text-[15px] font-[300]">
                        |
                      </p>
                      <p className="text-[#000] text-[12px] md:text-[15px] font-[400]">
                        167 cm
                      </p>
                    </div>
                    <button
                      onClick={handleRequest}
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
