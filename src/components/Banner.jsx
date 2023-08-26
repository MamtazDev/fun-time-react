import React, { useState } from "react";
import City from "./Modal/City";
import Time from "./Modal/Time";
import Gender from "./Modal/Gender";

const Banner = () => {
  const [showCity, setShowCity] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showGender, setShowGender] = useState(false);

  return (
    <section>
      <div className="container mx-auto">
        <div className="banner pt-[91px] text-center">
          <h1 className="text-[#FB869E] text-[38px] md:text-[45px] lg:text-[85px] font-[700]  text-center mb-[30px]">
            A World Of Effortless Fun
          </h1>
          <p className="text-[#FB869E] text-[25px] md:text-[38px] lg:text-[45px] font-[400]  text-center mb-[50px]">
            Where your wildest dreams come true
          </p>
          <button
            onClick={() => setShowCity(true)}
            className="inline-flex items-center bg-[#FB869E] border-0 outline-none hover:opacity-90 rounded-[41px] px-[24px] py-[16px] text-[#FBFAF5] text-16 md:text-[20px] font-[700]"
          >
            EXPLORE
          </button>

          {/* <!--Explore Modal Step_4 Start --> */}
          <dialog id="my_modal_step4" className="modal">
            <form method="dialog" className="modal-box max-w-[1443px]">
              <div className="p-[25px] md:p-[55px]">
                <button className="btn btn-sm btn-circle btn-ghost text-[#FB869E] absolute right-2 top-2">
                  ✕
                </button>
                <div className="max-w-[523px] mx-auto mb-[45px]">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-0 mb-8">
                    <div className="flex items-center gap-1">
                      <img
                        className="inline-block"
                        src="./assets/images/locationBlack.png"
                        alt="Location"
                      />
                      <span className="text-[#000] text-[20px] md:text-[25px] font-[400]">
                        Bangkok
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <img
                        className="inline-block"
                        src="./assets/images/clockBlack.png"
                        alt="Time"
                      />
                      <span className="text-[#000] text-[20px] md:text-[25px] font-[400]">
                        03:30 PM
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <img
                        className="inline-block"
                        src="./assets/images/genderBlack.png"
                        alt="Gender"
                      />
                      <span className="text-[#000] text-[20px] md:text-[25px] font-[400]">
                        Female
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] pb-[35px]">
                  <div className="border-[1px] rounded-[25px]  border-[#FB869E]">
                    <img
                      className="w-full rounded-tl-[25px] rounded-tr-[25px] rounded-tr-[25px]"
                      src="./assets/images/slider.png"
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
                        className="mt-[25px] bg-transparent border-[.5px] border-[#000] hover:border-[#FB869E] outline-none hover:bg-[#FB869E] hover:text-[#FFF] hover:opacity-90 rounded-[10px] px-[15px] py-[5px] text-[#000] text-[15px] font-[500]"
                        onclick="my_modal_step5.showModal()"
                      >
                        Send request
                      </button>
                    </div>
                  </div>
                  <div className="border-[1px] rounded-[25px]  border-[#FB869E]">
                    <img
                      className="w-full rounded-tl-[25px]  rounded-tr-[25px]"
                      src="./assets/images/slider.png"
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
                      <button className="mt-[25px] bg-transparent border-[.5px] border-[#000] hover:border-[#FB869E] outline-none hover:bg-[#FB869E] hover:text-[#FFF] hover:opacity-90 rounded-[10px] px-[15px] py-[5px] text-[#000] text-[15px] font-[500]">
                        Send request
                      </button>
                    </div>
                  </div>
                  <div className="border-[1px] rounded-[25px]  border-[#FB869E]">
                    <img
                      className="w-full rounded-tl-[25px] rounded-tr-[25px] rounded-tr-[25px]"
                      src="./assets/images/slider.png"
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
                      <button className="mt-[25px] bg-transparent border-[.5px] border-[#000] hover:border-[#FB869E] outline-none hover:bg-[#FB869E] hover:text-[#FFF] hover:opacity-90 rounded-[10px] px-[15px] py-[5px] text-[#000] text-[15px] font-[500]">
                        Send request
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pt-[35px] flex flex-col md:flex-row items-center justify-center gap-5 md:gap-[5rem] border-t-[1px] border-[#000]">
                  <button
                    className="bg-transparent  hover:bg-[#FB869E] hover:text-[#FFF] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[20px] px-[25px] py-[10px] lg:px-[50px] lg:py-[10px] text-[#FB869E] text-[18px] md:text-[25px] font-[400]"
                    onclick="my_modal_step3.showModal()"
                  >
                    Back
                  </button>
                </div>
              </div>
            </form>
          </dialog>
          {/* <!--Explore Modal Step_4 End --> */}

          {/* <!--Explore Modal Step_5 Start --> */}
          <dialog id="my_modal_step5" className="modal">
            <form method="dialog" className="modal-box max-w-[843px]">
              <div className="p-[10px] md:p-[55px]">
                <button className="btn btn-sm btn-circle btn-ghost text-[#FB869E] absolute right-2 top-2">
                  ✕
                </button>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-[5px] px-[50px] pb-[35px]">
                  <img
                    className="w-full"
                    src="./assets/images/bird.png"
                    alt="Profile Image"
                  />
                  <img
                    className="w-full"
                    src="./assets/images/bird.png"
                    alt="Profile Image"
                  />
                  <img
                    className="w-full"
                    src="./assets/images/bird.png"
                    alt="Profile Image"
                  />
                  <img
                    className="w-full"
                    src="./assets/images/bird.png"
                    alt="Profile Image"
                  />
                  <img
                    className="w-full"
                    src="./assets/images/bird.png"
                    alt="Profile Image"
                  />
                  <img
                    className="w-full"
                    src="./assets/images/bird.png"
                    alt="Profile Image"
                  />
                  <img
                    className="w-full"
                    src="./assets/images/bird.png"
                    alt="Profile Image"
                  />
                  <img
                    className="w-full"
                    src="./assets/images/bird.png"
                    alt="Profile Image"
                  />
                </div>
                <div className="px-[10px] pb-[35px]">
                  <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                    <p className="text-[#8C8C8C] text-[16px] font-[400]">
                      Name
                    </p>
                    <p className="text-[#000] text-[16px] font-[500]">
                      ChickenNuggets
                    </p>
                  </div>
                  <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                    <p className="text-[#8C8C8C] text-[16px] font-[400]">
                      City
                    </p>
                    <p className="text-[#000] text-[16px] font-[500]">
                      Bangkok
                    </p>
                  </div>
                  <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                    <p className="text-[#8C8C8C] text-[16px] font-[400]">
                      Gender
                    </p>
                    <p className="text-[#000] text-[16px] font-[500]">Female</p>
                  </div>
                  <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                    <p className="text-[#8C8C8C] text-[16px] font-[400]">Age</p>
                    <p className="text-[#000] text-[16px] font-[500]">33</p>
                  </div>
                  <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                    <p className="text-[#8C8C8C] text-[16px] font-[400]">
                      Height
                    </p>
                    <p className="text-[#000] text-[16px] font-[500]">
                      1.65 CM
                    </p>
                  </div>
                  <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                    <p className="text-[#8C8C8C] text-[16px] font-[400]">
                      Measurements
                    </p>
                    <p className="text-[#000] text-[16px] font-[500]">
                      35 D-24-35
                    </p>
                  </div>
                  <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                    <p className="text-[#8C8C8C] text-[16px] font-[400]">
                      Body Type
                    </p>
                    <p className="text-[#000] text-[16px] font-[500]">
                      Athletic
                    </p>
                  </div>
                  <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                    <p className="text-[#8C8C8C] text-[16px] font-[400]">
                      Do’s
                    </p>
                    <p className="text-[#000] text-[16px] font-[500]">
                      DDOS SPAM EMAIL GANK SPAMDDOS SPAM
                    </p>
                  </div>
                  <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b-[.5px] border-[##A7A7A7]">
                    <p className="text-[#8C8C8C] text-[16px] font-[400]">
                      Do’s
                    </p>
                    <p className="text-[#000] text-[16px] font-[500]">
                      DDOS SPAM EMAIL GANK SPAMDDOS SPAM
                    </p>
                  </div>
                </div>
                <div className="pt-[35px] flex flex-col md:flex-row items-center justify-center gap-5 md:gap-[5rem] border-t-[1px] border-[##737373]">
                  <button
                    className="bg-transparent  hover:bg-[#FB869E] hover:text-[#FFF] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[20px] px-[25px] py-[10px] lg:px-[50px] lg:py-[10px] text-[#FB869E] text-[18px] md:text-[25px] font-[400]"
                    onclick="my_modal_step4.showModal()"
                  >
                    Back
                  </button>
                  <button
                    className="bg-[#FB869E] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[20px] px-[25px] py-[10px] lg:px-[50px] lg:py-[10px] text-[#FFF] text-[18px] md:text-[25px] font-[400]"
                    onclick="my_modal_step6.showModal()"
                  >
                    Send Request
                  </button>
                </div>
              </div>
            </form>
          </dialog>
          {/* <!--Explore Modal Step_5 End --> */}

          {/* <!--Explore Modal Step_6 Start --> */}
          <dialog id="my_modal_step6" className="modal">
            <form method="dialog" className="modal-box max-w-[843px]">
              <div className="p-[25] md:px-[55px] md:py-[25px]">
                <button className="btn btn-sm btn-circle btn-ghost text-[#FB869E] absolute right-2 top-2">
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
                        src="./assets/images/profile_details.png"
                        alt="Profile Image"
                      />
                      <div>
                        <div>
                          <span className="text-[12px] md:text-[16px] text-[#000] font-[400]">
                            cowboy
                          </span>
                          <span className="text-[12px] md:text-[16px] text-[#000] font-[400]">
                            Female
                          </span>
                          <p className="text-[12px] md:text-[16px] text-[#000] font-[400]">
                            Today 05:30 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <form action="">
                    <div className="p-[25px] flex flex-col gap-[20px]">
                      <div>
                        <label className="block text-left text-[12px] md:text-[16px] text-[#8B8B8B] font-[600]">
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g John Doe"
                          className="border-[1px] border-[#686868] rounded-[5px] w-full text-[12] md:text-[16] text-[#8B8B8B] font-[600] px-[10px] py-[6px]"
                        />
                      </div>
                      <div>
                        <label className="block text-left text-[12px] md:text-[16px] text-[#8B8B8B] font-[600]">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="e.g myemail@gmail.com"
                          className="border-[1px] border-[#686868] rounded-[5px] w-full text-[12] md:text-[16] text-[#8B8B8B] font-[600] px-[10px] py-[6px]"
                        />
                      </div>
                      <div>
                        <label className="block text-left text-[12px] md:text-[16px] text-[#8B8B8B] font-[600]">
                          Place
                        </label>
                        <input
                          type="text"
                          placeholder="Search here"
                          className="border-[1px] border-[#686868] rounded-[5px] w-full text-[12] md:text-[16] text-[#8B8B8B] font-[600] px-[10px] py-[6px]"
                        />
                      </div>
                      <div>
                        <label className="block text-left text-[12px] md:text-[16px] text-[#8B8B8B] font-[600]">
                          Room
                        </label>
                        <input
                          type="text"
                          placeholder="e.g 1337"
                          className="border-[1px] border-[#686868] rounded-[5px] w-full text-[12] md:text-[16] text-[#8B8B8B] font-[600] px-[10px] py-[6px]"
                        />
                      </div>
                      <div>
                        <label className="block text-left text-[12px] md:text-[16px] text-[#8B8B8B] font-[600]">
                          Special Requests
                        </label>
                        <input
                          type="text"
                          placeholder="e.g Bring Candy with you"
                          className="border-[1px] border-[#686868] rounded-[5px] w-full text-[12] md:text-[16] text-[#8B8B8B] font-[600] px-[10px] py-[6px]"
                        />
                      </div>
                    </div>

                    <div className="pt-[25px] flex flex-col md:flex-row items-center justify-center gap-5 border-t-[1px] border-[##737373]">
                      <button className="bg-transparent hover:bg-[#FB869E] hover:text-[#FFF] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[20px] px-[25px] py-[10px] lg:px-[50px] lg:py-[10px] text-[#FB869E] text-[18px] md:text-[25px] font-[400]">
                        Cancel
                      </button>
                      <button
                        className="bg-[#FB869E] border-[1px] border-[#FB869E] outline-none hover:opacity-90 rounded-[20px] px-[25px] py-[10px] lg:px-[50px] lg:py-[10px] text-[#FFF] text-[18px] md:text-[25px] font-[400]"
                        onclick="my_modal_step6.showModal()"
                      >
                        Confirm Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </form>
          </dialog>
          {/* <!--Explore Modal Step_5 End --> */}
        </div>
      </div>
      <City
           showTime={showTime}
        setShowTime={setShowTime}
        showCity={showCity}
        setShowCity={setShowCity}
      />
      <Time
        showTime={showTime}
        setShowTime={setShowTime}
        setShowCity={setShowCity}
        setShowGender={setShowGender}
      />
      <Gender   showTime={showTime}
        setShowTime={setShowTime} showGender={showGender} setShowGender={setShowGender} />
    </section>
  );
};

export default Banner;
