import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Booking from "./pages/Booking";
import Companion from "./pages/Companion";
import Authenticated from "./pages/Authenticated";
import { AuthContext } from "./components/context/AuthContext";
import ConfirmAdult from "./components/Modal/ConfirmAdult";

const App = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showCity, setShowCity] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const { setUser } = useContext(AuthContext);
  const [confirmModal, setConfirmModal]=useState(true)

  useEffect(() => {
    const user = localStorage.getItem("funtimeAuth");
    const ConfirmAdult = localStorage.getItem("confrimAdult")


    if (user) {
      setUser(JSON.parse(user));
      setAuthChecked(true);
    } 
    if(ConfirmAdult){
      setConfirmModal(false)
      setAuthChecked(true);
    }
    else {
      setAuthChecked(true);
    }
  }, []);

  return authChecked ? (
    <div>
      <ConfirmAdult confirmModal={confirmModal} setConfirmModal={setConfirmModal}/>
      <Header
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              showSignInModal={showSignInModal}
              setShowSignInModal={setShowSignInModal}
              showCity={showCity}
              setShowCity={setShowCity}
            />
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/companions" element={<Companion />} />
        <Route path="/authenticated" element={<Authenticated />} />
      </Routes>
    </div>
  ) : (
    ""
  );
};

export default App;
