"use client";

import React from "react";
import { TransactionResponse } from "@/config/interfaces/response-interface";
import { getFormattedDate } from "@/utils/getFormattedDate";
import { useGlobal } from "@/context/GlobalContext";
import { InitialStateNewTransactionPost } from "@/config/contracts/initial-state-new-transaction";

interface TransactionResultProps {
  setWizardStep: React.Dispatch<React.SetStateAction<number>>;
  response: TransactionResponse;
  setResponse: React.Dispatch<React.SetStateAction<TransactionResponse | null>>;
}
export default function TransactionResult({
  response,
  setWizardStep,
  setResponse,
}: TransactionResultProps) {
  const { setNewTransactionData } = useGlobal();

  const ResetValue = () => {
    setWizardStep(1);
    setResponse(null);
    setNewTransactionData(InitialStateNewTransactionPost);
  };
  return (
    <div className="bg-white text-black rounded-xl shadow-md border border-gray-200 p-6 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4 border-b border-gray-200 pb-2">
        Transacción Exitosa
      </h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500 font-medium">
            Tipo de transacción:
          </span>
          <span className="ml-2 text-gray-900">
            {response?.transaction_type}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 font-medium">Descripción:</span>
          <span className="ml-2 text-gray-900">{response?.description}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 font-medium">Banco:</span>
          <span className="ml-2 text-gray-900">
            {response?.bank_description}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 font-medium">Cuenta de origen:</span>
          <span className="ml-2 text-gray-900">{response?.origin}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 font-medium">Cuenta destino:</span>
          <span className="ml-2 text-gray-900">{response?.destination}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 font-medium">Fecha:</span>
          <span className="ml-2 text-gray-900">
            {getFormattedDate(new Date(response?.transaction_date) as Date)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 font-medium">
            Número de transacción:
          </span>
          <span className="ml-2 text-gray-900">
            {response?.transaction_number}
          </span>
        </div>

        <div className="flex justify-between border-t border-gray-200 pt-3 mt-3 text-base">
          <span className="text-gray-700 font-semibold">Monto:</span>
          <span className="font-bold ml-2 text-gray-900">
            {response?.amount.currency === "NIO" ? "C$" : "$"}{" "}
            {response?.amount.value}
          </span>
        </div>
      </div>

      <button
        onClick={ResetValue}
        className="mt-6 w-full bg-gray-900 text-white rounded-lg py-2.5 font-medium hover:bg-gray-800 transition-colors"
      >
        Realizar otra transferencia
      </button>
    </div>
  );
}
