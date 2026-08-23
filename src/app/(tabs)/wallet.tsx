import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Wallet = () => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>Wallet</Text>
      <Link href="/">Back Home</Link>
      <Link href="/bookings">view bookings</Link>
    </View>
  );
};

export default Wallet;

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
