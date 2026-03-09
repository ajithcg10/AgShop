import { createContext, useContext, type ReactNode } from "react";
import type { AppConfig } from "../config/AppConfig";
import appConfig from "../config/AppConfig";

const ConfigContext = createContext<AppConfig | null>(null);

export const ConfigProvider = ({ children }: { children: ReactNode }) => (
  <ConfigContext.Provider value={appConfig}>{children}</ConfigContext.Provider>
);

export const useConfig = () => {
  const ctx = useContext(ConfigContext);
  if (!ctx) throw new Error("useConfig must be used within ConfigProvider");
  return ctx;
};
