import React, { useEffect } from "react";
import { useAuthContext } from "../hooks/use-auth";
import { useRouter } from "expo-router";
import { LoadingSpinner } from "../components/loading-spinner";

interface ProtectedRouteProps {
  children: React.ReactNode;
}
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuthContext();
  const router = useRouter();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  useEffect(() => {
    if (!isAuthenticated) router.replace("/");
  }, [isAuthenticated]);
  return <>{children}</>;
};

export default ProtectedRoute;
