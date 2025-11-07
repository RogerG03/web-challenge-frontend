import React from "react";

interface NavigationButtonsProps {
  currentStep: number;
  onBack?: () => void;
  onNext?: () => void;
  handlePostTransaction?: () => void;
}

function NavigationButtons({
  currentStep,
  onBack,
  onNext,
  handlePostTransaction,
}: NavigationButtonsProps) {
  return (
    <div>
      <button
        title="Volver"
        disabled={currentStep === 1}
        className="border w-[120px] text-[var(--color-green-dark)] h-[48px] bg-white px-4 py-2 rounded-md mr-4"
        onClick={onBack}
      >
        Atras
      </button>
      <button
        title="Siguiente"
        className="border bg-[var(--color-green-dark)] w-[120px] h-[48px] text-white px-4 py-2 rounded-md"
        onClick={currentStep === 5 ? handlePostTransaction : onNext}
      >
        {currentStep <= 4 ? "Siguiente" : "Confirmar"}
      </button>
    </div>
  );
}

export default NavigationButtons;
