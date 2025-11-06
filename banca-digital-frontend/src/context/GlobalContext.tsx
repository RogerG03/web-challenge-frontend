"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { GlobalContextType } from "@/config/interfaces/global-context-interfaces";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <GlobalContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useGlobal debe usarse dentro de GlobalProvider");
  return context;
};
