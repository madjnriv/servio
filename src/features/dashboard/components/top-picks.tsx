import { View, Text, Image } from "react-native";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/card";
import { Button } from "@/shared/components/button";
import { useAuthContext } from "@/shared/hooks/use-auth";
const ImgOne = require("../../../assets/user32212-home-2486092_1920.jpg");

export const TopPicks = () => {
  const { userProfile } = useAuthContext();
  return (
    <>
      <Text className="text-foreground text-xl">Top Picks for you</Text>
      <Text>{userProfile?.id}</Text>
    </>
  );
};
