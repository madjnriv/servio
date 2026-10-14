import { Image, Text, View } from "react-native";
import { Card, CardHeader, CardTitle } from "@/shared/components/card";
import { Button } from "@/shared/components/button";
import { HugeiconsIcon } from "@hugeicons/react-native";
import Sent02Icon from "@hugeicons/core-free-icons/Sent02Icon";
import {
  BITCOIN_IMG,
  DOLLAR_IMG,
  ETHEREUM_IMG,
} from "@/shared/constants/img-fallback";

export const InviteFriendCard = () => {
  return (
    <Card className="bg-primary/10 border-0 flex-row items-center pb-3 px-3">
      <View>
        <CardHeader>
          <CardTitle className="pr-14">
            <Text className="text-foreground/80 text-wrap text-lg">
              Invite a friend and get $10 in your Servio wallet
            </Text>
          </CardTitle>
        </CardHeader>
        <Button icon className="bg-primary/80 w-40 py-2 gap-x-2">
          <Text className="text-primary-foreground/80 font-semibold text-sm">
            {" "}
            Share Invite
          </Text>
          <HugeiconsIcon
            icon={Sent02Icon}
            className="text-primary-foreground/80"
            size={20}
          />
        </Button>
      </View>

      <View className="relative flex-1">
        <Image
          source={ETHEREUM_IMG}
          className="w-10 h-10 absolute right-10 mr-3"
        />
        <Image
          source={BITCOIN_IMG}
          className="w-10 h-10 absolute right-0 -top-10 -z-30"
        />
        <Image
          source={DOLLAR_IMG}
          className="w-10 h-10 absolute right-0 -bottom-16"
        />
      </View>
    </Card>
  );
};
