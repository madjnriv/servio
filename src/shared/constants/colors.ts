export interface Colors {
  primary: string;
  warning: string;
  dark: {
    text: string;
    title: string;
    background: string;
    navBackground: string;
    iconColor: string;
    iconColorFocused: string;
    uiBackground: string;
  };
  light: {
    text: string;
    title: string;
    background: string;
    navBackground: string;
    iconColor: string;
    iconColorFocused: string;
    uiBackground: string;
  };
}

export const Colors: Colors = {
  primary: "#8B5CF6", // Vibrant purple accent used on buttons, icons, and hero headers
  warning: "#F59E0B", // Standard warning amber / badge tint

  dark: {
    text: "#9CA3AF", // Secondary muted text (e.g., subtitle, "See All")
    title: "#FFFFFF", // Primary titles and head text
    background: "#121212", // Main screen dark background
    navBackground: "#1C1A24", // Floating bottom navbar base container
    iconColor: "#9CA3AF", // Inactive navigation icon color
    iconColorFocused: "#FFFFFF", // Active navigation icon color
    uiBackground: "#262238", // Card containers, overlays, and header banner blocks
  },

  light: {
    text: "#6B7280",
    title: "#111827",
    background: "#F9FAFB",
    navBackground: "#FFFFFF",
    iconColor: "#6B7280",
    iconColorFocused: "#8B5CF6",
    uiBackground: "#F3F4F6",
  },
};
