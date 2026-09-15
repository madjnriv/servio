import { useEffect } from "react";
import { WelcomeScreen } from "@/features/welcome";
import { useAuthContext } from "@/shared/hooks/use-auth";
import { useRouter } from "expo-router";

const Home = () => {
  const { user, isAuthenticated } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && user) router.replace("/dashboard");
  }, [isAuthenticated, user]);

  return <WelcomeScreen />;
};

export default Home;
