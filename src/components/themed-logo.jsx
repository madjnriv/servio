import { StyleSheet, View, useColorScheme, Image } from "react-native";
import DarkLogo from "../../assets/img/servio-logo-dark.jpg";
import LightLogo from "../../assets/img/servio-logo-light.png";

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;
  return (
    <Image
      source={logo}
      {...props}
      style={{ height: 100, width: 300, ...props.style }}
    />
  );
};

export default ThemedLogo;
