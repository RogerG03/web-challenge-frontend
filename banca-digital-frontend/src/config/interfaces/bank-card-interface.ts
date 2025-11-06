export interface BankCard {
  id: string;
  numberMask: {
    firstFour: string;
    lastFour: string;
  };
  cardHolder: string;
  expiryDate: string;
  type: "debit" | "credit" | "corporative";
}
