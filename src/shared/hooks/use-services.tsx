import { useContext } from "react";
import { ServicesContext } from "../contexts/services-context";

export const useServices = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
