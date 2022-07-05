export type PaymentMethodType = 3 | 6 | 12;

export type SequraPaymentType = {
  instalment_count: PaymentMethodType;
  apr: { value: number; string: string };
  total_with_tax: { value: number; string: string };
  cost_of_credit: { value: number; string: string };
  cost_of_credit_pct: { value: number; string: string };
  grand_total: { value: number; string: string };
  max_financed_amount: { value: number; string: string };
  instalment_amount: { value: number; string: string };
  instalment_fee: { value: number; string: string };
  instalment_total: { value: number; string: string };
};
