import { View, Text } from "react-native";
import React from "react";
import { Input } from "@/shared/components/input";
import { Button } from "@/shared/components/button";
import { Label } from "@/shared/components/label";
import { UseThemeColor } from "@/shared/hooks/use-theme-color";

interface LoginFormProps {
  handleSubmit: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => void;
  className?: string;
}
export const LoginForm = ({ handleSubmit, className }: LoginFormProps) => {
  const { theme } = UseThemeColor();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View className={`${className} gap-3 px-5`}>
      <View className=" gap-0.5">
        <Label>Email</Label>
        <Input
          placeholder="Johndoe@example.com"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor={theme.input}
          className="w-full bg-input/20 border border-border/50"
          returnKeyType="next"
        />
      </View>
      <View className=" gap-0.5">
        <Label>Password</Label>
        <Input
          placeholder="*** *** ***"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          textContentType="newPassword"
          autoCapitalize="none"
          autoComplete="password"
          placeholderTextColor={theme.input}
          className="w-full bg-input/20 border border-border/50"
        />
      </View>

      <Button
        onPress={() => handleSubmit({ email, password })}
        className="mt-3"
      >
        Login
      </Button>
    </View>
  );
};
