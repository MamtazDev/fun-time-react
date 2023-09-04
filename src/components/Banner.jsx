import React, { useContext, useState } from "react";
import City from "./Modal/City";
import Time from "./Modal/Time";
import Gender from "./Modal/Gender";
import PersonList from "./Modal/PersonList";
import PersonDetails from "./Modal/PersonDetails";
import ConfirmRequest from "./Modal/ConfirmRequest";
import { AuthContext } from "./context/AuthContext";

const Banner = ({ setShowSignInModal, showCity, setShowCity }) => {
  const [showTime, setShowTime] = useState(false);
  const [showGender, setShowGender] = useState(false);
  const [showPersonList, setshowPersonList] = useState(false);
  const [showPersonDetails, setshowPersonDetails] = useState(false);
  const [showConfirmRequest, setShowConfirmRequrst] = useState(false);
  const { isSignedIn } = useContext(AuthContext);
  const handleExplore = () => {
    if (isSignedIn) {
      setShowCity(true);
    } else {
      setShowSignInModal(true);
    }
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="banner pt-[30px] text-center">
          <h1 className="text-[#FB869E] text-[38px] md:text-[45px] lg:text-[85px] font-[700]  text-center mb-[30px]">
            A World Of Effortless Fun
          </h1>
          <p className="text-[#FB869E] text-[25px] md:text-[38px] lg:text-[45px] font-[400]  text-center mb-[50px]">
            Where your wildest dreams come true
          </p>
          <button
            onClick={handleExplore}
            className="inline-flex items-center bg-[#FB869E] border-0 outline-none hover:opacity-90 rounded-[41px] px-[24px] py-[16px] text-[#FBFAF5] text-16 md:text-[20px] font-[700]"
          >
            EXPLORE
          </button>
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
      <Gender
        showTime={showTime}
        setShowTime={setShowTime}
        showGender={showGender}
        setShowGender={setShowGender}
        setshowPersonList={setshowPersonList}
      />
      <PersonList
        showPersonList={showPersonList}
        setshowPersonList={setshowPersonList}
        showGender={showGender}
        setShowGender={setShowGender}
        showPersonDetails={showPersonDetails}
        setshowPersonDetails={setshowPersonDetails}
        setShowConfirmRequrst={setShowConfirmRequrst}
      />

      <PersonDetails
        setshowPersonList={setshowPersonList}
        showPersonDetails={showPersonDetails}
        setshowPersonDetails={setshowPersonDetails}
        setShowConfirmRequrst={setShowConfirmRequrst}
      />
      <ConfirmRequest
        showConfirmRequest={showConfirmRequest}
        setShowConfirmRequrst={setShowConfirmRequrst}
      />
    </section>
  );
};

export default Banner;
