import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
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
import Tooltip from "./components/ui/Tooltip";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("darkMode");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleChangeTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <div className={`mx-auto max-w-350 px-4 py-6 sm:px-6 sm:py-8 lg:px-8`}>
        <div className="fixed top-5 right-5 z-50">
          {!darkMode ? (
            <Tooltip content="Switch to light mode" position="left">
              <Moon className="cursor-pointer" onClick={handleChangeTheme} />
            </Tooltip>
          ) : (
            <Tooltip content="Switch to light mode" position="left">
              <Sun className="cursor-pointer" onClick={handleChangeTheme} />
            </Tooltip>
          )}
        </div>

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
