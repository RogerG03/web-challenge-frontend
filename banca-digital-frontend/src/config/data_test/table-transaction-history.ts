import { TransactionTable } from "../interfaces/table-transaction-interface";

export const TableTransactionHistoryData: TransactionTable[] = [
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

  {
    transaction_number: "123461",
    description: "Retiro de efectivo (ATM)",
    amount: { currency: "USD", value: 300 },
    balance: 6925,
    transaction_date: new Date("2025-05-30T11:40:00Z"),
  },
  {
    transaction_number: "123462",
    description: "Intereses ganados",
    amount: { currency: "USD", value: 5.5 },
    balance: 6930.5,
    transaction_date: new Date("2025-05-01T00:00:00Z"),
  },
  {
    transaction_number: "123463",
    description: "Suscripción streaming",
    amount: { currency: "USD", value: 15.99 },
    balance: 6914.51,
    transaction_date: new Date("2025-04-25T08:00:00Z"),
  },
  {
    transaction_number: "123464",
    description: "Pago de tarjeta de crédito",
    amount: { currency: "USD", value: 1500 },
    balance: 5414.51,
    transaction_date: new Date("2025-03-15T18:00:00Z"),
  },
  {
    transaction_number: "123465",
    description: "Compra supermercado",
    amount: { currency: "NIO", value: 3500 },
    balance: 5064.51,
    transaction_date: new Date("2025-02-10T19:30:00Z"),
  },
  {
    transaction_number: "123466",
    description: "Bono navideño",
    amount: { currency: "USD", value: 500 },
    balance: 5564.51,
    transaction_date: new Date("2025-01-05T10:00:00Z"),
  },
  {
    transaction_number: "123467",
    description: "Cena de fin de año",
    amount: { currency: "NIO", value: 2500 },
    balance: 5314.51,
    transaction_date: new Date("2024-12-28T20:45:00Z"),
  },
];
