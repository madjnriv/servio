import { View, Text } from "react-native";
import { useAuthContext } from "@/shared/hooks/use-auth";
import { Button } from "@/shared/components/button";
import { authService } from "@/features/auth";
import { toast } from "react-native-sonner";
import { getErrorMessage } from "@/shared/lib/get-error-msg";
import { ProfileInfoCard, SubscribePro } from "@/features/profile";
import { SafeAreaView } from "react-native-safe-area-context";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { ArrowLeft02Icon, Search01Icon } from "@hugeicons/core-free-icons";

const Profile = () => {
  const { clearAuth, authUser } = useAuthContext();

  const handleLogout = async () => {
    try {
      await authService.logout();
      clearAuth();
    } catch (error) {
      const message = getErrorMessage(error);
      toast.error(message, {
        toasterId: "logout-error",
      });
    }
  };

  return (
    <SafeAreaView className="p-3">
      <View className="flex-row justify-between items-center">
        <Button className="bg-transparent border border-border h-11 w-11">
          <HugeiconsIcon icon={ArrowLeft02Icon} className="text-foreground" />
        </Button>

        <Text className="text-lg font-semibold">Profile</Text>

        <Button className="bg-transparent border border-border h-11 w-11">
          <HugeiconsIcon icon={Search01Icon} className="text-foreground" />
        </Button>
      </View>

      <View className="mt-5">
        <ProfileInfoCard authUser={authUser} />
      </View>

      <View className="mt-5">
        <SubscribePro />
      </View>

      <Button onPress={handleLogout} className="mt-10">
        Log out
      </Button>
    </SafeAreaView>
  );
};

export default Profile;
