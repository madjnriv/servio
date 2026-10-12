import { Text } from "react-native";
import { Card, CardHeader, CardTitle } from "@/shared/components/card";
import { Button } from "@/shared/components/button";
import { HugeiconsIcon } from "@hugeicons/react-native";
import Sent02Icon from "@hugeicons/core-free-icons/Sent02Icon";

export const InviteFriendCard = () => {
  return (
    <Card className="border-0 bg-foreground pb-3 px-3">
      <CardHeader>
        <CardTitle>
          <Text className="text-card">Invite a friend and get $10 in BTC</Text>
        </CardTitle>
      </CardHeader>
      <Button
        icon
        className="border border-primary-foreground w-40 py-2 gap-x-2"
      >
        <Text className="text-primary-foreground"> Share Invite</Text>
        <HugeiconsIcon
          icon={Sent02Icon}
          className="text-primary-foreground"
          size={20}
        />
      </Button>
    </Card>
  );
};
