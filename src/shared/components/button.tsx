import { Pressable, Text } from "react-native";
import React from "react";

interface ButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
  className?: string;
  style?: object;
}
export const Button = ({
  onPress,
  children,
  style,
  className,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[style]}
      className={`${className} bg-primary w-full items-center justify-center p-3 rounded-full `}
    >
      <Text className="text-primary-foreground  text-base font-semibold">
        {children}
      </Text>
    </Pressable>
  );
};
