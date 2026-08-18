import { StyleSheet, Text } from "react-native";
import React from "react";
import ThemedView from "../../components/themed-view";
import ThemedText from "../../components/themed-text";
import { Link } from "expo-router";
import Spacer from "../../components/spacer";
import ThemedBtn from "../../components/themed-btn";

const Register = () => {
  const handleSubmit = () => {
    console.log("Register form submitted");
  };
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Create a new account
      </ThemedText>

      <ThemedBtn onPress={handleSubmit}>
        <Text style={{ color: "white", fontSize: 16 }}>Register</Text>
      </ThemedBtn>

      <Spacer height={100} />
      <Link href={"/login"}>
        <ThemedText style={styles.link}>
          Already have an account? Log in
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  link: {
    fontSize: 16,
    color: "blue",
    textAlign: "center",
  },
});
