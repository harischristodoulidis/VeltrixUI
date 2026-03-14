import "./App.css";
import Header from "./components/content/Header";
import Buttons from "./components/content/Buttons";
import Inputs from "./components/content/Inputs";
import FormComponents from "./components/content/FormComponents";

function App() {
  return (
    <>
      <div className="bg-background min-h-screen">
        <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <Header />
          <Buttons />
          <Inputs />
          <FormComponents />
        </div>
      </div>
    </>
  );
}

export default App;
