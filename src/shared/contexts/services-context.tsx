import { createContext, useCallback, useMemo, useState } from "react";
import type { Service } from "../types/services.types";

interface ServicesContextValue {
  services: Service[];
  setServicesContext: (services: Service[]) => void;
}
export const ServicesContext = createContext<ServicesContextValue | undefined>(
  undefined,
);

interface ServicesProviderProps {
  children: React.ReactNode;
}
export const ServicesProvider = ({ children }: ServicesProviderProps) => {
  const [services, setServices] = useState<Service[]>([]);

  const setServicesContext = useCallback(() => {}, []);

  const value = useMemo(() => ({ services, setServicesContext }), [services]);

  return <ServicesContext value={value}>{children}</ServicesContext>;
};
