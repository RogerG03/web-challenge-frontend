import { TransactionTable } from "@/config/interfaces/table-transaction-interface";
import React from "react";
import { getFormattedDate } from "@/utils/getFormattedDate";

interface TransactionsTableProps {
  data: TransactionTable[];
}

export default function TransactionsTable({ data }: TransactionsTableProps) {
  return (
    <>
      {/* Cuerpo de la Tabla */}
      <table className="text-center min-w-full divide-y divide-gray-200">
        {/* Cabecera de las Columnas */}
        <thead className="font-bold text-gray-500 text-sm">
          <tr>
            <th className="py-2  w-[36px]">Fecha</th>{" "}
            <th className="py-2  pl-4">Descripción</th>
            <th className="py-2  ">Débito</th>
            <th className="py-2  ">Balance</th>
          </tr>
        </thead>

        {/* Filas de Transacciones */}
        <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
          {data.map((tx, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="py-3 whitespace-nowrap text-xs w-[36px]">
                {getFormattedDate(tx.transaction_date as Date)}
              </td>
              <td className="py-3 whitespace-nowrap text-sm font-medium pl-4">
                {tx.description}
              </td>
              <td className="py-3 whitespace-nowrap text-sm ">
                {tx.amount?.currency} {tx.amount?.value}
              </td>
              <td className="py-3 whitespace-nowrap text-sm font-semibold ">
                {tx.amount?.currency} {tx.balance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
