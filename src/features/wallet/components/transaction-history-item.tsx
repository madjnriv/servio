import { View, Text } from "react-native";
import { TransactionRecord } from "../types/transaction-history.types";
import { HugeiconsIcon } from "@hugeicons/react-native";
import GiftIcon from "@hugeicons/core-free-icons/GiftIcon";
import ArrowDownLeft01Icon from "@hugeicons/core-free-icons/ArrowDownLeft01Icon";
import ArrowUpRight03Icon from "@hugeicons/core-free-icons/ArrowUpRight03Icon";
import CreditCardValidationIcon from "@hugeicons/core-free-icons/CreditCardValidationIcon";

interface TransactionHistoryItemProps {
  record: TransactionRecord;
}
export const TransactionHistoryItem = ({
  record,
}: TransactionHistoryItemProps) => {
  const recordItemIcon = () => {
    switch (record.kind) {
      case "REWARD":
        return (
          <View className="bg-primary/10 w-10 h-10 items-center justify-center rounded-full">
            <HugeiconsIcon icon={GiftIcon} size={20} className="text-primary" />
          </View>
        );
      case "BANK_WITHDRAWAL":
        return (
          <View className="bg-primary/10 w-10 h-10 items-center justify-center rounded-full">
            <HugeiconsIcon
              icon={ArrowUpRight03Icon}
              size={20}
              className="text-primary"
            />
          </View>
        );
      case "SERVICE_PAYMENT":
        return (
          <View className="bg-primary/10 w-10 h-10 items-center justify-center rounded-full">
            <HugeiconsIcon
              icon={CreditCardValidationIcon}
              size={20}
              className="text-primary"
            />
          </View>
        );
      case "WALLET_TOP_UP":
        return (
          <View className="bg-primary/10 w-10 h-10 items-center justify-center rounded-full">
            <HugeiconsIcon
              icon={ArrowDownLeft01Icon}
              size={20}
              className="text-primary"
            />
          </View>
        );
      default:
        return null;
    }
  };
  return <View>{recordItemIcon()} </View>;
};
