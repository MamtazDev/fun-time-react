import React from "react";
import Header from "../components/Header";
import { Route, Routes } from "react-router-dom";
import Slider from "../components/Slider";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Slider />
    </div>
  );
};

export default Home;
