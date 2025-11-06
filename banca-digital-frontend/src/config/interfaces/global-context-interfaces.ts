import { BankCard } from "./bank-card-interface";

export interface GlobalContextType {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;

  bankCardsData: BankCard[];
  setBankCardsData: (data: BankCard[]) => void;
}
