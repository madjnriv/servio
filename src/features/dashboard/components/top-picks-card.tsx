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
import { Service } from "@/shared/types/services.types";
const ImgOne = require("../../../assets/user32212-home-2486092_1920.jpg");

interface TopPicksProps {
  services: Service;
}
export const TopPicksCard = ({ services }: TopPicksProps) => {
  const { userProfile } = useAuthContext();
  return (
    <Card className="relative h-52">
      <Image source={ImgOne} className="h-full w-full rounded-2xl" />

      <View className="absolute bottom-0 left-0 right-0 h-24 rounded-b-2xl justify-between items-end bg-primary-foreground/50">
        <CardHeader>
          <CardTitle className="text-foreground">{services.name}</CardTitle>
          <CardDescription>{services.excerpt}</CardDescription>
        </CardHeader>
      </View>
    </Card>
  );
};
