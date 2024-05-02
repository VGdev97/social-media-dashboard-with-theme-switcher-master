import { useState } from "react";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Social from "./components/Social";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main
      className={`${
        darkMode ? "bg-[#20222f]" : "bg-[#f8f9fe]"
      } h-full lg:min-h-screen flex items-center justify-center`}
    >
      <div className="w-[1200px] mx-auto">
        <div className="px-8 lg:px-4">
          <Header toggleMode={toggleMode} darkMode={darkMode} />
          <Social darkMode={darkMode} />
          <Overview darkMode={darkMode} />
        </div>
      </div>
    </main>
  );
}

export default App;
