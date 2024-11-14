"use client";
import React, { createContext } from "react";

export const GlobalContext = createContext({});
export const GlobalUpdateContext = createContext({});

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    // <GlobalContext.Provider value={{}}>
    //   <GlobalUpdateContext.Provider value={{}}>{children}</GlobalUpdateContext.Provider>
    // </GlobalContext.Provider>
    {children}
  );
};

export default GlobalProvider;
