interface Amount {
  currency: string;
  value: number;
}

export interface TransactionRequest {
  origin: string;
  destination: string;
  amount: Amount;
}

export interface AdditionalInfo {
  type: string;
  concept: string;
  reference: string;
  email: string;
}
