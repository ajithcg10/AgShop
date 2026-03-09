import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import { ConfigProvider } from "./context/ConfigContext";
import { ThemeProvider } from "./context/ThemeContext";
import appConfig from "./config/AppConfig";
import Navbar from "./components/NavBar";
import AGShopLoader from "./components/Loader/AGShopLoader";

const PageRenderer = lazy(() => import("./components/PageRenderer"));

const App = () => (
  <ConfigProvider>
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />

        <Suspense fallback={<div><AGShopLoader/></div>}>
          <Routes>
            {appConfig.pages.map((page) => (
              <Route key={page.path} path={page.path} element={<PageRenderer />} />
            ))}
            <Route path="*" element={<PageRenderer />} />
          </Routes>
        </Suspense>

      </BrowserRouter>
    </ThemeProvider>
  </ConfigProvider>
);

export default App;