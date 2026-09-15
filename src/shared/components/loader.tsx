import { ActivityIndicator } from "react-native";
import { UseThemeColor } from "../hooks/use-theme-color";

interface LoaderProps {
  className?: string;
}
export const Loader = ({ className }: LoaderProps) => {
  const { theme } = UseThemeColor();

  return (
    <ActivityIndicator
      color={theme.primary}
      className={`size-10 ${className}`}
    />
  );
};
