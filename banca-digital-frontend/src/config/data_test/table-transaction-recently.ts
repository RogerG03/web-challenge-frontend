import { TransactionTable } from "../interfaces/table-transaction-interface";

export const TableTransactionRecentlyData: TransactionTable[] = [
  {
    transaction_number: "123456",
    description: "Paga quincenal",
    amount: { currency: "USD", value: 1000 },
    balance: 7500,
    transaction_date: new Date("2025-06-09T14:15:22Z"),
  },
  {
    transaction_number: "123457",
    description: "Transferencia a terceros",
    amount: { currency: "NIO", value: 500 },
    balance: 7000,
    transaction_date: new Date("2025-06-08T10:30:00Z"),
  },
  {
    transaction_number: "123458",
    description: "Depósito en efectivo",
    amount: { currency: "NIO", value: 1500 },
    balance: 8500,
    transaction_date: new Date("2025-06-07T16:45:15Z"),
  },
  {
    transaction_number: "123459",
    description: "Pago de servicios",
    amount: { currency: "USD", value: 75 },
    balance: 8425,
    transaction_date: new Date("2025-06-06T09:20:30Z"),
  },
  {
    transaction_number: "123460",
    description: "Compra en línea",
    amount: { currency: "NIO", value: 1200 },
    balance: 7225,
    transaction_date: new Date("2025-06-05T13:10:45Z"),
  },
];
