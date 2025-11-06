export interface HistoryTableButtonsContract {
  label: string;
  value: string;
}

export const historyTableButtonsContract: HistoryTableButtonsContract[] = [
  { label: "Movimientos", value: "transactions" },
  { label: "Estado", value: "status" },
  { label: "Detalles", value: "details" },
  { label: "Fondo no disponible", value: "insufficient_funds" },
];
