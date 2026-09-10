import { View, Text } from "react-native";
import { Input } from "@/shared/components/input";
import { Button } from "@/shared/components/button";
import { Label } from "@/shared/components/label";
import { UseThemeColor } from "@/shared/hooks/use-theme-color";
import { RegisterDto, registerDtoSchema } from "../schemas/register.schema";
import { authService } from "../services/auth.service";
import { useAuthContext } from "@/shared/hooks/use-auth";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-native-sonner";

interface RegisterFormProps {
  className?: string;
}
export const RegisterForm = ({ className }: RegisterFormProps) => {
  const { theme } = UseThemeColor();
  const { setAuth } = useAuthContext();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterDto>({
    resolver: zodResolver(registerDtoSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (data: RegisterDto) => {
    try {
      console.log("Register form submitted");
      const { newUserEmail, name, id } = await authService.register(data);
      reset({
        name: "",
        email: "",
        password: "",
      });

      setAuth({ email: newUserEmail, id, name });
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
        <Label>Name</Label>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="John Doe"
              onChangeText={onChange}
              value={value}
              placeholderTextColor={theme.input}
              className="w-full bg-input/20 border border-border/50"
              returnKeyType="next"
              autoCapitalize="words"
              autoComplete="name"
            />
          )}
        />
        {errors.name && (
          <Text className="text-destructive text-sm">
            {errors.name.message}
          </Text>
        )}
      </View>

      <View className=" gap-0.5">
        <Label>Email</Label>
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
        <Label>Password</Label>
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
        {isSubmitting ? "Loading..." : "Register"}
      </Button>
    </View>
  );
};
