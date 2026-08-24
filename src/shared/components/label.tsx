import { Text } from "react-native";
import React from "react";

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}
export const Label = ({ className, children }: LabelProps) => {
  return (
    <Text
      className={`${className} text-sm text-secondary-foreground font-semibold`}
    >
      {children}
    </Text>
  );
};
