import BankAccountCard from "@/components/dashboard/BankAccountCard";

export default function DashboardPage() {
  return (
    <div>
      <section>
        <h1 className="text-2xl text-black font-semibold mb-4">Mis Tarjetas</h1>

        <BankAccountCard></BankAccountCard>
      </section>
      <section>
        <h1 className="text-2xl text-black font-semibold mb-4">Cuentas</h1>
      </section>
    </div>
  );
}
