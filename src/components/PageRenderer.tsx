import { usePageConfig } from "../hooks/UsePageConfig";
import ComponentResolver from "./ComponentResolver";

const PageRenderer = () => {
  const page = usePageConfig();

  if (!page) {
    return (
      <div className="cfg-page cfg-page--empty">
        <h1>404</h1>
        <p>This page is not defined in the configuration.</p>
      </div>
    );
  }

  return (
    <main className="cfg-page">
      <ComponentResolver sections={page.sections} />
    </main>
  );
};

export default PageRenderer;
