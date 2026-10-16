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
import {
  useFonts,
  SourceCodePro_200ExtraLight,
  SourceCodePro_200ExtraLight_Italic,
  SourceCodePro_300Light,
  SourceCodePro_300Light_Italic,
  SourceCodePro_400Regular,
  SourceCodePro_400Regular_Italic,
  SourceCodePro_500Medium,
  SourceCodePro_500Medium_Italic,
  SourceCodePro_600SemiBold,
  SourceCodePro_600SemiBold_Italic,
  SourceCodePro_700Bold,
  SourceCodePro_700Bold_Italic,
  SourceCodePro_800ExtraBold,
  SourceCodePro_800ExtraBold_Italic,
  SourceCodePro_900Black,
  SourceCodePro_900Black_Italic,
} from "@expo-google-fonts/source-code-pro";

const RootLayout = () => {
  const insets = useSafeAreaInsets();
  let [fontsLoaded] = useFonts({
    "title-extralight": SourceCodePro_200ExtraLight,
    SourceCodePro_200ExtraLight_Italic,
    "title-light": SourceCodePro_300Light,
    SourceCodePro_300Light_Italic,
    "title-regular": SourceCodePro_400Regular,
    SourceCodePro_400Regular_Italic,
    "title-medium": SourceCodePro_500Medium,
    SourceCodePro_500Medium_Italic,
    "title-semibold": SourceCodePro_600SemiBold,
    SourceCodePro_600SemiBold_Italic,
    "title-bold": SourceCodePro_700Bold,
    SourceCodePro_700Bold_Italic,
    "title-extrabold": SourceCodePro_800ExtraBold,
    SourceCodePro_800ExtraBold_Italic,
    "title-black": SourceCodePro_900Black,
    SourceCodePro_900Black_Italic,
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
