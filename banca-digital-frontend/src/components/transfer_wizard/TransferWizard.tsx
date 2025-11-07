import React from "react";
import Image from "next/image";

interface Step {
  id: number;
  label: string;
  subtitle: string;
}

interface TransferWizardProps {
  currentStep: number;
}

const TransferWizard: React.FC<TransferWizardProps> = ({ currentStep }) => {
  const steps: Step[] = [
    { id: 1, label: "Cuenta origen", subtitle: "Paso 1" },
    { id: 2, label: "Cuenta destino", subtitle: "Paso 2" },
    { id: 3, label: "Monto a transferir", subtitle: "Paso 3" },
    { id: 4, label: "Datos adicionales", subtitle: "Paso 4" },
  ];

  return (
    <section className="w-full flex justify-center bg-white-50 mb-[10px] my-[30px]">
      <div className="flex items-center justify-between w-[100%] relative">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Paso */}
            <div className="text-center relative flex-1">
              {/* Círculo */}
              <div
                className={`
                    flex items-center justify-center mx-auto 
                    mb-[10px] rounded-full text-white 
                    text-sm transition-all duration-300 ease-in-out z-10 
                    
                    ${
                      step.id < currentStep // Paso completado (Fondo verde)
                        ? "bg-[#3b8668]"
                        : currentStep === step.id // Paso actual (Borde gris, fondo blanco)
                        ? "w-[18px] h-[18px] border border-gray-300 bg-white text-transparent" // Usar text-transparent si no hay número
                        : "w-[28px] h-[28px] bg-white" // Paso futuro (Fondo blanco)
                    }
                    
                    ${
                      currentStep === step.id
                        ? "w-[18px] h-[18px]" // Estilo de punto pequeño con borde
                        : "w-[28px] h-[28px]" // Estilo de círculo grande
                    }
                    ${
                      currentStep === step.id
                        ? "border border-gray-300"
                        : "border-transparent"
                    }
                `}
              >
                {step.id < currentStep ? (
                  <Image
                    src="/check_icon.svg"
                    alt="Check icon"
                    width={13}
                    height={14}
                  />
                ) : (
                  <div
                    className={`rounded-full w-3 h-3 bg-[#3b8668] transform scale-90`}
                  />
                )}
              </div>

              {/* Texto debajo */}
              <div className="mt-[10px] text-[#777] text-[14px] mb-[2px]">
                {step.subtitle}
              </div>
              <div
                className={`font-semibold text-[15px] ${
                  step.id <= currentStep ? "text-black" : "text-black/50"
                }`}
              >
                {step.label}
              </div>
            </div>

            {/* Línea entre pasos */}
            {index < Math.min(currentStep - 1, steps.length - 1) && (
              <hr
                className="!absolute z-0 h-[4px] border-none w-[23%] bg-[#3b8668] top-3 transform -translate-x-1/2"
                //LINEA NECESARIA PORQUE TAILWIND NO PERMITE CALC EN LEFT DIRECTAMENTE
                style={{
                  left: `calc(${(index + 1) * (100 / steps.length)}% - 0%)`,
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default TransferWizard;
