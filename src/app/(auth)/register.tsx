import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { RegisterForm } from "@/features/auth";

const Register = () => {
  const handleSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    console.log("Register form submitted", {
      email,
      password,
    });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="h-full justify-center bg-background gap-y-2">
        <View>
          <Text className="mx-auto text-xl w-[80%] text-center text-secondary-foreground font-semibold">
            Please enter your email and password to create an account.
          </Text>
        </View>
        <RegisterForm handleSubmit={handleSubmit} className="mt-5" />
        <View className="flex-row gap-2 items-center justify-center mt-4">
          <Text>Already have an account?</Text>
          <Text className="text-primary">Sign In</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
