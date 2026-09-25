import type { ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons";

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: ComponentProps<typeof Ionicons>["name"];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "1",
    name: "AC Service",
    slug: "ac-services",
    description:
      "Air conditioning installation, repair, cleaning and maintenance.",
    icon: "snow-outline",
  },
  {
    id: "2",
    name: "Cleaning",
    slug: "cleaning",
    description: "Home, office and specialized cleaning services.",
    icon: "sparkles",
  },
  {
    id: "3",
    name: "Plumbing",
    slug: "plumbing",
    description: "Plumbing installation, repair and maintenance services.",
    icon: "water-outline",
  },
  {
    id: "4",
    name: "Electrical",
    slug: "electrical",
    description: "Electrical installation, repair and maintenance services.",
    icon: "flash-outline",
  },
  {
    id: "5",
    name: "Handyman",
    slug: "handyman",
    description: "General repair, installation and maintenance services.",
    icon: "hammer-outline",
  },
  {
    id: "6",
    name: "Painting",
    slug: "painting",
    description: "Interior, exterior and decorative painting services.",
    icon: "color-palette",
  },
  {
    id: "7",
    name: "Construction",
    slug: "construction",
    description: "Construction, renovation and property improvement services.",
    icon: "construct-outline",
  },
  {
    id: "8",
    name: "Moving & Logistics",
    slug: "moving-logistics",
    description:
      "Moving, packing, loading, delivery and local logistics services.",
    icon: "car-outline",
  },
  {
    id: "9",
    name: "Carpentry",
    slug: "carpentry",
    description:
      "Furniture making, repairs, installations and woodwork services.",
    icon: "cube-outline",
  },
  {
    id: "10",
    name: "Appliance Repair",
    slug: "appliance-repair",
    description:
      "Repair, installation and maintenance of household appliances.",
    icon: "build-outline",
  },
];
