import { Pressable, Text } from "react-native";
import React from "react";

interface ButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
  className?: string;
  style?: object;
  disabled?: boolean;
}
export const Button = ({
  onPress,
  children,
  style,
  className,
  disabled = false,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[style]}
      className={`h-12 flex-row  bg-primary w-full items-center justify-center p-3 rounded-full ${className} ${disabled && "opacity-50"}`}
    >
      <Text className="text-primary-foreground  text-base font-semibold">
        {children}
      </Text>
    </Pressable>
  );
};
