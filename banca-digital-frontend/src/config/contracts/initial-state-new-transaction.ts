import { TransactionRequest } from "../interfaces/new-transaction-interface";

export const InitialStateNewTransactionPost: TransactionRequest = {
  origin: "",
  destination: "",
  amount: { currency: "", value: 0 },
};

export const InitialStateAddtionalInfo = {
  type: "",
  concept: "",
  reference: "",
  email: "",
};
