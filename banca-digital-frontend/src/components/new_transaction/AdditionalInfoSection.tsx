"use client";
import { useGlobal } from "@/context/GlobalContext";
import { BankAccount } from "@/config/interfaces/bank-account-interface";

function AdditionalInfoSection({
  originAccount,
}: {
  originAccount: BankAccount | undefined;
}) {
  const { additionalInfo, setAdditionalInfo, newTransactionData } = useGlobal();

  return (
    <section className="w-full flex flex-col flex-1 items-center bg-[#F9FAF9] my-[30px] p-6">
      <div className="flex justify-around flex-wrap items-end w-full text-black p-4  mb-4">
        {/* Sección izquierda: selector */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="transactionType"
            className="text-xl font-medium text-gray-800"
          >
            Tipo de transferencia
          </label>
          <select
            title="Tipo de transferencia"
            name="transactionType"
            className="w-[350px] h-[50px] border border-gray-300 rounded-xl px-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
          >
            <option value="">Selecciona una opción</option>
            <option value="terceros">Terceros</option>
            <option value="entre-cuentas-propias">Entre Cuentas Propias</option>
            <option value="terceros-regional">Terceros Regional</option>
          </select>
        </div>

        {/* Sección derecha: informativo balance */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium text-gray-800">Cuenta Origen</h2>
          <div className="flex bg-white justify-between items-center text-black w-[350px] h-[50px] p-2 border rounded-xl border-[black] ">
            <p>
              {originAccount?.currency}{" "}
              <span className="font-medium text-[var(--color-green)]">
                {newTransactionData.origin}
              </span>
            </p>
            <p>
              {newTransactionData.amount.currency == "NIO" ? "C$" : "$"}{" "}
              {originAccount?.balance}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">{/* Aquí van los 4 inputs */}</div>
    </section>
  );
}

export default AdditionalInfoSection;
