import { Header, ServiceCategories, TopPicksCard } from "@/features/dashboard";
import { servicesService } from "@/features/service/services/services.service";
import { useAuthContext } from "@/shared/hooks/use-auth";
import { useServices } from "@/shared/hooks/use-services";
import { useCallback, useEffect } from "react";
import { View, Keyboard, ScrollView, FlatList, Text } from "react-native";

const Dashboard = () => {
  const { providerProfile, authUser } = useAuthContext();
  const { services, setServicesContext } = useServices();
  const displayName = authUser?.name.split(" ")[0];

  const loadServices = useCallback(async () => {
    try {
      const data = await servicesService.getAll();
      if (data) setServicesContext(data);
    } catch (error) {
      console.log(error);
    }
  }, [setServicesContext]);

  useEffect(() => {
    void loadServices();
  }, [loadServices]);

  return (
    <ScrollView
      className="flex-1 pb-5 bg-background"
      onStartShouldSetResponder={() => {
        Keyboard.dismiss();
        return false;
      }}
    >
      <Header
        name={displayName ?? "GUEST"}
        isProvider={Boolean(providerProfile?.businessName)}
      />
      <ServiceCategories />
      <View className="p-3 mt-5">
        <Text className="text-foreground text-xl">Top Picks for you</Text>
        {services && services.length > 0 ? (
          <FlatList
            data={services}
            renderItem={({ item }) => <TopPicksCard services={item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text>No Service Found. Check in Later</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Dashboard;
