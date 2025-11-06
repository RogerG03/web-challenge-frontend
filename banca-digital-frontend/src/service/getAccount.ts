import apiClient from "./apiClient";
import { BankAccount } from "@/config/interfaces/bank-account-interface"; //

export const getAccount = async (
  accountId: string | number
): Promise<BankAccount> => {
  try {
    const response = await apiClient.get<BankAccount>(`/accounts/${accountId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching account:", error);
    throw error;
  }
};
