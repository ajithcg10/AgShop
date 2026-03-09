import { useMemo, useState } from "react";
import { useConfig } from "../context/ConfigContext";


/**
 * Custom hook that provides product data with category filtering.
 * Encapsulates filtering logic — not just a context wrapper.
 */
export const useFilteredProducts = () => {
  const { products } = useConfig();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    [products]
  );

  const filtered = useMemo(
    () =>
      activeCategory
        ? products.filter((p) => p.category === activeCategory)
        : products,
    [products, activeCategory]
  );

  return { products: filtered, categories, activeCategory, setActiveCategory };
};
