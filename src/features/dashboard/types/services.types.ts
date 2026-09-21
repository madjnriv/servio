import { Models } from "react-native-appwrite";

export type PricingUnit = "HOUR" | "SERVICE" | "VISIT" | "DAY";

export interface Service {
  name: string;
  slug: string;
  excerpt: string;
  description: string;
  imageUrl?: string[];
  pricingUnit: PricingUnit;
  isActive?: boolean;
  sortOrder?: number;

  providerId?: string;
  categoryId?: string;

  price: number;
}

export interface ServiceCategory {
  name: string;
  slug: string;
  description?: string;
  sortOrder?: number;
  isActive?: boolean;
}

export interface RawServiceCategory extends Models.DefaultDocument {
  name: string;
  slug: string;
  description?: string;
  sort_order?: number;
  is_active?: boolean;
}

export interface RawService extends Models.Document {
  name: string;
  slug: string;
  excerpt: string;
  description: string;
  image_url?: string[];

  pricing_unit: PricingUnit;

  is_active?: boolean;
  sort_order?: number;

  provider_id?: string;
  category_id?: string;

  price: number;
}
