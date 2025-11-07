"use client";

import InputForm from "../input_form/GeneralInputForm";
import { useGlobal } from "@/context/GlobalContext";
import { ChangeEvent } from "react";
import { TransactionRequest } from "@/config/interfaces/new-transaction-interface";

interface InputsSectionProps {
  currentStep: number;
}

export default function InputsSection({ currentStep }: InputsSectionProps) {
  const { accountsData, newTransactionData, setNewTransactionData } =
    useGlobal();

  const handleOriginChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedAccount = accountsData.find(
      (acc) => acc.account_number === Number(e.target.value)
    );

    setNewTransactionData({
      ...newTransactionData,
      origin: e.target.value,
      // Guardamos la currency asociada a la cuenta origen
      amount: {
        ...newTransactionData.amount,
        currency: selectedAccount?.currency || "",
      },
    });
  };

  const handleDestinationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setNewTransactionData({
      ...newTransactionData,
      destination: e.target.value,
    });
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTransactionData({
      ...newTransactionData,
      amount: { ...newTransactionData.amount, value: Number(e.target.value) },
    });
  };

  if (currentStep === 1) {
    return (
      <InputForm
        label="Selecciona la cuenta origen"
        type="select"
        id="origin"
        value={newTransactionData.origin}
        onChange={(e) =>
          handleOriginChange(e as ChangeEvent<HTMLSelectElement>)
        }
        options={accountsData.map((acc) => ({
          label: `${acc.alias} - ${acc.account_number}`,
          value: acc.account_number,
        }))}
        required
      />
    );
  }

  if (currentStep === 2) {
    const destinationOptions = accountsData
      .filter((acc) => acc.account_number !== Number(newTransactionData.origin))
      .map((acc) => ({
        label: `${acc.alias} - ${acc.account_number}`,
        value: acc.account_number,
      }));

    return (
      <InputForm
        label="Selecciona la cuenta destino"
        type="select"
        id="destination"
        value={newTransactionData.destination}
        onChange={(e) =>
          handleDestinationChange(e as ChangeEvent<HTMLSelectElement>)
        }
        options={destinationOptions}
        required
      />
    );
  }

  if (currentStep === 3) {
    return (
      <InputForm
        label="Monto de la transacción"
        type="number"
        id="amount"
        value={newTransactionData.amount.value}
        onChange={(e) => handleAmountChange(e as ChangeEvent<HTMLInputElement>)}
        required
      />
    );
  }

  return null;
}
