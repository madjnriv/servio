import { View, Text } from "react-native";
import { TransactionRecord } from "../types/transaction-history.types";
import { HugeiconsIcon } from "@hugeicons/react-native";
import GiftIcon from "@hugeicons/core-free-icons/GiftIcon";
import ArrowDownLeft01Icon from "@hugeicons/core-free-icons/ArrowDownLeft01Icon";
import ArrowUpRight03Icon from "@hugeicons/core-free-icons/ArrowUpRight03Icon";
import ArrowDataTransferHorizontalIcon from "@hugeicons/core-free-icons/ArrowDataTransferHorizontalIcon";

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
              icon={ArrowDataTransferHorizontalIcon}
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
  const transactionTitle = (() => {
    if (record.kind === "SERVICE_PAYMENT") {
      if (
        record.info.service.title.includes("Service") ||
        record.info.service.title.includes("service")
      ) {
        return record.info.service.title;
      }
      return `${record.info.service.title} service`;
    }

    if (record.kind === "REWARD") {
      return record.info.reward.title;
    }

    if (record.kind === "BANK_WITHDRAWAL") {
      return `Withdrawal to ${record.info.destination.accountName}`;
    }

    return "Wallet Top Up";
  })();
  const transactionDate = new Date(record.occurredAt);
  const transactionSign = (() => {
    if (
      record.kind === "SERVICE_PAYMENT" ||
      record.kind === "BANK_WITHDRAWAL"
    ) {
      return "-";
    }
    return "+";
  })();

  return (
    <View className="flex-row items-center gap-3 w-full">
      {recordItemIcon()}
      <View className="flex-row items-baseline justify-between flex-1">
        {/* TRANSACTION DATE AND TITLE */}
        <View>
          <Text className="text-foreground/80 font-medium">
            {transactionTitle}
          </Text>
          <Text className="text-sm text-muted-foreground/50">
            {transactionDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </Text>
        </View>

        {/* AMOUNT */}
        <View>
          <Text
            className={`font-medium ${
              record.kind === "SERVICE_PAYMENT" ||
              record.kind === "BANK_WITHDRAWAL"
                ? "text-destructive"
                : "text-green-500"
            }`}
          >
            {transactionSign} {record.currencyCode ? "$" : null}
            {record.totalAmount}
          </Text>
        </View>
      </View>
    </View>
  );
};
