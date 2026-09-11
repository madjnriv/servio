import { useColorScheme } from "react-native";
import { colors } from "../constants/colors";

export const UseThemeColor = () => {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? colors.dark : colors.light;

  return { theme };
};
