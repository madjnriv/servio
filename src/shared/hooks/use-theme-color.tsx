import { useColorScheme } from "react-native";
import { colors } from "../constants/colors";

export const UseThemeColor = () => {
  const colorScheme = useColorScheme();
  const themeColors = colors[colorScheme ?? "light"];

  return { themeColors };
};
