import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import type { PageConfig } from "../config/AppConfig";
import { useConfig } from "../context/ConfigContext";



export const usePageConfig = (): PageConfig | null => {
  const { pages } = useConfig();
  const { pathname } = useLocation();

  return useMemo(
    () => pages.find((p) => p.path === pathname) ?? null,
    [pages, pathname]
  );
};
