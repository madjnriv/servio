export const colors = {
  light: {
    // Base
    background: "#FFFFFF",
    foreground: "#1A1A1A",

    // Card
    card: "#FAFAFA",
    cardForeground: "#1A1A1A",

    // Popover
    popover: "#FAFAFA",
    popoverForeground: "#1A1A1A",

    // Brand
    primary: "#843CE1",
    primaryForeground: "#FFFFFF",

    // Secondary
    secondary: "#F0F0F0",
    secondaryForeground: "#262626",

    // Muted
    muted: "#F0F0F0",
    mutedForeground: "#666666",

    // Accent
    accent: "#843CE1",
    accentForeground: "#FFFFFF",

    // Destructive
    destructive: "#EF4444",

    // Borders / Inputs
    border: "#E0E0E0",
    input: "#E6E6E6",
    ring: "#843CE1",

    // Charts
    chart1: "#843CE1",
    chart2: "#9550E6",
    chart3: "#A05CE9",
    chart4: "#7029D1",
    chart5: "#6A20C7",

    // Sidebar
    sidebar: "#FAFAFA",
    sidebarForeground: "#1A1A1A",

    sidebarPrimary: "#843CE1",
    sidebarPrimaryForeground: "#FFFFFF",

    sidebarAccent: "#F0F0F0",
    sidebarAccentForeground: "#262626",

    sidebarBorder: "#E0E0E0",
    sidebarRing: "#843CE1",
  },

  dark: {
    // Base
    background: "#0A0A0A",
    foreground: "#F5F5F5",

    // Card
    card: "#141414",
    cardForeground: "#F5F5F5",

    // Popover
    popover: "#141414",
    popoverForeground: "#F5F5F5",

    // Brand
    primary: "#843CE1",
    primaryForeground: "#FFFFFF",

    // Secondary
    secondary: "#262626",
    secondaryForeground: "#F5F5F5",

    // Muted
    muted: "#212121",
    mutedForeground: "#A1A1A1",

    // Accent
    accent: "#843CE1",
    accentForeground: "#FFFFFF",

    // Destructive
    destructive: "#EF4444",

    // Borders / Inputs
    border: "#333333",
    input: "#2A2A2A",
    ring: "#843CE1",

    // Charts
    chart1: "#843CE1",
    chart2: "#9550E6",
    chart3: "#A05CE9",
    chart4: "#7029D1",
    chart5: "#6A20C7",

    // Sidebar
    sidebar: "#141414",
    sidebarForeground: "#F5F5F5",

    sidebarPrimary: "#843CE1",
    sidebarPrimaryForeground: "#FFFFFF",

    sidebarAccent: "#262626",
    sidebarAccentForeground: "#F5F5F5",

    sidebarBorder: "#333333",
    sidebarRing: "#843CE1",
  },
} as const;

export type ColorScheme = typeof colors;
export type ThemeColors = ColorScheme["light"];
