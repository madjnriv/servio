import { Pressable, useColorScheme, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";

const ThemedBtn = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    />
  );
};

export default ThemedBtn;

const styles = StyleSheet.create({
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
