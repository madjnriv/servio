import { Models } from "react-native-appwrite";

export type PricingUnit = "HOUR" | "MONTH" | "DAY" | "YEAR";

export interface Service {
  id: string;
  name: string;
  slug: string;
  excerpt: string;
  description: string;
  imageUrl?: string[];
  pricingUnit: PricingUnit;
  isActive?: boolean;

  providerId?: string;
  categoryId?: string;

  price: number;
  createdAt: string;
}

export interface ServiceCategory {
  name: string;
  slug: string;
  description?: string;
  sortOrder?: number;
  isActive?: boolean;
}

export interface RawService extends Models.DefaultRow {
  name: string;
  slug: string;
  excerpt: string;
  description: string;
  image_url?: string[];

  pricing_unit: PricingUnit;

  is_active?: boolean;

  provider_id: string;
  category_id: string;

  price: number;
}
export interface RawServiceCategory extends Models.DefaultRow {
  name: string;
  slug: string;
  description?: string;
  sort_order?: number;
  is_active?: boolean;
}
