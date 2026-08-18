import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/colors";

const ThemedView = ({ styles, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <View style={[{ backgroundColor: theme.background }, styles]} {...props} />
  );
};

export default ThemedView;
