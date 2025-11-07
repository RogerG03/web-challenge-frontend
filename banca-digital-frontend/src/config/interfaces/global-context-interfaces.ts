import { BankCard } from "./bank-card-interface";
import { BankAccount } from "./bank-account-interface";
import {
  TransactionRequest,
  AdditionalInfo,
} from "./new-transaction-interface";

export interface GlobalContextType {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;

  bankCardsData: BankCard[];
  setBankCardsData: (data: BankCard[]) => void;

  accountsData: BankAccount[];
  setAccountsData: (data: BankAccount[]) => void;

  newTransactionData: TransactionRequest;
  setNewTransactionData: (data: TransactionRequest) => void;

  additionalInfo: AdditionalInfo;
  setAdditionalInfo: (data: AdditionalInfo) => void;
}
