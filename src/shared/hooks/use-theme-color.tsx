import { useColorScheme } from "react-native";
import { colors } from "../constants/colors";

export const UseThemeColor = () => {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme ?? "light"];

  return { theme };
};
