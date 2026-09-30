import { Models } from "react-native-appwrite";

export type UserRole = "CUSTOMER" | "PROVIDER";

export interface UserProfile {
  id: string;
  avatarUrl?: string;
  isVerified: boolean;
  isActive: boolean;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface RawUserProfile extends Models.DefaultRow {
  avatar_url?: string;
  is_verified: boolean;
  is_active: boolean;
  role: UserRole;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}
