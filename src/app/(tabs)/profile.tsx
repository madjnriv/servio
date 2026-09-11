import { View, Text } from "react-native";
import React from "react";
import { useAuthContext } from "@/shared/hooks/use-auth";
import { Button } from "@/shared/components/button";
import { authService } from "@/features/auth";
import { toast } from "react-native-sonner";
import { getErrorMessage } from "@/shared/lib/get-error-msg";

const Profile = () => {
  const { clearAuth } = useAuthContext();

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
    <View>
      <Text>Profile</Text>

      <Button onPress={handleLogout}>Log out</Button>
    </View>
  );
};

export default Profile;
