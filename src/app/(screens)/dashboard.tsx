import { Header, ServiceCategories, TopPicks } from "@/features/dashboard";
import { useAuthContext } from "@/shared/hooks/use-auth";
import { View, Keyboard, ScrollView } from "react-native";

const Dashboard = () => {
  const { providerProfile } = useAuthContext();

  return (
    <ScrollView
      className="flex-1 pb-5 bg-background"
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
      <View className="p-3 mt-5">
        <TopPicks />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
