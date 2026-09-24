import { Header, ServicesProvider } from "@/features/dashboard";
import { useAuthContext } from "@/shared/hooks/use-auth";
import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";

const Dashboard = () => {
  const { providerProfile } = useAuthContext();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-foreground">
        <Header
          name="Jaxon"
          isProvider={Boolean(providerProfile?.businessName)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Dashboard;
