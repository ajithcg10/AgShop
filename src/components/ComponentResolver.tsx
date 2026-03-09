import type { ComponentType } from "react";

import Hero from "./configurable/Hero";
import FeatureGrid from "./configurable/FeatureGrid";
import SectionHeading from "./configurable/SectionHeading";
import ProductGrid from "./configurable/ProductGrid";
import ProfileCard from "./configurable/ProfileCard";
import StatsGrid from "./configurable/StatsGrid";
import type { ComponentConfig } from "../config/AppConfig";

// Registry: maps config `type` strings to React components
// To add a new component, register it here and in the config.
const componentRegistry: Record<string, ComponentType<any>> = {
  Hero,
  FeatureGrid,
  SectionHeading,
  ProductGrid,
  ProfileCard,
  StatsGrid,
};

interface Props {
  sections: ComponentConfig[];
}

const ComponentResolver = ({ sections }: Props) => (
  <>
    {sections.map((section, i) => {
      const Component = componentRegistry[section.type];
      if (!Component) {
        console.warn(`Unknown component type: "${section.type}"`);
        return null;
      }
      return <Component key={`${section.type}-${i}`} {...section.props} />;
    })}
  </>
);

export default ComponentResolver;
