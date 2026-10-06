import { View } from "react-native";
import React from "react";

interface SeparatorProps {
  className?: string;
}
export const Separator = ({ className }: SeparatorProps) => {
  return (
    <View
      className={`${className || " w-full"}  h-px bg-muted-foreground/10`}
    />
  );
};
