import { User } from "@/shared/types/user.types";
import { View, Text } from "react-native";

interface ProfileInfoCardProps {
  user: User | null;
}

export const ProfileInfoCard = ({ user }: ProfileInfoCardProps) => {
  return (
    <View>
      <Text>
        {user?.name}
        {user?.email}
      </Text>
    </View>
  );
};
