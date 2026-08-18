import { StyleSheet, View, useColorScheme } from "react-native";
import { Colors } from "../constants/colors";

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  return (
    <View style={[{ backgroundColor: theme.uiBackground }, style]} {...props} />
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.card,
    borderRadius: 8,
    padding: 10,
    margin: 10,
    elevation: 8,
    width: "90%",
    alignItems: "center",
    boxShadow: "4px 4px rgba(0,0,0, 0.1)",
  },
});
