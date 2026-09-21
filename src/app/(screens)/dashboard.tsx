import { ServicesProvider } from "@/features/dashboard";
import { StyleSheet, View, Text } from "react-native";

const Dashboard = () => {
  return (
    <ServicesProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Hi, Jaxon 👋</Text>
      </View>
    </ServicesProvider>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
