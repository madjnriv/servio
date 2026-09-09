import { View } from "react-native";
import React from "react";
import { Input } from "@/shared/components/input";
import { Button } from "@/shared/components/button";
import { Label } from "@/shared/components/label";
import { UseThemeColor } from "@/shared/hooks/use-theme-color";
import { LoginDto } from "../schemas/login.schema";
import { authService } from "../services/auth.service";
import { useAuthContext } from "@/shared/hooks/use-auth";

interface LoginFormProps {
  className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
  const { theme } = UseThemeColor();
  const { setAuth } = useAuthContext();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (data: LoginDto) => {
    try {
      console.log("login form submitted");

      const { id, userEmail, name } = await authService.login({
        email: data.email,
        password: data.password,
      });

      setAuth({ email: userEmail, id, name });
    } catch (error) {
      console.log(error);
    }
  };

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
