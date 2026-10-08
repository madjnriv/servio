import { View, Text } from "react-native";
import React from "react";
import { Button } from "@/shared/components/button";
import { HugeiconsIcon } from "@hugeicons/react-native";
import SentIcon from "@hugeicons/core-free-icons/SentIcon";
import PlusIcon from "@hugeicons/core-free-icons/PlusIcon";
import Atm02Icon from "@hugeicons/core-free-icons/Atm02Icon";

export const WalletCTA = () => {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center gap-3">
        <Button icon className="px-5 py-2 bg-card gap-x-2 border border-border">
          <HugeiconsIcon
            icon={SentIcon}
            className="text-muted-foreground"
            size={20}
          />
          <Text className="text-muted-foreground text-base font-semibold">
            Send
          </Text>
        </Button>
        <Button icon className="px-5 py-2 bg-card gap-x-2 border border-border">
          <HugeiconsIcon icon={PlusIcon} className="text-muted-foreground" />
          <Text className="text-muted-foreground text-base font-semibold">
            Receive
          </Text>
        </Button>
      </View>
      <Button
        icon
        className="h-12 w-12 rounded-full bg-card gap-x-2 border border-border"
      >
        <HugeiconsIcon icon={Atm02Icon} className="text-muted-foreground" />
      </Button>
    </View>
  );
};
