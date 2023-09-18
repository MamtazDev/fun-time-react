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

const App = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showCity, setShowCity] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    const user = localStorage.getItem("funtimeAuth");

    if (user) {
      setUser(JSON.parse(user));
      setAuthChecked(true);
    } else {
      setAuthChecked(true);
    }
  }, []);
  return authChecked ? (
    <div>
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
