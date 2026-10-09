export type PaymentMethodKind = "VISA" | "PAYPAL";

export interface SavedPaymentMethodBase {
  methodId: string;
  kind: PaymentMethodKind;
  isDefault: boolean;
}

export interface SavedVisaCard extends SavedPaymentMethodBase {
  kind: "VISA";
  cardholderName: string;
  lastFourDigits: string;
  expiryMonth: number;
  expiryYear: number;
  providerMethodId: string;
}

export interface SavedPayPalAccount extends SavedPaymentMethodBase {
  kind: "PAYPAL";
  accountName: string;
  accountEmail: string;
  providerMethodId: string;
}

export type SavedPaymentMethod = SavedVisaCard | SavedPayPalAccount;
