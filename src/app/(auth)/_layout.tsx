import React, { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useAuthContext } from "@/shared/hooks/use-auth";

const AuthLayout = () => {
  const { authUser, isAuthenticated } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && authUser) router.replace("/dashboard");
  }, [isAuthenticated, authUser]);

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
