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
import { Feather } from "@expo/vector-icons";
import { UseThemeColor } from "@/shared/hooks/use-theme-color";
import { Label } from "@/shared/components/label";
const ImgOne = require("../../../assets/cleaning.jpg");

interface TopPicksProps {
  service: Service;
}
export const TopPicksCard = ({ service }: TopPicksProps) => {
  const { userProfile } = useAuthContext();
  const { theme } = UseThemeColor();
  return (
    <Card className="">
      <Image source={ImgOne} className="h-48 w-full rounded-t-2xl" />

      <CardHeader className="pb-0">
        {service.category && (
          <Label className="self-start text-sm text-accent bg-accent/10 border border-accent px-2 rounded-full">
            {service.category}
          </Label>
        )}
        <CardTitle className="mt-3">{service.name}</CardTitle>
        <CardDescription>{service.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="flex-row items-center justify-between">
        <Text className="text-foreground">
          <Text className="text-card-foreground text-lg font-light">
            $ {service.price} /
          </Text>{" "}
          <Text className="text-xs font-light text-muted-foreground">
            {service.pricingUnit}
          </Text>
        </Text>

        <Button className="w-11 h-11">
          <Feather name="arrow-up-right" size={20} color={theme.card} />
        </Button>
      </CardContent>
    </Card>
  );
};
