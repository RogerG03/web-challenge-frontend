import { BankCard } from "../interfaces/bank-card-interface";

export const initialBankCardsData: BankCard[] = [
  {
    id: "debit-card-1",
    numberMask: {
      firstFour: "5325",
      lastFour: "9033",
    },
    cardHolder: "Mike Smith",
    expiryDate: "06/22",
    type: "debit",
  },
  {
    id: "credit-card-2",
    numberMask: {
      firstFour: "5789",
      lastFour: "2847",
    },
    cardHolder: "Mike Smith",
    expiryDate: "04/24",
    type: "credit",
  },
  {
    id: "corporative-card-3",
    numberMask: {
      firstFour: "4809",
      lastFour: "2234",
    },
    cardHolder: "Mike Smith",
    expiryDate: "09/24",
    type: "corporative",
  },
];

/*NOTA ACLARATORIA: Los tipos de tarjeta se simulan de esta forma para propositos de pruebas, 
y utilizar los estilos indicados en el diseño. En entornos reales, se deben utilizar los tipos 
de tarjeta adecuados y seguir las pautas de diseño establecidas. */
