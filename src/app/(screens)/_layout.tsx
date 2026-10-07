import { UseThemeColor } from "@/shared/hooks/use-theme-color";
import ProtectedRoute from "@/shared/guards/route.guard";
import { ServicesProvider } from "@/features/dashboard";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { NavBar } from "@/shared/components/nav-bar";

const ScreensLayout = () => {
  const { theme } = UseThemeColor();

  return (
    <ProtectedRoute>
      <ServicesProvider>
        <SafeAreaProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              animation: "fade",
            }}
          >
            <Stack.Screen name="dashboard" />
            <Stack.Screen name="wallet" />
            <Stack.Screen name="bookings" />
            <Stack.Screen name="profile" />
            <Stack.Screen name="create" />
          </Stack>
          <NavBar />
        </SafeAreaProvider>
      </ServicesProvider>
    </ProtectedRoute>
  );
};

export default ScreensLayout;
