import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AuthUser, RawUserProfile, UserProfile } from "../types/user.types";
import { getErrorMessage } from "../lib/get-error-msg";
import { account, tablesDB } from "../lib/appwrite";
import { ScreenLoader } from "../components/screen-loader";
import { useRouter } from "expo-router";
import { ProviderProfile, RawProviderProfile } from "../types/provider-profile";
import { COLLECTION_ID, DATABASE_ID } from "../constants/database";
import { Query } from "react-native-appwrite";

interface ProfilesParams {
  user?: UserProfile;
  provider?: ProviderProfile;
}
interface AuthContextValue {
  authUser: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuth: (user: AuthUser) => void;
  clearAuth: () => void;
  userProfile: UserProfile | null;
  providerProfile: ProviderProfile | null;
  setProfiles: (params: ProfilesParams) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [providerProfile, setProviderProfile] =
    useState<ProviderProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  const setAuth = useCallback((authUser: AuthUser) => {
    setAuthUser(authUser);
    // setToken(token);
    setIsAuthenticated(true);
    setIsLoading(false);
  }, []);

  const clearAuth = useCallback(() => {
    setAuthUser(null);
    setToken(null);
    setIsAuthenticated(false);
    setIsLoading(false);
  }, []);

  const setProfiles = useCallback(({ provider, user }: ProfilesParams) => {
    if (provider) {
      setProviderProfile(provider);
    }
    if (user) {
      setUserProfile(user);
    }
  }, []);

  const getInitialAuthState = useCallback(async () => {
    setIsLoading(true);
    try {
      const currentUser = await account.get();

      // GET USER DATA
      const { name, email, $id: userID } = currentUser;

      // GET USER'S PROVIDER PROFILE
      const providerProfile = await tablesDB.listRows<RawProviderProfile>({
        databaseId: DATABASE_ID,
        tableId: COLLECTION_ID.PROVIDER_PROFILE,
        queries: [Query.equal("user_profile_id", currentUser.$id)],
      });

      const provider = providerProfile.rows[0];
      if (!provider) return null;

      // GET USER'S PROFILE
      const userProfile = await tablesDB.listRows<RawUserProfile>({
        databaseId: DATABASE_ID,
        tableId: COLLECTION_ID.USER_PROFILE,
        queries: [Query.equal("$id", currentUser.$id)],
      });

      const user = userProfile.rows[0];
      if (!user) return null;

      // SET USER CONTEXT
      setAuthUser({ name, email, id: userID });

      // SET PROVIDER PROFILE CONTEXT
      setProviderProfile({
        id: provider.$id,
        userProfileId: provider.user_profile_id,
        businessName: provider.business_name,
        businessEmail: provider.business_email,
        serviceCategories: provider.service_categories,
        isAvailable: provider.is_available,
        isVerified: provider.is_verified,
        bio: provider.bio,
        location: provider.location,
      });

      // SET USER PROFILE CONTEXT
      setUserProfile({
        id: user.$id,
        isActive: user.is_active,
        isVerified: user.is_verified,
        role: user.role,
        createdAt: user.$createdAt,
        updatedAt: user.$updatedAt,
        avatarUrl: user.avatar_url,
      });

      setIsAuthenticated(true);
      router.replace("/dashboard");
    } catch (error) {
      console.log(error);

      const message = getErrorMessage(error);
      // toast.error(message, { toasterId: "auth-state-error" });
      setAuthUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getInitialAuthState();
  }, []);

  const value = useMemo(
    () => ({
      isAuthenticated,
      isLoading,
      authUser,
      token,
      setAuth,
      clearAuth,
      providerProfile,
      userProfile,
      setProfiles,
    }),
    [
      isAuthenticated,
      isLoading,
      authUser,
      token,
      setAuth,
      clearAuth,
      providerProfile,
      setProfiles,
    ],
  );

  if (isLoading) {
    return <ScreenLoader />;
  }
  return <AuthContext value={value}>{children}</AuthContext>;
};
