import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "./context/ConfigContext";
import { ThemeProvider } from "./context/ThemeContext";
import appConfig from "./config/AppConfig";
import Navbar from "./components/NavBar";
import PageRenderer from "./components/PageRenderer";

const App = () => (
  <ConfigProvider>
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {appConfig.pages.map((page) => (
            <Route key={page.path} path={page.path} element={<PageRenderer />} />
          ))}
          <Route path="*" element={<PageRenderer />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </ConfigProvider>
);

export default App;
