"use client";
import { useState } from "react";
import TransactionsTable from "./TransactionTable";
import { TableTransactionHistoryData } from "@/config/data_test/table-transaction-history";
import { historyTableButtonsContract } from "@/config/contracts/history-table-buttons-contract";
import DateFilter from "./DateFilter";

export default function HistoryTransactionContainer() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Filtrado por rango de fechas
  const filteredData = TableTransactionHistoryData.filter((transaction) => {
    if (!startDate && !endDate) return true; // sin filtro

    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      setEndDate("");
      return true;
    }

    const transactionDate = new Date(transaction.transaction_date as Date);
    const from = startDate ? new Date(startDate) : new Date("1900-01-01");
    const to = endDate ? new Date(endDate) : new Date("9999-12-31");
    return transactionDate >= from && transactionDate <= to;
  });

  return (
    <section>
      <div className="flex w-full flex-wrap justify-between mb-4">
        {/* Botones superiores */}
        <div>
          {historyTableButtonsContract.map((button) => (
            <button
              key={button.value}
              className={`${
                button.value === "transactions" ? "highlight-item" : ""
              } text-[gray] px-4 py-2 rounded-md mr-2 highlight-item-hover transition-colors`}
            >
              {button.label}
            </button>
          ))}
        </div>

        {/* Filtros por fecha */}
        <DateFilter
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </div>

      <div className="bg-white w- rounded-lg shadow-sm p-4">
        <TransactionsTable data={filteredData} />
      </div>
    </section>
  );
}
