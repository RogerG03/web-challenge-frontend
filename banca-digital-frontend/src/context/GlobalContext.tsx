"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { GlobalContextType } from "@/config/interfaces/global-context-interfaces";
import { useCachedState } from "@/hook/useCachedState";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [bankCardsData, setBankCardsData] = useState<
    GlobalContextType["bankCardsData"]
  >([]);

  // Aquí agregaremos cuentas bancarias
  const [accountsData, setAccountsData] = useCachedState<
    GlobalContextType["accountsData"]
  >("accountsData", []);

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        bankCardsData,
        setBankCardsData,
        accountsData,
        setAccountsData,
      }}
    >
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
