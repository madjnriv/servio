import { View, Text } from "react-native";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/card";
import { Button } from "@/shared/components/button";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { ChevronRight, FireIcon } from "@hugeicons/core-free-icons";

export const SubscribePro = () => {
  return (
    <Card className="border-0 bg-primary flex-row items-center justify-between">
      <View className="flex-row items-center gap-3">
        <View className="w-12 h-12">
          <HugeiconsIcon icon={FireIcon} size={20} />
        </View>

        <CardHeader className="py-0 px-0 gap-0">
          <CardTitle>
            <Text className="text-xl text-primary-foreground">
              Upgrade to Pro
            </Text>
          </CardTitle>
          <CardDescription className="">
            <Text className="text-primary-foreground">
              {" "}
              Unlock premium tools. Get faster support.
            </Text>
            <Text className="text-primary-foreground">
              Enjoy priority assistance and advanced features.
            </Text>
          </CardDescription>
        </CardHeader>
      </View>
      <Button className="bg-transparent h-11 w-11">
        <Text>Upgrade</Text>
        <HugeiconsIcon icon={ChevronRight} className="text-foreground/50" />
      </Button>
    </Card>
  );
};
