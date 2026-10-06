import { Avatar } from "@/shared/components/avatar";
import { Button } from "@/shared/components/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/card";
import { DEFAULT_USER_IMAGE } from "@/shared/constants/img-fallback";
import { AuthUser } from "@/shared/types/user.types";
import ChevronRight from "@hugeicons/core-free-icons/ArrowRight01Icon";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { View, Text } from "react-native";

interface ProfileInfoCardProps {
  authUser: AuthUser | null;
}

export const ProfileInfoCard = ({ authUser }: ProfileInfoCardProps) => {
  return (
    <Card className="flex-row items-center justify-between py-0 px-3 rounded-[2rem]">
      <View className="flex-row items-center gap-x-0.5">
        <Avatar
          src={DEFAULT_USER_IMAGE}
          size="md"
          variant="secondary"
          className="w-full h-full rounded-full"
        />
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
