import { COLLECTION_ID, DATABASE_ID } from "@/shared/constants/database";
import { tablesDB } from "@/shared/lib/appwrite";
import { RawUserProfile, UserProfile } from "@/shared/types/user.types";

export const userProfileService = {
  create: async (id: string): Promise<UserProfile> => {
    const newUserProfile = await tablesDB.createRow<RawUserProfile>({
      databaseId: DATABASE_ID,
      tableId: COLLECTION_ID.USER_PROFILE,
      rowId: id,
      data: {
        $id: id,
      },
    });

    return {
      id: newUserProfile.$id,
      avatarUrl: newUserProfile.avatar_url,
      isActive: newUserProfile.is_active,
      isVerified: newUserProfile.is_verified,
      role: newUserProfile.role,
      createdAt: newUserProfile.$createdAt,
      updatedAt: newUserProfile.$updatedAt,
    };
  },
};
