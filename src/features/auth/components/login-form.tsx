import { View, Text } from "react-native";
import React, { useState } from "react";
import { Input } from "@/shared/components/input";
import { Button } from "@/shared/components/button";
import { Label } from "@/shared/components/label";
import { UseThemeColor } from "@/shared/hooks/use-theme-color";
import { LoginDto, loginDtoSchema } from "../schemas/login.schema";
import { authService } from "../services/auth.service";
import { useAuthContext } from "@/shared/hooks/use-auth";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-native-sonner";

interface LoginFormProps {
  className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
  const { theme } = UseThemeColor();
  const { setAuth } = useAuthContext();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginDto>({
    resolver: zodResolver(loginDtoSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (data: LoginDto) => {
    try {
      console.log("login form submitted");

      const { id, userEmail, name } = await authService.login({
        email: data.email,
        password: data.password,
      });
      reset({
        email: "",
        password: "",
      });

      setAuth({ email: userEmail, id, name });
    } catch (error) {
      console.log(error);
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(message);
    }
  };

  return (
    <View className={`${className} gap-3 px-5`}>
      <View className=" gap-0.5">
        <Label className={`${errors.email && "text-destructive"}`}>Email</Label>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Johndoe@example.com"
              keyboardType="email-address"
              onChangeText={onChange}
              value={value}
              placeholderTextColor={theme.input}
              className="w-full bg-input/20 border border-border/50"
              returnKeyType="next"
              autoCapitalize="none"
            />
          )}
        />
        {errors.email && (
          <Text className="text-destructive text-sm">
            {errors.email.message}
          </Text>
        )}
      </View>
      <View className=" gap-0.5">
        <Label className={`${errors.password && "text-destructive"}`}>
          Password
        </Label>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="*** *** ***"
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
              textContentType="newPassword"
              autoCapitalize="none"
              autoComplete="password"
              placeholderTextColor={theme.input}
              className="w-full bg-input/20 border border-border/50"
            />
          )}
        />
        {errors.password && (
          <Text className="text-destructive text-sm">
            {errors.password.message}
          </Text>
        )}
      </View>

      <Button
        onPress={handleSubmit(onSubmit)}
        className="mt-3"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Loading..." : "Login"}
      </Button>
    </View>
  );
};
