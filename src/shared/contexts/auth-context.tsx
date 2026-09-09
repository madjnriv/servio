import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { User } from "../types/user.types";

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

  const value = useMemo(
    () => ({ isAuthenticated, isLoading, user, token, setAuth, clearAuth }),
    [isAuthenticated, isLoading, user, token, setAuth, clearAuth],
  );
  return <AuthContext value={value}>{children}</AuthContext>;
};
