export interface CurrencyRate {
  code: string;
  valueUSD: number;
}

export const ExchangeBaseRates: CurrencyRate[] = [
  { code: "USD", valueUSD: 1 },
  { code: "EUR", valueUSD: 1.12 },
  { code: "NIO", valueUSD: 36.65 },
];
