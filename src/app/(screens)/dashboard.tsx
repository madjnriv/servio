import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, Jaxon 👋</Text>
    </View>
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
