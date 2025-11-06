import AccountCard from "@/components/dashboard/AccountCard";
import BankCard from "@/components/dashboard/BankCard";

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
    </div>
  );
}
