import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/content/Header";
import Buttons from "./components/content/Buttons";
import Inputs from "./components/content/Inputs";
import FormComponents from "./components/content/FormComponents";
import Navigation from "./components/content/Navigation";
import TabMenu from "./components/content/TabMenu";
import BreadcrumbContent from "./components/content/BreadcrumbContent";
import FeedbackComponents from "./components/content/FeedbackComponents";
import DataDisplay from "./components/content/DataDisplay";
import Overlays from "./components/content/Overlays";
import Button from "./components/ui/Button";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <div
        className={`${darkMode && `dark`} mx-auto max-w-350 px-4 py-6 sm:px-6 sm:py-8 lg:px-8`}
      >
        <Button variant="primary" onClick={() => setDarkMode((prev) => !prev)}>
          Channge Theme
        </Button>
        <Header />
        <Buttons />
        <Inputs />
        <FormComponents />
        <Navigation />
        <TabMenu />
        <BreadcrumbContent />
        <FeedbackComponents />
        <DataDisplay />
        <Overlays />
      </div>
      <footer className="border-border text-muted-foreground mt-12 border-t pt-6 text-center text-xs sm:mt-16 sm:pt-8 sm:text-sm">
        <p>Modern UI Component Library • Built with React & TypeScript</p>
      </footer>
    </>
  );
}

export default App;
