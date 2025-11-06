"use client";

import { useGlobal } from "@/context/GlobalContext";
import { getAccount } from "@/service/getAccount";
import Image from "next/image";
import { useEffect, useState } from "react";
import { accountData } from "@/config/data_test/account-card-test";
import { BankAccount } from "@/config/interfaces/bank-account-interface";

const BtnIconCopy: string = "/dashboard_icons/btn_copiar_icon.svg";
const BtnIconCopied: string = "/dashboard_icons/texto_copiado_icon.svg";

export default function AccountCard() {
  const [copied, setCopied] = useState<string | null>(null);

  //Fetch data
  const { accountsData, setAccountsData } = useGlobal();

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data: BankAccount = await getAccount("1");
        //Por propositos generales, se añaden 2 más cuentas de prueba
        setAccountsData([data, accountData[0], accountData[1]]);
      } catch (error) {
        console.error(error);
        setAccountsData(accountData);
      }
    };

    fetchAccounts();
  }, [setAccountsData]);

  console.log("Cuentas cargadas:", accountsData);

  //Funcion para copiar al portapapeles
  const handleCopy = async (accountNumber: string) => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(accountNumber);
      setTimeout(() => setCopied(null), 2000);
    } catch (error) {
      console.error("Error al copiar:", error);
    }
  };
  return (
    <div className="flex flex-wrap gap-6 mb-8">
      {/* Card de la cuenta */}
      {accountsData?.map((account, index) => (
        <article
          key={index}
          className="flex flex-col bg-white p-4 rounded-xl shadow w-[335px] relative"
        >
          <section className="flex flex-col gap-2">
            <h2 className="text-black text-xl font-semibold">
              {account.alias}
            </h2>
            {/* Número de cuenta con botón de copiar */}
            <div className="flex gap-2 items-center w-fit">
              <p className="highlight-item px-2 py-1 rounded">
                {account.account_number}
              </p>
              <button
                id={`copy-button-${index}`}
                disabled={copied == account.account_number.toString()}
                title="copiar"
                className="flex"
                onClick={() => handleCopy(account.account_number.toString())}
              >
                <Image
                  src={
                    copied == account.account_number.toString()
                      ? BtnIconCopied
                      : BtnIconCopy
                  }
                  alt="Copiar"
                  width={20}
                  height={20}
                />
              </button>
              <p className="text-[var(--color-green)] text-xs font-medium">
                {copied == account.account_number.toString() ? "¡Copiado!" : ""}
              </p>
            </div>
          </section>
          {/* Saldo de la cuenta */}
          <section className="mt-4">
            <p className="text-black text-xl font-semibold">
              {account.currency} {account.balance.toLocaleString()}
            </p>
          </section>

          {/* Bandera según moneda */}
          <Image
            alt={`icono bandera ${account.currency}`}
            src={`/flag_icons/${account.currency}.svg`}
            width={40}
            height={40}
            className="!absolute top-4 right-4 rounded-full"
          />
        </article>
      ))}
    </div>
  );
}
