import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export const ImageInput = () => {
  return (
    <View className="items-center justify-center w-full h-60 bg-muted border border-dashed border-muted-foreground/40 rounded-lg">
      <Ionicons name="cloud-upload-outline" size={35} />
      <Text className="text-muted-foreground mt-3">Tap to upload image</Text>
    </View>
  );
};
