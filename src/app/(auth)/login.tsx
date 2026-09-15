import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { LoginForm } from "@/features/auth";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="h-full justify-center bg-background gap-y-2">
        <View>
          <Text className="mx-auto text-xl w-[80%] text-center text-secondary-foreground font-semibold">
            Welcome back! Please enter your email and password to sign in.
          </Text>
        </View>
        <LoginForm className="mt-5" />
        <View className="flex-row gap-2 items-center justify-center mt-4">
          <Text>Don't have an account?</Text>
          <Text
            className="text-primary"
            onPress={() => router.push("/register")}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
