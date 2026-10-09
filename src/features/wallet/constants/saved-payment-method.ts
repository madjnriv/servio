import { SavedPaymentMethod } from "../types/payment-method";

export const SAVED_PAYMENT_METHODS: SavedPaymentMethod[] = [
  {
    methodId: "1",
    kind: "VISA",
    isDefault: true,
    cardholderName: "Daniel Morgan",
    lastFourDigits: "4242",
    expiryMonth: 8,
    expiryYear: 2028,
    providerMethodId: "demo_visa_method_001",
  },

  {
    methodId: "2",
    kind: "PAYPAL",
    isDefault: false,
    accountName: "Daniel Morgan",
    accountEmail: "daniel@example.com",
    providerMethodId: "demo_paypal_method_001",
  },
];
