import { StyleSheet, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ThemedView from "../components/themed-view";
import ThemedLogo from "../components/themed-logo";
import Spacer from "../components/spacer";
import ThemedText from "../components/themed-text";

const Home = () => {
  return (
    <ThemedView styles={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />
      <ThemedText style={styles.title} title={true}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
        repudiandae.
      </ThemedText>
      <Spacer />
      <ThemedText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus commodi
        doloribus temporibus nemo esse dolores tenetur quod non distinctio, unde
        modi accusantium, vero ab perspiciatis reiciendis. Aliquam at quidem
        labore cumque eveniet doloribus dignissimos error, fugiat facilis porro!
        Nobis quibusdam fugit ipsam sequi quasi! Odit, itaque. Itaque
        consequuntur iure esse.
      </ThemedText>

      <Spacer />
      <Link href="/login">
        <ThemedText>Login</ThemedText>
      </Link>
      <Link href="/register">
        <ThemedText>Register</ThemedText>
      </Link>
      <Link href="/dashboard">
        <ThemedText>Dashboard</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

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
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 8,
    margin: 10,
    width: "90%",
    alignItems: "center",
    boxShadow: "4px 4px rgba(0,0,0, 0.1)",
  },
});
