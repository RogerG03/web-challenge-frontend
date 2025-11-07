export const FirstInputsNewTransaction = [
  {
    type: "select",
    label: "Selecciona la cuenta origen",
    required: true,
    id: "origin",
  },
  {
    type: "select",
    label: "Selecciona la cuenta destino",
    required: true,
    id: "destination",
  },
];

export const AmountInputsNewTransaction = [
  {
    type: "number",
    label: "Monto de la Transacción",
    required: true,
    id: "amount",
  },
];
