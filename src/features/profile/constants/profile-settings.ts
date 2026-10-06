import {
  Settings02Icon,
  CreditCardIcon,
  BadgeIcon,
  BankIcon,
  FingerPrintIcon,
  SlidersHorizontalIcon,
  ShieldUserIcon,
  HelpCircleIcon,
  Comment01Icon,
  LanguageCircleIcon,
} from "@hugeicons/core-free-icons";
import { IconSvgElement } from "@hugeicons/react-native";

export interface ProfileSetting {
  id: string;
  type: string;
  name: string;
  href: string | null;
  icon: IconSvgElement;
  cta?: {
    type: "TOGGLE" | "BUTTON";
  };
}

export const profileSettings: ProfileSetting[] = [
  {
    id: "1",
    type: "SETTINGS",
    name: "Settings",
    href: "/settings",
    icon: Settings02Icon,
  },
  {
    id: "2",
    type: "PLAN_SUBSCRIPTION",
    name: "Plan & Subscription",
    href: "/plan-subscription",
    icon: CreditCardIcon,
  },
  {
    id: "3",
    type: "BADGES",
    name: "Badges",
    href: "/badges",
    icon: BadgeIcon,
  },
  {
    id: "4",
    type: "CREDIT_CARD_LINKED_BANKS",
    name: "My Debit Cards & Linked Banks",
    href: "/credit-cards-linked-banks",
    icon: BankIcon,
  },
  {
    id: "5",
    type: "FINGERPRINT",
    name: "Enable fingerprint/Face ID",
    href: null,
    icon: FingerPrintIcon,
    cta: {
      type: "TOGGLE",
    },
  },
  {
    id: "6",
    type: "PREFERENCES",
    name: "Preferences",
    href: "/preferences",
    icon: SlidersHorizontalIcon,
  },
  {
    id: "7",
    type: "PRIVACY_POLICY",
    name: "Privacy Policy",
    href: "/privacy-policy",
    icon: ShieldUserIcon,
  },
  {
    id: "8",
    type: "HELP_SUPPORT",
    name: "Help & Support",
    href: "/help-support",
    icon: HelpCircleIcon,
  },
  {
    id: "9",
    type: "FEEDBACK",
    name: "Feedback",
    href: "/feedback",
    icon: Comment01Icon,
  },
  {
    id: "10",
    type: "LANGUAGE",
    name: "Language",
    href: "/language",
    icon: LanguageCircleIcon,
  },
];
