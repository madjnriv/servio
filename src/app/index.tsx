import { useEffect } from "react";
import { WelcomeScreen } from "@/features/welcome";
import { useAuthContext } from "@/shared/hooks/use-auth";
import { useRouter } from "expo-router";

const Home = () => {
  const { authUser, isAuthenticated } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && authUser) router.replace("/dashboard");
  }, [isAuthenticated, authUser]);

  return <WelcomeScreen />;
};

export default Home;
