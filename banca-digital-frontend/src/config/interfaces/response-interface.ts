export interface TransactionResponse {
  transaction_number: string;
  description: string;
  bank_description: string;
  transaction_type: string;
  origin: string;
  destination: string;
  transaction_date: string;
  amount: {
    currency: string;
    value: number;
  };
}
