import Header from "./components/Header";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { useState } from "react";
import { PiMoonLight, PiSunLight } from "react-icons/pi";

const App = () => {
  return (
    <main className="grid min-h-screen dark:text-indigo-300 transition-colors duration-700 delay-700">
      <div className="flex justify-center pt-12">
        <DarkModeSwitch />
      </div>
      <div className="h-screen fixed inset-0 -translate-y-full dark:translate-y-0 dark:bg-indigo-950 transition-all duration-500 ease-in-out origin-top -z-10"></div>
      <Header />
      <Services />
      <Footer />
    </main>
  );
};

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark"); // Toggle dark mode class
  };

  return (
    <label
      htmlFor="dark-mode-switch"
      className="inline-flex items-center cursor-pointer dark:text-white py-2 border border-slate-500 rounded-full"
    >
      <input
        type="checkbox"
        id="dark-mode-switch"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        hidden={true}
      />
      <span className="size-8 grid place-items-center rounded-full bg-gray-300 dark:bg-gray-50 transition duration-300 ease-in-out transform mx-1">
        <PiSunLight className="size-4 text-indigo-950" />
      </span>
      <span className="size-8 grid place-items-center rounded-full bg-blue-500 dark:bg-indigo-500 transition duration-300 ease-in-out transform mx-1">
        <PiMoonLight className="size-4 text-slate-100" />
      </span>
    </label>
  );
};

export default App;
