import { Avatar } from "@/shared/components/avatar";
import { Button } from "@/shared/components/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/card";
import { AuthUser } from "@/shared/types/user.types";
import ChevronRight from "@hugeicons/core-free-icons/ArrowRight01Icon";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { View, Text } from "react-native";

interface ProfileInfoCardProps {
  authUser: AuthUser | null;
}

export const ProfileInfoCard = ({ authUser }: ProfileInfoCardProps) => {
  return (
    <Card className="flex-row items-center justify-between px-3">
      <View className="flex-row items-center gap-3">
        <Avatar fallback="SO" size="md" variant="secondary" />
        <CardHeader className="py-0 px-0 gap-0">
          <CardTitle>
            <Text className="text-base">
              {authUser?.name ? authUser.name : "Anonymous User"}
            </Text>
          </CardTitle>
          <CardDescription className="-mt-2">
            {authUser?.email ? authUser.email : "No email provided"}
          </CardDescription>
        </CardHeader>
      </View>
      <Button className="bg-transparent h-11 w-11">
        <HugeiconsIcon icon={ChevronRight} className="text-foreground/50" />
      </Button>
    </Card>
  );
};
