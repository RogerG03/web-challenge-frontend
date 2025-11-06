import HistoryTransactionContainer from "@/components/transaction_table/HistoryTransactionContainer";

export default function DashboardPage() {
  return (
    <section>
      <h1 className="text-2xl text-black font-semibold mb-4">
        Mis Transacciones
      </h1>
      <HistoryTransactionContainer></HistoryTransactionContainer>
    </section>
  );
}
