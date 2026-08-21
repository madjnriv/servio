import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View className="bg-pink-500">
      <Text style={styles.title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
        repudiandae.
      </Text>
      <Text className="text-green-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus commodi
        doloribus temporibus nemo esse dolores tenetur quod non distinctio, unde
        modi accusantium, vero ab perspiciatis reiciendis. Aliquam at quidem
        labore cumque eveniet doloribus dignissimos error, fugiat facilis porro!
        Nobis quibusdam fugit ipsam sequi quasi! Odit, itaque. Itaque
        consequuntur iure esse.
      </Text>

      <Link href="/login">
        <Text>Login</Text>
      </Link>
      <Link href="/register">
        <Text>Register</Text>
      </Link>
      <Link href="/dashboard">
        <Text>Dashboard</Text>
      </Link>
    </View>
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
