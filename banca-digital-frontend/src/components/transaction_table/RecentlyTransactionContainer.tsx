import React from "react";
import TransactionsTable from "./TransactionTable";
import { TableTransactionRecentlyData } from "@/config/data_test/table-transaction-recently";

export default function RecentlyTransactionContainer() {
  return (
    <div className="bg-white w- rounded-lg shadow-sm p-6">
      <TransactionsTable data={TableTransactionRecentlyData} />
    </div>
  );
}
