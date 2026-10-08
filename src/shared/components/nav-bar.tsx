import { HugeiconsIcon } from "@hugeicons/react-native";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import Home02Icon from "@hugeicons/core-free-icons/Home02Icon";
import WalletMinimalIcon from "@hugeicons/core-free-icons/WalletMinimalIcon";
import Calendar03Icon from "@hugeicons/core-free-icons/Calendar03Icon";
import User02Icon from "@hugeicons/core-free-icons/User02Icon";
import AiArtIcon from "@hugeicons/core-free-icons/AiArtIcon";
import { RoutePath, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { toast } from "react-native-sonner";

export const NavBar = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const handleNavigate = (route: RoutePath) => {
    router.push(route);
  };

  return (
    <View
      className="absolute right-0 left-0"
      style={{ bottom: Platform.OS === "ios" ? insets.bottom - 12 : 20 }}
    >
      <View className="w-[70%] mx-auto flex-row items-center gap-3">
        <View className="bg-card border border-border p-3 flex-1 rounded-full flex-row items-center justify-between">
          <TouchableOpacity onPress={() => handleNavigate("/dashboard")}>
            <HugeiconsIcon icon={Home02Icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigate("/wallet")}>
            <HugeiconsIcon icon={WalletMinimalIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigate("/bookings")}>
            <HugeiconsIcon icon={Calendar03Icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigate("/profile")}>
            <HugeiconsIcon icon={User02Icon} />
          </TouchableOpacity>
        </View>
        <View className="bg-card border border-border p-3 w-12 h-12 rounded-full items-center justify-center">
          <TouchableOpacity
            onPress={() => toast.info("AI Agent is coming soon")}
          >
            <HugeiconsIcon icon={AiArtIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
