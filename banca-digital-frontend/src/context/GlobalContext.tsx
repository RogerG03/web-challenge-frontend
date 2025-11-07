"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { GlobalContextType } from "@/config/interfaces/global-context-interfaces";
import { useCachedState } from "@/hook/useCachedState";
import {
  InitialStateAddtionalInfo,
  InitialStateNewTransactionPost,
} from "@/config/contracts/initial-state-new-transaction";

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

  //Estado para la estructura de la peticion de una nueva transacción
  const [newTransactionData, setNewTransactionData] = useCachedState<
    GlobalContextType["newTransactionData"]
  >("newTransactionData", InitialStateNewTransactionPost);

  const [additionalInfo, setAdditionalInfo] = useCachedState<
    GlobalContextType["additionalInfo"]
  >("additionalInfo", InitialStateAddtionalInfo);

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        bankCardsData,
        setBankCardsData,
        accountsData,
        setAccountsData,
        newTransactionData,
        setNewTransactionData,
        additionalInfo,
        setAdditionalInfo,
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
