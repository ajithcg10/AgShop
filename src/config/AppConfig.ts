export interface ThemeConfig {
  colors: {
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    background: string;
    foreground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    card: string;
    cardForeground: string;
    border: string;
  };
  spacing: {
    page: string;
    section: string;
    card: string;
  };
  borderRadius: string;
  fontFamily: string;
  headingFontFamily: string;
}

export interface ComponentConfig {
  type: string;
  props: Record<string, unknown>;
}

export interface PageConfig {
  path: string;
  title: string;
  sections: ComponentConfig[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface AppConfig {
  appName: string;
  nav: NavItem[];
  pages: PageConfig[];
  themes: Record<string, ThemeConfig>;
  defaultTheme: string;
  userData: {
    name: string;
    email: string;
    avatar: string;
    bio: string;
    joinDate: string;
    stats: { label: string; value: string }[];
  };
  products: {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating: number;
  }[];
}

const appConfig: AppConfig = {
  appName: "AGShop",
  nav: [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Profile", path: "/profile" },
  ],
  defaultTheme: "light",
  themes: {
    light: {
      colors: {
        primary: "#1a1a2e",
        primaryForeground: "#ffffff",
        secondary: "#e2e8f0",
        secondaryForeground: "#1a1a2e",
        background: "#f8f9fc",
        foreground: "#1a1a2e",
        muted: "#f1f5f9",
        mutedForeground: "#64748b",
        accent: "#0f3460",
        accentForeground: "#ffffff",
        card: "#ffffff",
        cardForeground: "#1a1a2e",
        border: "#e2e8f0",
      },
      spacing: { page: "2rem", section: "3rem", card: "1.5rem" },
      borderRadius: "0.75rem",
      fontFamily: "'IBM Plex Sans', sans-serif",
      headingFontFamily: "'Space Grotesk', sans-serif",
    },
    dark: {
      colors: {
        primary: "#e94560",
        primaryForeground: "#ffffff",
        secondary: "#2a2a4a",
        secondaryForeground: "#e2e8f0",
        background: "#0f0f23",
        foreground: "#e2e8f0",
        muted: "#1a1a35",
        mutedForeground: "#94a3b8",
        accent: "#e94560",
        accentForeground: "#ffffff",
        card: "#16213e",
        cardForeground: "#e2e8f0",
        border: "#2a2a4a",
      },
      spacing: { page: "2rem", section: "3rem", card: "1.5rem" },
      borderRadius: "0.75rem",
      fontFamily: "'IBM Plex Sans', sans-serif",
      headingFontFamily: "'Space Grotesk', sans-serif",
    },
  },
  pages: [
    {
      path: "/",
      title: "Home",
      sections: [
        {
          type: "Hero",
          props: {
            heading: "Build with Configuration",
            subheading:
              "A modular, config-driven React application where every page, component, and style is defined by a single source of truth.",
            ctaText: "Browse Products",
            ctaLink: "/products",
          },
        },
        {
          type: "FeatureGrid",
          props: {
            heading: "Why Config-Driven?",
            features: [
              {
                icon: "⚡",
                title: "Instant Changes",
                description:
                  "Update pages, styles, and content by editing configuration — no component rewrites.",
              },
              {
                icon: "🧩",
                title: "Modular Architecture",
                description:
                  "Every UI block is a reusable component resolved at runtime from config.",
              },
              {
                icon: "🎨",
                title: "Theme Switching",
                description:
                  "Switch between light and dark themes — all driven by the config object.",
              },
              {
                icon: "📦",
                title: "Scalable",
                description:
                  "Add new pages by adding a config entry. Zero boilerplate required.",
              },
            ],
          },
        },
        {
          type: "InfoBanner",
          props: {
            text: "This entire application — layout, pages, styles, and content — is driven by a single configuration file.",
            variant: "accent",
          },
        },
      ],
    },
    {
      path: "/products",
      title: "Products",
      sections: [
        {
          type: "SectionHeading",
          props: {
            heading: "Our Products",
            subheading: "Browse our curated collection of premium items.",
          },
        },
        {
          type: "ProductGrid",
          props: {},
        },
      ],
    },
    {
      path: "/profile",
      title: "Profile",
      sections: [
        {
          type: "ProfileCard",
          props: {},
        },
        {
          type: "SectionHeading",
          props: {
            heading: "Account Stats",
            subheading: "Your activity at a glance.",
          },
        },
        {
          type: "StatsGrid",
          props: {},
        },
      ],
    },
  ],
  userData: {
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    avatar: "",
    bio: "Front-End developer passionate about clean architecture and config-driven design patterns.",
    joinDate: "March 2025",
    stats: [
      { label: "Orders", value: "24" },
      { label: "Reviews", value: "18" },
      { label: "Wishlist", value: "7" },
      { label: "Points", value: "1,240" },
    ],
  },
  products: [
    {
      id: "1",
      name: "Wireless Headphones",
      price: 89.99,
      description: "Premium noise-cancelling headphones with 30hr battery.",
      image: "",
      category: "Electronics",
      rating: 4.8,
    },
    {
      id: "2",
      name: "Mechanical Keyboard",
      price: 129.99,
      description: "Hot-swappable switches with RGB backlight.",
      image: "",
      category: "Electronics",
      rating: 4.6,
    },
    {
      id: "3",
      name: "Leather Backpack",
      price: 74.5,
      description: "Handcrafted genuine leather with laptop compartment.",
      image: "",
      category: "Accessories",
      rating: 4.9,
    },
    {
      id: "4",
      name: "Running Shoes",
      price: 119.0,
      description: "Lightweight with responsive cushioning technology.",
      image: "",
      category: "Footwear",
      rating: 4.7,
    },
    {
      id: "5",
      name: "Smart Watch",
      price: 199.99,
      description: "Health tracking, GPS, and 5-day battery life.",
      image: "",
      category: "Electronics",
      rating: 4.5,
    },
    {
      id: "6",
      name: "Desk Lamp",
      price: 45.0,
      description: "Adjustable LED with wireless charging base.",
      image: "",
      category: "Home",
      rating: 4.4,
    },
  ],
};

export default appConfig;
