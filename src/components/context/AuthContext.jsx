import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [searchParams, setSearchParams] = useState([]);
  const [requestCompanion, setRequrestCompanion] = useState(null);
  const [activeCity, setActiveCity] = useState();

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
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
