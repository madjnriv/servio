import { StyleSheet, useColorScheme } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "../../constants/colors";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
      }}
    >
      <Stack.Screen name="dashboard" options={{ title: "Dashboard" }} />
      <Stack.Screen name="wallet" options={{ title: "Wallet" }} />
      <Stack.Screen
        name="bookings"
        options={{ title: "Bookings", headerShown: false }}
      />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
