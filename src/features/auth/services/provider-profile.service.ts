import { account, tablesDB } from "@/shared/lib/appwrite";
import { DATABASE_ID, COLLECTION_ID } from "@/shared/constants/database";
import { Query } from "react-native-appwrite";
import { ProviderProfile } from "@/shared/types/provider-profile";

export const providerProfileService = {
  async getProfile(): Promise<ProviderProfile | null> {
    const currentUser = await account.get();

    const result = await tablesDB.listRows({
      databaseId: DATABASE_ID,
      tableId: COLLECTION_ID.PROVIDER_PROFILE,
      queries: [Query.equal("user_profile_id", currentUser.$id)],
    });

    const profile = result.rows[0];
    if (!profile) return null;

    const {
      $id,
      user_profile_id,
      business_name,
      business_email,
      bio,
      location,
      service_categories,
      is_available,
      is_verified,
    } = profile;

    return {
      id: $id,
      userProfileId: user_profile_id,
      businessName: business_name,
      businessEmail: business_email,
      serviceCategories: service_categories,
      isAvailable: is_available,
      isVerified: is_verified,
      bio,
      location,
    };
  },
};
