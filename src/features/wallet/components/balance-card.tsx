import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/shared/components/card";
import { HugeiconsIcon } from "@hugeicons/react-native";
import Dollar02Icon from "@hugeicons/core-free-icons/Dollar02Icon";
import ChartUpIcon from "@hugeicons/core-free-icons/ChartUpIcon";
import { View, Text } from "react-native";
import { RATE, RATE_PERCENT, TOTAL_BALANCE } from "../constants/balance";

export const BalanceCard = () => {
  return (
    <Card className="border-0 bg-transparent">
      <CardHeader className="py-0 px-0 gap-0">
        <CardDescription>Total balance</CardDescription>
      </CardHeader>
      <CardContent className="-mt-3">
        <View className="flex-row items-center ">
          <HugeiconsIcon icon={Dollar02Icon} size={35} strokeWidth={2} />
          <Text className="flex-row items-center text-4xl font-semibold">
            {TOTAL_BALANCE}
          </Text>
        </View>
        <View className="mt-1 flex-row gap-1 items-center">
          <HugeiconsIcon
            icon={ChartUpIcon}
            size={12}
            className="text-green-700"
          />
          <Text className="text-green-700 text-sm">
            ${RATE}({RATE_PERCENT}%)
          </Text>
        </View>
      </CardContent>
    </Card>
  );
};
