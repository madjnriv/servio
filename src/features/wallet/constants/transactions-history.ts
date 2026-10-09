import { TransactionRecord } from "../types/transaction-history.types";

export const TRANSACTION_RECORDS: TransactionRecord[] = [
  {
    recordId: "1",
    kind: "SERVICE_PAYMENT",
    totalAmount: 60,
    currencyCode: "USD",
    occurredAt: "2026-10-09T08:30:00+01:00",
    state: "COMPLETED",
    source: {
      channel: "SERVIO_WALLET",
    },
    info: {
      reason: "SERVICE_PAYMENT",
      service: {
        serviceId: "service-001",
        title: "Deep Home Cleaning",
        category: "Cleaning",
        pricingBasis: "DAY",
        quantity: 1,
        unitAmount: 60,
      },
      provider: {
        providerId: "provider-001",
        displayName: "CleanSpace Services",
      },
    },
  },
  {
    recordId: "2",
    kind: "WALLET_TOP_UP",
    totalAmount: 250,
    currencyCode: "USD",
    occurredAt: "2026-10-08T15:20:00+01:00",
    state: "COMPLETED",
    source: {
      channel: "VISA_CARD",
      card: {
        network: "VISA",
        cardNumber: "4242424242424242",
      },
    },
    info: {
      reason: "WALLET_TOP_UP",
      referenceCode: "TOPUP-20261008-001",
      destination: "SERVIO_WALLET",
    },
  },
  {
    recordId: "3",
    kind: "SERVICE_PAYMENT",
    totalAmount: 35,
    currencyCode: "USD",
    occurredAt: "2026-10-08T11:45:00+01:00",
    state: "COMPLETED",
    source: {
      channel: "SERVIO_WALLET",
    },
    info: {
      reason: "SERVICE_PAYMENT",
      service: {
        serviceId: "service-002",
        title: "Pipe Leak Repair",
        category: "Plumbing",
        pricingBasis: "HOUR",
        quantity: 1,
        unitAmount: 35,
      },
      provider: {
        providerId: "provider-002",
        displayName: "Swift Plumbing",
      },
    },
  },
  {
    recordId: "4",
    kind: "BANK_WITHDRAWAL",
    totalAmount: 100,
    currencyCode: "USD",
    occurredAt: "2026-10-07T16:10:00+01:00",
    state: "COMPLETED",
    source: {
      channel: "SERVIO_WALLET",
    },
    info: {
      reason: "BANK_WITHDRAWAL",
      referenceCode: "WD-20261007-001",
      destination: {
        destinationType: "BANK_ACCOUNT",
        bankName: "GTBank",
        accountName: "Demo Customer",
        accountNumber: "0123451234",
      },
    },
  },
  {
    recordId: "5",
    kind: "SERVICE_PAYMENT",
    totalAmount: 40,
    currencyCode: "USD",
    occurredAt: "2026-10-07T10:00:00+01:00",
    state: "COMPLETED",
    source: {
      channel: "VISA_CARD",
      card: {
        network: "VISA",
        cardNumber: "4242424242424242",
      },
    },
    info: {
      reason: "SERVICE_PAYMENT",
      service: {
        serviceId: "service-003",
        title: "Electrical Wiring Fix",
        category: "Electrical",
        pricingBasis: "HOUR",
        quantity: 1,
        unitAmount: 40,
      },
      provider: {
        providerId: "provider-003",
        displayName: "PowerFix Electricals",
      },
    },
  },
  {
    recordId: "6",
    kind: "REWARD",
    totalAmount: 15,
    currencyCode: "USD",
    occurredAt: "2026-10-06T13:25:00+01:00",
    state: "COMPLETED",
    source: {
      channel: "SERVIO_REWARDS",
    },
    info: {
      reason: "WALLET_REWARD",
      reward: {
        rewardId: "reward-001",
        title: "Cleaning Cashback",
        rewardType: "CASHBACK",
        description: "Cashback earned from a completed service payment.",
        relatedServiceId: "service-005",
      },
      addedTo: "SERVIO_WALLET",
    },
  },
  {
    recordId: "7",
    kind: "SERVICE_PAYMENT",
    totalAmount: 70,
    currencyCode: "USD",
    occurredAt: "2026-10-06T09:15:00+01:00",
    state: "COMPLETED",
    source: {
      channel: "SERVIO_WALLET",
    },
    info: {
      reason: "SERVICE_PAYMENT",
      service: {
        serviceId: "service-004",
        title: "General Handyman Service",
        category: "Handyman",
        pricingBasis: "DAY",
        quantity: 1,
        unitAmount: 70,
      },
      provider: {
        providerId: "provider-004",
        displayName: "HandyPro Services",
      },
    },
  },
  {
    recordId: "8",
    kind: "SERVICE_PAYMENT",
    totalAmount: 120,
    currencyCode: "USD",
    occurredAt: "2026-10-05T14:40:00+01:00",
    state: "COMPLETED",
    source: {
      channel: "SERVIO_WALLET",
    },
    info: {
      reason: "SERVICE_PAYMENT",
      service: {
        serviceId: "service-005",
        title: "Interior Wall Painting",
        category: "Painting",
        pricingBasis: "DAY",
        quantity: 1,
        unitAmount: 120,
      },
      provider: {
        providerId: "provider-005",
        displayName: "Prime Coat Painting",
      },
    },
  },
  {
    recordId: "9",
    kind: "BANK_WITHDRAWAL",
    totalAmount: 50,
    currencyCode: "USD",
    occurredAt: "2026-10-05T11:05:00+01:00",
    state: "PENDING",
    source: {
      channel: "SERVIO_WALLET",
    },
    info: {
      reason: "BANK_WITHDRAWAL",
      referenceCode: "WD-20261005-001",
      destination: {
        destinationType: "BANK_ACCOUNT",
        bankName: "Access Bank",
        accountName: "Demo Customer",
        accountNumber: "0123455678",
      },
    },
  },
  {
    recordId: "10",
    kind: "REWARD",
    totalAmount: 30,
    currencyCode: "USD",
    occurredAt: "2026-10-04T17:30:00+01:00",
    state: "COMPLETED",
    source: {
      channel: "SERVIO_REWARDS",
    },
    info: {
      reason: "WALLET_REWARD",
      reward: {
        rewardId: "reward-002",
        title: "Loyal Customer Bonus",
        rewardType: "LOYALTY_BONUS",
        description: "Bonus earned for continued use of Servio services.",
      },
      addedTo: "SERVIO_WALLET",
    },
  },
  {
    recordId: "11",
    kind: "SERVICE_PAYMENT",
    totalAmount: 250,
    currencyCode: "USD",
    occurredAt: "2026-10-04T12:00:00+01:00",
    state: "COMPLETED",
    source: {
      channel: "VISA_CARD",
      card: {
        network: "VISA",
        cardNumber: "4242424242424242",
      },
    },
    info: {
      reason: "SERVICE_PAYMENT",
      service: {
        serviceId: "service-006",
        title: "Room Renovation Service",
        category: "Construction",
        pricingBasis: "MONTH",
        quantity: 1,
        unitAmount: 250,
      },
      provider: {
        providerId: "provider-006",
        displayName: "Urban Build Works",
      },
    },
  },
  {
    recordId: "12",
    kind: "SERVICE_PAYMENT",
    totalAmount: 180,
    currencyCode: "USD",
    occurredAt: "2026-10-03T15:45:00+01:00",
    state: "COMPLETED",
    source: {
      channel: "SERVIO_WALLET",
    },
    info: {
      reason: "SERVICE_PAYMENT",
      service: {
        serviceId: "service-007",
        title: "Office Relocation Help",
        category: "Moving & Logistics",
        pricingBasis: "DAY",
        quantity: 1,
        unitAmount: 180,
      },
      provider: {
        providerId: "provider-007",
        displayName: "MoveRight Logistics",
      },
    },
  },
  {
    recordId: "13",
    kind: "WALLET_TOP_UP",
    totalAmount: 100,
    currencyCode: "USD",
    occurredAt: "2026-10-03T10:20:00+01:00",
    state: "FAILED",
    source: {
      channel: "PAYPAL",
      accountEmail: "customer@example.com",
    },
    info: {
      reason: "WALLET_TOP_UP",
      referenceCode: "TOPUP-20261003-001",
      destination: "SERVIO_WALLET",
    },
  },
  {
    recordId: "14",
    kind: "SERVICE_PAYMENT",
    totalAmount: 30,
    currencyCode: "USD",
    occurredAt: "2026-10-02T14:15:00+01:00",
    state: "COMPLETED",
    source: {
      channel: "SERVIO_WALLET",
    },
    info: {
      reason: "SERVICE_PAYMENT",
      service: {
        serviceId: "service-008",
        title: "Custom Furniture Repair",
        category: "Carpentry",
        pricingBasis: "HOUR",
        quantity: 1,
        unitAmount: 30,
      },
      provider: {
        providerId: "provider-008",
        displayName: "CraftWood Workshop",
      },
    },
  },
  {
    recordId: "15",
    kind: "BANK_WITHDRAWAL",
    totalAmount: 80,
    currencyCode: "USD",
    occurredAt: "2026-10-02T09:00:00+01:00",
    state: "COMPLETED",
    source: {
      channel: "SERVIO_WALLET",
    },
    info: {
      reason: "BANK_WITHDRAWAL",
      referenceCode: "WD-20261002-001",
      destination: {
        destinationType: "BANK_ACCOUNT",
        bankName: "First Bank",
        accountName: "Demo Customer",
        accountNumber: "0123459012",
      },
    },
  },
  {
    recordId: "16",
    kind: "SERVICE_PAYMENT",
    totalAmount: 80,
    currencyCode: "USD",
    occurredAt: "2026-10-01T16:30:00+01:00",
    state: "COMPLETED",
    source: {
      channel: "SERVIO_WALLET",
    },
    info: {
      reason: "SERVICE_PAYMENT",
      service: {
        serviceId: "service-009",
        title: "Fridge and Washing Machine Repair",
        category: "Appliance Repair",
        pricingBasis: "DAY",
        quantity: 1,
        unitAmount: 80,
      },
      provider: {
        providerId: "provider-009",
        displayName: "Home Appliance Care",
      },
    },
  },
  {
    recordId: "17",
    kind: "SERVICE_PAYMENT",
    totalAmount: 100,
    currencyCode: "USD",
    occurredAt: "2026-09-30T12:10:00+01:00",
    state: "PENDING",
    source: {
      channel: "VISA_CARD",
      card: {
        network: "VISA",
        cardNumber: "4242424242424242",
      },
    },
    info: {
      reason: "SERVICE_PAYMENT",
      service: {
        serviceId: "service-010",
        title: "AC Installation & Servicing",
        category: "AC Service",
        pricingBasis: "DAY",
        quantity: 1,
        unitAmount: 100,
      },
      provider: {
        providerId: "provider-010",
        displayName: "CoolBreeze Technicians",
      },
    },
  },
  {
    recordId: "18",
    kind: "SERVICE_PAYMENT",
    totalAmount: 50,
    currencyCode: "USD",
    occurredAt: "2026-09-29T10:35:00+01:00",
    state: "COMPLETED",
    source: {
      channel: "PAYPAL",
      accountEmail: "customer@example.com",
    },
    info: {
      reason: "SERVICE_PAYMENT",
      service: {
        serviceId: "service-011",
        title: "AC Gas Refill",
        category: "AC Service",
        pricingBasis: "HOUR",
        quantity: 1,
        unitAmount: 50,
      },
      provider: {
        providerId: "provider-010",
        displayName: "CoolBreeze Technicians",
      },
    },
  },
  {
    recordId: "19",
    kind: "REWARD",
    totalAmount: 20,
    currencyCode: "USD",
    occurredAt: "2026-09-28T18:00:00+01:00",
    state: "COMPLETED",
    source: {
      channel: "SERVIO_REWARDS",
    },
    info: {
      reason: "WALLET_REWARD",
      reward: {
        rewardId: "reward-003",
        title: "Special Promotional Reward",
        rewardType: "PROMOTIONAL_CREDIT",
        description: "Promotional credit added to the Servio wallet balance.",
        relatedServiceId: "service-012",
      },
      addedTo: "SERVIO_WALLET",
    },
  },
  {
    recordId: "20",
    kind: "SERVICE_PAYMENT",
    totalAmount: 50,
    currencyCode: "USD",
    occurredAt: "2026-09-27T09:25:00+01:00",
    state: "COMPLETED",
    source: {
      channel: "SERVIO_WALLET",
    },
    info: {
      reason: "SERVICE_PAYMENT",
      service: {
        serviceId: "service-012",
        title: "Bathroom Deep Cleaning",
        category: "Cleaning",
        pricingBasis: "DAY",
        quantity: 1,
        unitAmount: 50,
      },
      provider: {
        providerId: "provider-001",
        displayName: "CleanSpace Services",
      },
    },
  },
];
