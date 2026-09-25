import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { UseThemeColor } from "@/shared/hooks/use-theme-color";
import ProtectedRoute from "@/shared/guards/route.guard";
import { ServicesProvider } from "@/features/dashboard";
import { SafeAreaProvider } from "react-native-safe-area-context";

const ScreensLayout = () => {
  const { theme } = UseThemeColor();

  return (
    <ProtectedRoute>
      <ServicesProvider>
        <SafeAreaProvider>
          <Tabs
            screenOptions={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: theme.mutedForeground,
                paddingTop: 10,
                height: 90,
              },
              tabBarActiveTintColor: theme.accent,
              tabBarInactiveTintColor: theme.accentForeground,
            }}
          >
            <Tabs.Screen
              name="dashboard"
              options={{
                title: "Dashboard",
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    size={24}
                    name={focused ? "home" : "home-outline"}
                    color={focused ? theme.accent : theme.accentForeground}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="wallet"
              options={{
                title: "Wallet",
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    size={24}
                    name={focused ? "wallet" : "wallet-outline"}
                    color={focused ? theme.accent : theme.accentForeground}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="bookings"
              options={{
                title: "Bookings",
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    size={24}
                    name={focused ? "calendar" : "calendar-outline"}
                    color={focused ? theme.accent : theme.accentForeground}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="profile"
              options={{
                title: "Profile",
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    size={24}
                    name={focused ? "person" : "person-outline"}
                    color={focused ? theme.accent : theme.accentForeground}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="create"
              options={{
                href: null,
                title: "Create",
              }}
            />
          </Tabs>
        </SafeAreaProvider>
      </ServicesProvider>
    </ProtectedRoute>
  );
};

export default ScreensLayout;
