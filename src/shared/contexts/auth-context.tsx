import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { User } from "../types/user.types";
import { getErrorMessage } from "../lib/get-error-msg";
import { toast } from "react-native-sonner";
import { account } from "../lib/appwrite";
import { LoadingSpinner } from "../components/loading-spinner";
import { useRouter } from "expo-router";

interface AuthContextValue {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuth: (user: User) => void;
  clearAuth: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  const setAuth = useCallback((user: User) => {
    setUser(user);
    // setToken(token);
    setIsAuthenticated(true);
    setIsLoading(false);
  }, []);

  const clearAuth = useCallback(() => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    setIsLoading(false);
  }, []);

  const getInitialAuthState = useCallback(async () => {
    setIsLoading(true);
    try {
      const userData = await account.get();
      const { name, email, $id } = userData;
      setUser({ name, email, id: $id });
      setIsAuthenticated(true);
      router.replace("/dashboard");
    } catch (error) {
      console.log(error);

      const message = getErrorMessage(error);
      toast.error(message, { toasterId: "auth-state-error" });
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getInitialAuthState();
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated, isLoading, user, token, setAuth, clearAuth }),
    [isAuthenticated, isLoading, user, token, setAuth, clearAuth],
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return <AuthContext value={value}>{children}</AuthContext>;
};
