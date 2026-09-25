import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SERVICE_CATEGORIES } from "@/shared/constants/service";
import { Ionicons } from "@expo/vector-icons";
import { UseThemeColor } from "@/shared/hooks/use-theme-color";

export const ServiceCategories = () => {
  const { theme } = UseThemeColor();

  return (
    <View className="p-3 mt-5">
      <Text className="text-foreground text-xl">All Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingHorizontal: 8,
          gap: 12,
        }}
        className="mt-3"
      >
        {SERVICE_CATEGORIES.map((category) => (
          <View
            key={category.id}
            className="items-center justify-center h-32 w-32 bg-card border border-border/50 rounded-xl px-2"
          >
            <Ionicons name={category.icon} size={30} color={theme.accent} />
            <Text className="text-foreground font-light text-sm mt-2 text-center">
              {category.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
