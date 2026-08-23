import { View, Text, Image, Pressable } from "react-native";
import React from "react";
const ImgOne = require("../assets/full-shot-man-walking-with-cleaning-cart.jpg");
import { Ionicons } from "@expo/vector-icons";
import { UseThemeColor } from "@/shared/hooks/use-theme-color";

export const WelcomeScreen = () => {
  const { themeColors } = UseThemeColor();
  return (
    <View className="relative rounded-tl-full rounded-tr-full">
      <Image source={ImgOne} className="w-full h-full" />
      <View className="absolute bottom-0 p-5 bg-foreground/60 backdrop-blur-lg flex flex-col items-center">
        <View>
          <Text className="text-background text-4xl font-bold text-center">
            Clean Home, Happy You Always
          </Text>
          <Text className="text-background/60 text-center">
            We are a cleaning service company that provides professional
            cleaning services for homes and offices. Our team of experienced
            cleaners is dedicated to providing high-quality cleaning services
            that meet your needs and exceed your expectations.
          </Text>
        </View>

        <Pressable className="flex-row items-center gap-4 bg-background/20 h-14 pr-5 rounded-full mt-3 mb-5">
          <View className="bg-primary h-12 w-12 ml-1 rounded-full items-center justify-center">
            <Ionicons name="rocket" size={24} color={themeColors.background} />
          </View>
          <Text className="text-background">Get Started</Text>

          <View className="flex-row gap-0">
            <Ionicons
              name="chevron-forward"
              size={15}
              color={themeColors.background}
            />
            <Ionicons
              name="chevron-forward"
              size={15}
              color={themeColors.background}
            />
            <Ionicons
              name="chevron-forward"
              size={15}
              color={themeColors.background}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};
