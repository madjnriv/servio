import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

import { Link } from "expo-router";

const Register = () => {
  const handleSubmit = () => {
    console.log("Register form submitted");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a new account</Text>

      <Button onPress={handleSubmit} title="Register" />

      <Link href={"/login"}>
        <Text style={styles.link}>Already have an account? Log in</Text>
      </Link>
    </View>
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
