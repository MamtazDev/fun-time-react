import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <div>
      <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin" element={<Admin/>}/>
            
            </Routes>

    </div>
  );
};

export default App;
