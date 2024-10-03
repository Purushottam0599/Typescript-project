import React, { createContext } from "react";
import { styleObj } from "./Style";


export const MyContext = createContext(styleObj);

interface ContextType {
  children: React.ReactNode;
}

export const MyContextProvider = ({ children }: ContextType) => {
  return <MyContext.Provider value={styleObj}>{children}</MyContext.Provider>;
};
