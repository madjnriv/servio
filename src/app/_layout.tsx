import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "./global.css";
import { AuthProvider } from "@/shared/contexts/auth-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Toaster } from "react-native-sonner";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import {
  SourceCodePro_200ExtraLight,
  SourceCodePro_300Light,
  SourceCodePro_400Regular,
  SourceCodePro_500Medium,
  SourceCodePro_600SemiBold,
  SourceCodePro_700Bold,
  SourceCodePro_800ExtraBold,
  SourceCodePro_900Black,
} from "@expo-google-fonts/source-code-pro";
import {
  Cabin_400Regular,
  Cabin_500Medium,
  Cabin_600SemiBold,
  Cabin_700Bold,
} from "@expo-google-fonts/cabin";
import { TenorSans_400Regular } from "@expo-google-fonts/tenor-sans";

const RootLayout = () => {
  const insets = useSafeAreaInsets();
  let [fontsLoaded] = useFonts({
    "header-extralight": SourceCodePro_200ExtraLight,
    "header-light": SourceCodePro_300Light,
    "header-regular": SourceCodePro_400Regular,
    "header-medium": SourceCodePro_500Medium,
    "header-semibold": SourceCodePro_600SemiBold,
    "header-bold": SourceCodePro_700Bold,
    "header-extrabold": SourceCodePro_800ExtraBold,
    "header-black": SourceCodePro_900Black,
    "title-regular": Cabin_400Regular,
    "title-medium": Cabin_500Medium,
    "title-semibold": Cabin_600SemiBold,
    "title-bold": Cabin_700Bold,
    "body-regular": TenorSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AuthProvider>
          <StatusBar style="auto" />
          <Stack
            screenOptions={{
              headerShown: false,
              animation: "fade",
            }}
          />
          <Toaster
            hapticFeedback={true}
            duration={5000}
            offset={{ top: insets.top - 15 }}
          />
        </AuthProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
