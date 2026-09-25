import { Header, ServiceCategories } from "@/features/dashboard";
import { useAuthContext } from "@/shared/hooks/use-auth";
import { View, Keyboard } from "react-native";

const Dashboard = () => {
  const { providerProfile } = useAuthContext();

  return (
    <View
      className="flex-1 bg-background"
      onStartShouldSetResponder={() => {
        Keyboard.dismiss();
        return false;
      }}
    >
      <Header
        name="Jaxon"
        isProvider={Boolean(providerProfile?.businessName)}
      />
      <ServiceCategories />
    </View>
  );
};

export default Dashboard;
