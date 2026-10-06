import Settings02Icon from "@hugeicons/core-free-icons/Settings02Icon";
import CreditCardIcon from "@hugeicons/core-free-icons/CreditCardIcon";
import SoftwareLicenseIcon from "@hugeicons/core-free-icons/SoftwareLicenseIcon";
import CardExchange01Icon from "@hugeicons/core-free-icons/CardExchange01Icon";
import ScanFaceIcon from "@hugeicons/core-free-icons/ScanFaceIcon";
import SlidersHorizontalIcon from "@hugeicons/core-free-icons/SlidersHorizontalIcon";
import ShieldUserIcon from "@hugeicons/core-free-icons/ShieldUserIcon";
import HelpCircleIcon from "@hugeicons/core-free-icons/HelpCircleIcon";
import Comment01Icon from "@hugeicons/core-free-icons/Comment01Icon";
import LanguageCircleIcon from "@hugeicons/core-free-icons/LanguageCircleIcon";
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

/**
 * Account
 * Settings, subscription, badges, cards and security.
 */
export const accountSettings: ProfileSetting[] = [
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
    icon: SoftwareLicenseIcon,
  },
  {
    id: "4",
    type: "CREDIT_CARD_LINKED_BANKS",
    name: "My Debit Cards & Linked Banks",
    href: "/credit-cards-linked-banks",
    icon: CardExchange01Icon,
  },
  {
    id: "5",
    type: "FINGERPRINT",
    name: "Enable fingerprint/Face ID",
    href: null,
    icon: ScanFaceIcon,
    cta: {
      type: "TOGGLE",
    },
  },
];

/**
 * App preferences and privacy.
 */
export const preferencesSettings: ProfileSetting[] = [
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
];

/**
 * User feedback and localization.
 */
export const generalSettings: ProfileSetting[] = [
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
