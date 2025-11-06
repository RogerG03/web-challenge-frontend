"use client";

import Image from "next/image";
import { useState } from "react";

const BtnIconCopy: string = "/dashboard_icons/btn_copiar_icon.svg";
const BtnIconCopied: string = "/dashboard_icons/texto_copiado_icon.svg";

export default function AccountCard() {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("1234567890");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error al copiar:", error);
    }
  };
  return (
    <div className="flex flex-wrap gap-6 mb-8">
      {/* Card de la cuenta */}
      <article className="flex flex-col bg-white p-4 rounded-xl shadow w-[355px] relative">
        <section className="flex flex-col gap-2 ">
          <h2 className="text-black text-xl font-semibold">
            Cuenta de Ahorros
          </h2>
          {/* Número de cuenta con botón de copiar */}
          <div className="flex gap-2 items-center w-fit ">
            <p className="highlight-item px-2 py-1 rounded">1234567890</p>
            <button
              disabled={copied}
              title="copiar"
              className="flex "
              onClick={handleCopy}
            >
              <Image
                src={copied ? BtnIconCopied : BtnIconCopy}
                alt="Copiar"
                width={20}
                height={20}
              />
            </button>
            <p className="text-[var(--color-green)] text-xs font-medium">
              {copied ? "¡Copiado!" : ""}
            </p>
          </div>
        </section>
        {/* Saldo de la cuenta */}
        <section className="mt-4">
          <p className="text-black text-xl font-semibold">C$ {"5,000.00"}</p>
        </section>

        {/*Bandera */}
        <Image
          alt="icono bandera nicaragua"
          src={"/flag_icons/NIO.svg"}
          width={40}
          height={40}
          className="!absolute top-4 right-4 rounded-full"
        />
      </article>
    </div>
  );
}
