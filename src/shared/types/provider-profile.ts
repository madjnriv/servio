import { Models } from "react-native-appwrite";

export interface ProviderProfile {
  id: string;
  userProfileId?: string;

  businessName: string;
  businessEmail: string;
  bio?: string;
  location: string;

  serviceCategories?: string[];

  isAvailable?: boolean;
  isVerified?: boolean;
}

export interface RawProviderProfile extends Models.Document {
  user_profile_id?: string;

  business_name: string;
  business_email: string;
  bio?: string;
  location: string;

  service_categories?: string[];

  is_available?: boolean;
  is_verified?: boolean;
}
