import { View } from "react-native";
import { useAuthContext } from "@/shared/hooks/use-auth";
import { Button } from "@/shared/components/button";
import { authService } from "@/features/auth";
import { toast } from "react-native-sonner";
import { getErrorMessage } from "@/shared/lib/get-error-msg";
import { ProfileInfoCard } from "@/features/profile";

const Profile = () => {
  const { clearAuth, user } = useAuthContext();

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
    <View className="mt-50">
      <ProfileInfoCard user={user} />

      <Button onPress={handleLogout}>Log out</Button>
    </View>
  );
};

export default Profile;
