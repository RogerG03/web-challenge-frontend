import AccountCard from "@/components/dashboard/AccountCard";
import BankCard from "@/components/dashboard/BankCard";
import RecentlyTransactionContainer from "@/components/transaction_table/RecentlyTransactionContainer";

export default function DashboardPage() {
  return (
    <div>
      <section>
        <h1 className="text-2xl text-black font-semibold mb-4">Mis Tarjetas</h1>
        <BankCard></BankCard>
      </section>
      <section>
        <h1 className="text-2xl text-black font-semibold mb-4">Cuentas</h1>
        <AccountCard></AccountCard>
      </section>
      <section>
        <h1 className="text-2xl text-black font-semibold mb-4">
          Mis Transacciones Recientes
        </h1>
        <RecentlyTransactionContainer></RecentlyTransactionContainer>
      </section>
    </div>
  );
}
