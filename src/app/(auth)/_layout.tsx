import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useAuthContext } from "@/shared/hooks/use-auth";

const AuthLayout = () => {
  const { user } = useAuthContext();
  console.log("logged in user details", user);

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      />
    </>
  );
};

export default AuthLayout;
