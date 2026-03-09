# Config-Driven React UI

A **modular React application** where the UI structure, content, and styling are controlled through a **configuration file** instead of hard-coding components.

The goal of this project is to demonstrate how to build a **flexible, scalable, and maintainable UI system** using React, TypeScript, and TailwindCSS.

---

# Features

* Config-driven UI rendering
* Dynamic page routing
* Lazy loading for performance
* Theme switching (Light / Dark)
* Responsive Navbar
* Reusable configurable components
* TailwindCSS styling
* Component resolver system

---

# Tech Stack

* React
* TypeScript
* Vite
* React Router
* TailwindCSS
* Context API

---

# Project Structure

```
src
│
├── components
│   ├── configurable      # Config-driven UI components
│   ├── Loader            # Loader component
│   ├── ComponentResolver # Maps config types → components
│   └── PageRenderer      # Renders sections based on page config
│
├── context
│   ├── ConfigContext     # Provides application configuration
│   └── ThemeContext      # Handles theme switching
│
├── hooks
│   ├── usePageConfig     # Gets page config based on route
│   └── useFilteredProducts
│
├── config
│   └── AppConfig.ts      # Main configuration file
│
├── App.tsx               # Main application entry
└── index.css             # Global styles
```

---

# How It Works

### 1. Configuration Driven

All pages and sections are defined inside `AppConfig.ts`.

Example:

```
pages: [
  {
    path: "/",
    sections: [
      { type: "Hero", props: {...} },
      { type: "FeatureGrid", props: {...} }
    ]
  }
]
```

---

### 2. Component Resolver

The `ComponentResolver` maps a `type` from the config to a React component.

Example:

```
const componentRegistry = {
  Hero,
  FeatureGrid,
  ProductGrid,
  ProfileCard,
};
```

---

### 3. Dynamic Page Rendering

`PageRenderer` reads the current route and renders the correct sections.

```
<Routes>
 {appConfig.pages.map(page => (
   <Route path={page.path} element={<PageRenderer />} />
 ))}
</Routes>
```

---

### 4. Theme System

Themes are defined inside the config and applied using CSS variables.

Theme switching is handled by `ThemeContext`.

---

# Running the Project

### Install dependencies

```
npm install
```

### Start development server

```
npm run dev
```

### Build for production

```
npm run build
```

---

# Adding a New Component

1. Create the component inside:

```
components/configurable/
```

2. Register it inside `ComponentResolver`.

```
const componentRegistry = {
  Hero,
  NewComponent
}
```

3. Use it in `AppConfig`.

```
{
 type: "NewComponent",
 props: { ... }
}
```

---

# Key Concepts Demonstrated

* Config-driven architecture
* Dynamic UI rendering
* Reusable component patterns
* Theme management using CSS variables
* Lazy loading with React Suspense
* Context-based global configuration

---

# Author

Ajith Gopakumar


github_link - https://github.com/ajithcg10/AgShop

vercel_hosted_link - https://ag-shop-sigma.vercel.app/