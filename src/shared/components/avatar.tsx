import { View, Text, Image, ImageSourcePropType } from "react-native";

interface AvatarProps {
  className?: string;
  src?: ImageSourcePropType;
  fallback?: string;
  size?: "sm" | "md" | "lg";
}
export const Avatar = ({
  className,
  src,
  fallback,
  size = "md",
}: AvatarProps) => {
  return (
    <View
      className={`bg-muted-foreground justify-center items-center rounded-full ${size === "sm" ? "w-10 h-10" : size === "md" ? "w-16 h-16" : "w-20 h-20"}`}
    >
      {src ? (
        <Image source={src} className={className} />
      ) : (
        <Text className={className}>{fallback}</Text>
      )}
    </View>
  );
};
