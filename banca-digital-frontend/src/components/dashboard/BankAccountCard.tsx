"use client";
import { useGlobal } from "@/context/GlobalContext";
import Image from "next/image";
import { initialBankCardsData } from "@/config/data_test/bank-account-card-test";
import { BankCard } from "@/config/interfaces/bank-card-interface";
import { useEffect } from "react";

interface BankCardCustomClasses {
  [key: string]: string;
}

export default function BankAccountCards() {
  const cardTypeClasses: BankCardCustomClasses = {
    debit: "bg-green-gradient",
    credit: "bg-blue-gradient",
    corporative: "bg-black-gradient",
  };

  const { bankCardsData, setBankCardsData } = useGlobal();

  useEffect(() => {
    // Cargar los datos iniciales de las tarjetas bancarias en el contexto global
    //De haber una fuente de datos real, aquí se haría la llamada a la API o la lógica para obtener los datos.
    if (bankCardsData.length === 0) {
      setBankCardsData(initialBankCardsData);
    }
  }, [setBankCardsData, bankCardsData]);

  return (
    <div className="flex flex-wrap gap-6 mb-8">
      {bankCardsData.map((card: BankCard) => (
        <article
          key={card.id}
          className={`shadow-2xl bank-card-hover font["Quicksand"] w-88 h-52 bg-white rounded-xl overflow-hidden p-4 flex relative ${
            cardTypeClasses[card.type]
          }`}
        >
          {" "}
          <section className="gap-8 w-full flex flex-col z-10 text-white">
            {/* Logo del banco */}
            <Image
              alt="icono logo lafise"
              src="/dashboard_icons/lafise_bankcard_logo.svg"
              width={86}
              height={28}
            />

            {/* Número de tarjeta */}
            <h3 className="flex gap-8 mt-2 text-lg  ">
              <span>{card.numberMask.firstFour}</span>
              <span>{" **** "}</span>
              <span>{" **** "}</span>
              <span>{card.numberMask.lastFour}</span>
            </h3>
            <div className="mt-2 w-full gap-12 flex items-end justify-start text-sm text-white">
              {/* Titular y fecha de expiración */}
              <p>{card.cardHolder}</p>
              <div className="flex flex-col items-center">
                <p className="text-xs">Expire date</p>
                <p>{card.expiryDate}</p>
              </div>
            </div>
          </section>
          {/*Imagen de fondo decorativa */}
          <Image
            alt="icono logo lafise"
            src="/dashboard_icons/lafise_bankcard_isotype.svg"
            width={227}
            height={215}
            className="!absolute right-0 bottom-0 "
          />
        </article>
      ))}
    </div>
  );
}
