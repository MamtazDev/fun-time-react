import React from "react";
import Header from "../components/Header";
import { Route, Routes } from "react-router-dom";
import Slider from "../components/Slider";
import Banner from "../components/Banner";

const Home = ({ setShowSignInModal, showCity, setShowCity }) => {
  return (
    <div>
      <Banner
        setShowSignInModal={setShowSignInModal}
        showCity={showCity}
        setShowCity={setShowCity}
      />
      <Slider setShowSignInModal={setShowSignInModal}   setShowCity={setShowCity}/>
    </div>
  );
};

export default Home;
