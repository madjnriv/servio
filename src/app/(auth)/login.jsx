import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import ThemedView from "../../components/themed-view";
import ThemedText from "../../components/themed-text";
import { Link } from "expo-router";
import Spacer from "../../components/spacer";
import { Colors } from "../../constants/colors";
import ThemedBtn from "../../components/themed-btn";

const Login = () => {
  const handleSubmit = () => {
    console.log("Login form submitted");
  };
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to your account
      </ThemedText>

      <ThemedBtn onPress={handleSubmit}>
        <Text style={{ color: "white", fontSize: 16 }}>Login</Text>
      </ThemedBtn>

      <Spacer height={100} />
      <Link href={"/register"}>
        <ThemedText style={styles.link}>
          Don't have an account? Sign up
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Login;

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
  btn: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    marginTop: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});
