import apiClient from "./apiClient";
import { TransactionRequest } from "@/config/interfaces/new-transaction-interface";
import { TransactionResponse } from "@/config/interfaces/response-interface";

export const postTransaction = async (
  data: TransactionRequest
): Promise<TransactionResponse> => {
  try {
    const response = await apiClient.post("/transactions", data);
    return response.data;
  } catch (error) {
    console.error("Error posting transaction:", error);
    throw error;
  }
};
