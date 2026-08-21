import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Link } from "expo-router";
import { Colors } from "@constants/colors";

const Login = () => {
  const handleSubmit = () => {
    console.log("Login form submitted");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to your account</Text>

      <TextInput placeholder="johndoe@example.com" />

      <Button onPress={handleSubmit} title="Login" />

      <Link href={"/register"}>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </Link>
    </View>
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
