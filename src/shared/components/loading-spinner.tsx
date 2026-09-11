import { EvilIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { UseThemeColor } from "../hooks/use-theme-color";

export const LoadingSpinner = () => {
  const { theme } = UseThemeColor();
  //   const spinValue = useRef(new Animated.Value(0)).current;

  //   useEffect(() => {
  //     Animated.loop(
  //       Animated.timing(spinValue, {
  //         toValue: 1,
  //         duration: 1000,
  //         easing: Easing.linear,
  //         useNativeDriver: true,
  //       }),
  //     ).start();
  //   }, [spinValue]);

  //   const spin = spinValue.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: ["0deg", "360deg"],
  //   });

  return (
    <View className="h-full flex justify-center items-center">
      <View>
        {/* <Animated.View style={{ transform: [{ rotate: spin }] }}> */}
        <EvilIcons
          name="spinner-3"
          size={50}
          color={theme.primary}
          className="animate-spin"
        />
        {/* </Animated.View> */}

        <Text className="mt-2 text-lg text-primary animate-pulse text-center">
          servio
        </Text>
      </View>
    </View>
  );
};
