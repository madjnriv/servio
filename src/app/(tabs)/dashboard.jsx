import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard Page</Text>

      <Link href="/">Back Home</Link>
      <Link href="/wallet">view wallet</Link>
      <Link href="/bookings">view bookings</Link>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
