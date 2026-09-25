import { Avatar } from "@/shared/components/avatar";
import { View, Text } from "react-native";
const defaultAvatar = require("../../../assets/demo-img.jpg");
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { UseThemeColor } from "@/shared/hooks/use-theme-color";
import { Input } from "@/shared/components/input";
import { Button } from "@/shared/components/button";
import { useRouter } from "expo-router";

interface HeaderProps {
  name: string;
  location?: string;
  isProvider?: boolean;
}
export const Header = ({ name, location, isProvider }: HeaderProps) => {
  const { theme } = UseThemeColor();
  const router = useRouter();
  return (
    <View className="pt-20 h-60 bg-primary p-3 rounded-b-[3rem]">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center justify-center gap-2">
          <Avatar
            src={defaultAvatar}
            variant="secondary"
            className="w-full h-full rounded-full"
          />
          <View className="flex-col items-start">
            <Text className="text-primary-foreground text-3xl font-semibold">
              Hi, {name}
            </Text>
            <View className="flex-row items-center gap-1">
              <Ionicons name="location-outline" size={15} color={theme.muted} />
              <Text className="text-muted text-sm">
                {location ? location : "Washington DC."}
              </Text>
            </View>
          </View>
        </View>
        <View className="bg-primary-foreground/10 w-12 h-12 flex-row items-center justify-center rounded-full border border-border/50">
          <EvilIcons name="bell" size={25} color={theme.primaryForeground} />
        </View>
      </View>
      <View className="flex-row items-center justify-between mt-5">
        <View
          className={` px-3 border border-border/50 bg-input/10 rounded-full flex-row items-center justify-between gap-0.5 ${isProvider ? "w-[85%]" : "w-full"}`}
        >
          <Ionicons
            name="search-outline"
            size={25}
            color={theme.primaryForeground}
          />
          <Input
            placeholder="search a service..."
            className="w-auto h-auto rounded-none bg-transparent flex-1"
            placeholderTextColor={theme.input}
          />
          <View>
            <Ionicons
              name="filter-outline"
              size={25}
              color={theme.primaryForeground}
            />
          </View>
        </View>

        {isProvider && (
          <Button
            className="bg-primary-foreground/10 w-12 h-12 flex-row items-center justify-center rounded-full border border-border/50"
            icon={true}
            onPress={() => router.push("/create")}
          >
            <Ionicons name="add" size={25} color={theme.primaryForeground} />
          </Button>
        )}
      </View>
    </View>
  );
};
