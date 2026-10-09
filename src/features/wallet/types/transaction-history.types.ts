export type TransactionKind =
  "SERVICE_PAYMENT" | "WALLET_TOP_UP" | "BANK_WITHDRAWAL" | "REWARD";

export type TransactionState = "COMPLETED" | "PENDING" | "FAILED";

export type CurrencyCode = "USD";

export type WalletSource = {
  channel: "SERVIO_WALLET";
};

export type PayPalSource = {
  channel: "PAYPAL";
  accountEmail: string;
};

export type VisaCardSource = {
  channel: "VISA_CARD";
  card: {
    network: "VISA";
    cardNumber: string;
  };
};

export type RewardSource = {
  channel: "SERVIO_REWARDS";
};

export type PaymentSource = WalletSource | PayPalSource | VisaCardSource;

export type ExternalFundingSource = PayPalSource | VisaCardSource;

export interface TransactionRecordBase {
  recordId: string;
  totalAmount: number;
  currencyCode: CurrencyCode;
  occurredAt: string;
  state: TransactionState;
}

export interface ServicePaymentInfo {
  reason: "SERVICE_PAYMENT";
  service: {
    serviceId: string;
    title: string;
    category: string;
    pricingBasis: "HOUR" | "DAY" | "MONTH" | "YEAR";
    quantity: number;
    unitAmount: number;
  };
  provider: {
    providerId: string;
    displayName: string;
  };
}

export interface WalletTopUpInfo {
  reason: "WALLET_TOP_UP";
  referenceCode: string;
  destination: "SERVIO_WALLET";
}

export interface BankWithdrawalInfo {
  reason: "BANK_WITHDRAWAL";
  referenceCode: string;
  destination: {
    destinationType: "BANK_ACCOUNT";
    bankName: string;
    accountName: string;
    accountNumber: string;
  };
}

export interface WalletRewardInfo {
  reason: "WALLET_REWARD";
  reward: {
    rewardId: string;
    title: string;
    rewardType: "CASHBACK" | "PROMOTIONAL_CREDIT" | "LOYALTY_BONUS";
    description: string;
    relatedServiceId?: string;
  };
  addedTo: "SERVIO_WALLET";
}

export interface ServicePaymentRecord extends TransactionRecordBase {
  kind: "SERVICE_PAYMENT";
  source: PaymentSource;
  info: ServicePaymentInfo;
}

export interface WalletTopUpRecord extends TransactionRecordBase {
  kind: "WALLET_TOP_UP";
  source: ExternalFundingSource;
  info: WalletTopUpInfo;
}

export interface BankWithdrawalRecord extends TransactionRecordBase {
  kind: "BANK_WITHDRAWAL";
  source: WalletSource;
  info: BankWithdrawalInfo;
}

export interface WalletRewardRecord extends TransactionRecordBase {
  kind: "REWARD";
  source: RewardSource;
  info: WalletRewardInfo;
}

export type TransactionRecord =
  | ServicePaymentRecord
  | WalletTopUpRecord
  | BankWithdrawalRecord
  | WalletRewardRecord;
