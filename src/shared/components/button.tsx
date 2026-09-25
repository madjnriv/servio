import { Pressable, Text } from "react-native";
import React from "react";

interface ButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
  className?: string;
  style?: object;
  disabled?: boolean;
  icon?: boolean;
}
export const Button = ({
  onPress,
  children,
  style,
  className,
  disabled = false,
  icon = false,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[style]}
      className={`flex-row bg-primary items-center justify-center rounded-full ${className} ${disabled && "opacity-50"}`}
    >
      {icon ? (
        <>{children}</>
      ) : (
        <Text className="text-primary-foreground  text-base font-semibold">
          {children}
        </Text>
      )}
    </Pressable>
  );
};
