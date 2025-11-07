import { useGlobal } from "@/context/GlobalContext";

function FirstInputWarning({ WizardStep }: { WizardStep: number }) {
  const { newTransactionData, accountsData } = useGlobal();

  // Obtenemos la cuenta origen seleccionada
  const originAccount = accountsData.find(
    (acc) => acc.account_number === Number(newTransactionData.origin)
  );

  const amountExceedsBalance =
    WizardStep === 3 &&
    originAccount &&
    newTransactionData.amount.value > originAccount.balance;

  return (
    <>
      {/*Informativas */}
      <div>
        {WizardStep <= 3 && newTransactionData.origin && (
          <p className="highlight-item font-semibold mb-2 p-2 rounded-lg">
            Balance disponible: {originAccount ? originAccount.balance : 0}{" "}
            {originAccount?.currency}
          </p>
        )}
      </div>
      {/*Advertencias*/}
      <div>
        {newTransactionData.origin === "" && WizardStep === 1 && (
          <p className="text-red-500 mt-2">
            ¡Por favor, selecciona una cuenta origen para continuar!
          </p>
        )}

        {newTransactionData.destination === "" && WizardStep === 2 && (
          <p className="text-red-500 mt-2">
            ¡Por favor, selecciona una cuenta destino para continuar!
          </p>
        )}

        {newTransactionData.amount.value === 0 && WizardStep === 3 && (
          <p className="text-red-500 mt-2">
            ¡Por favor, ingresa un monto para continuar!
          </p>
        )}

        {amountExceedsBalance && (
          <p className="text-red-500 mt-2">
            ¡El monto no puede ser mayor al balance disponible de la cuenta
            origen!
          </p>
        )}
      </div>
    </>
  );
}

export default FirstInputWarning;
