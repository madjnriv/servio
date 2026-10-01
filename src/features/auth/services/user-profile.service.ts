import { COLLECTION_ID, DATABASE_ID } from "@/shared/constants/database";
import { tablesDB } from "@/shared/lib/appwrite";
import { RawUserProfile, UserProfile } from "@/shared/types/user.types";
import { Permission, Query, Role } from "react-native-appwrite";

export const userProfileService = {
  create: async (id: string): Promise<UserProfile> => {
    const newUserProfile = await tablesDB.createRow<RawUserProfile>({
      databaseId: DATABASE_ID,
      tableId: COLLECTION_ID.USER_PROFILE,
      rowId: id,
      data: {
        $id: id,
      },
      permissions: [
        Permission.read(Role.user(id)),
        Permission.update(Role.user(id)),
      ],
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

  get: async (id: string): Promise<UserProfile | null> => {
    const userProfile = await tablesDB.listRows<RawUserProfile>({
      databaseId: DATABASE_ID,
      tableId: COLLECTION_ID.USER_PROFILE,
      queries: [Query.equal("$id", id)],
    });

    const user = userProfile.rows[0];
    if (!user) return null;

    return {
      id: user.$id,
      createdAt: user.$createdAt,
      updatedAt: user.$updatedAt,
      avatarUrl: user.avatar_url,
      isActive: user.is_active,
      isVerified: user.is_verified,
      role: user.role,
    };
  },
};
