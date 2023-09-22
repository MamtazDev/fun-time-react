import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [searchParams, setSearchParams] = useState([]);
  const [requestCompanion, setRequrestCompanion] = useState(null);
  const [activeCity, setActiveCity] = useState();
  const [time, setTime] = useState(2);
  const [clock, setClock] = useState();
  const [searchCompanions, setSearchCompanions] = useState([]);

  const signIn = () => {
    localStorage.setItem("isSignedIn", "true");
    setIsSignedIn(true);
  };

  const signOut = () => {
    localStorage.removeItem("isSignedIn");
    setIsSignedIn(false);
  };

  const contextValue = {
    isSignedIn,
    signIn,
    signOut,
    user,
    setUser,
    searchParams,
    setSearchParams,
    requestCompanion,
    setRequrestCompanion,
    activeCity,
    setActiveCity,
    time, 
    setTime,
    clock,
    setClock,
    searchCompanions, 
    setSearchCompanions
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
