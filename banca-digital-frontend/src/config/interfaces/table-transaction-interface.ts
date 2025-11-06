export interface TransactionTable {
  transaction_number: string;
  description?: string;
  amount?: { currency: string; value: number };
  balance?: number;
  transaction_date?: Date;
}
