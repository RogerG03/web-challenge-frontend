"use client";
import FirstInputWarning from "@/components/new_transaction/FirstInputWarning";
import InputsSection from "@/components/new_transaction/InputsSection";
import NavigationButtons from "@/components/new_transaction/NavigationButtons";
import TransferWizard from "@/components/transfer_wizard/TransferWizard";
import { useGlobal } from "@/context/GlobalContext";
import { useEffect, useState } from "react";
import { InitialStateNewTransactionPost } from "@/config/contracts/initial-state-new-transaction";
import AdditionalInfoSection from "@/components/new_transaction/AdditionalInfoSection";
import { BankAccount } from "@/config/interfaces/bank-account-interface";
import { postTransaction } from "@/service/postTransaction";
import { TransactionResponse } from "@/config/interfaces/response-interface";
import TransactionResult from "@/components/new_transaction/TransactionResult";

export default function DashboardPage() {
  const [Response, setResponse] = useState<TransactionResponse | null>(null);
  const [WizardStep, setWizardStep] = useState<number>(1);
  const { newTransactionData, setNewTransactionData, accountsData } =
    useGlobal();
  // Obtenemos la cuenta origen seleccionada
  const originAccount: BankAccount | undefined = accountsData.find(
    (acc) => acc.account_number === Number(newTransactionData.origin)
  );

  // Funciones para manejar la navegación del wizard y validaciones----
  const amountExceedsBalance =
    WizardStep === 3 &&
    originAccount &&
    newTransactionData.amount.value > originAccount.balance;

  const handleNextStep = (): void => {
    if (WizardStep === 1 && newTransactionData.origin === "") return;
    if (WizardStep === 2 && newTransactionData.destination === "") return;
    if (
      WizardStep === 3 &&
      (newTransactionData.amount.value === 0 || amountExceedsBalance)
    )
      return;
    setWizardStep(WizardStep + 1);
  };

  const handleBackStep = (): void => {
    setWizardStep(WizardStep - 1);
  };

  // Reiniciar newTransactionData si no hay cuenta origen seleccionada
  useEffect(() => {
    if (newTransactionData.origin === "") {
      setNewTransactionData(InitialStateNewTransactionPost);
    }
    console.log("New Transaction Data:", newTransactionData);
  }, [newTransactionData, setNewTransactionData]);

  //LLamada a api post
  const handlePostTransaction = async () => {
    try {
      const response: TransactionResponse = await postTransaction(
        newTransactionData
      );
      console.log("Transacción exitosa", response);
      setResponse(response);
    } catch (error) {
      console.error("Error al realizar la transacción:", error);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-2xl text-black font-semibold mb-4">Transferir</h1>

      <TransferWizard currentStep={WizardStep} />
      {WizardStep <= 3 && (
        <section className="w-full flex flex-col flex-1 items-center bg-[#F9FAF9] my-[30px]">
          <InputsSection currentStep={WizardStep} />
          <FirstInputWarning WizardStep={WizardStep} />
        </section>
      )}

      {WizardStep === 4 && (
        <section className="w-full flex flex-col flex-1 items-center bg-[#F9FAF9] my-[30px]">
          <AdditionalInfoSection originAccount={originAccount} />
        </section>
      )}
      {WizardStep === 5 && (
        <section className="w-full flex flex-col flex-1 items-center bg-[#F9FAF9] my-[30px] p-6">
          {!Response && (
            <h1 className="text-lg font-semibold text-black">
              Confirme la transacción
            </h1>
          )}
          {Response && (
            <TransactionResult
              setWizardStep={setWizardStep}
              response={Response}
              setResponse={setResponse}
            ></TransactionResult>
          )}
        </section>
      )}

      {!Response && (
        <section className="w-full flex justify-center bg-[white] mb-[10px] my-[30px] ">
          <NavigationButtons
            currentStep={WizardStep}
            onBack={handleBackStep}
            onNext={handleNextStep}
            handlePostTransaction={handlePostTransaction}
          />
        </section>
      )}
    </div>
  );
}
