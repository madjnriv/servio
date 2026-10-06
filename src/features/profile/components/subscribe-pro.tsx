import { View, Text } from "react-native";
import React from "react";
import { Card, CardHeader, CardTitle } from "@/shared/components/card";
import { Button } from "@/shared/components/button";
import { HugeiconsIcon } from "@hugeicons/react-native";
import ChevronRight from "@hugeicons/core-free-icons/ArrowRight01Icon";
import AiMagicIcon from "@hugeicons/core-free-icons/AiMagicIcon";

export const SubscribePro = () => {
  return (
    <Card className="w-full flex-row items-center justify-between gap-x-1 border-0 bg-foreground/95 px-3 rounded-[2rem]">
      <View className="min-w-0 flex-1 flex-row items-center gap-3">
        <View className="h-10 w-10 shrink-0 items-center justify-center">
          <HugeiconsIcon
            icon={AiMagicIcon}
            size={40}
            className="text-primary-foreground"
          />
        </View>

        <CardHeader className="min-w-0 flex-1 gap-0 p-0">
          <CardTitle>
            <Text className="text-base text-primary-foreground">
              Upgrade to Pro
            </Text>
          </CardTitle>
          <Text className="text-xs text-muted-foreground">
            Unlock premium tools. Get faster support. Enjoy priority assistance
            and advanced features.
          </Text>
        </CardHeader>
      </View>
      <Button
        icon
        className="h-11 shrink-0 flex-row gap-1 bg-accent/50 border border-accent px-2"
      >
        <Text className="text-sm font-semibold text-primary-foreground">
          Upgrade
        </Text>
        <HugeiconsIcon
          icon={ChevronRight}
          size={19}
          className="text-primary-foreground"
        />
      </Button>
    </Card>
  );
};
