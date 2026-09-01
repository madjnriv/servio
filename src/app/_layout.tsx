import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "./global.css";
import { AuthProvider } from "@/shared/contexts/auth-context";

const RootLayout = () => {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      />
    </AuthProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
