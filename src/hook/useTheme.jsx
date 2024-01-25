import { useEffect } from "react";
import { useTheme } from "../context/ThemeProvider";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

const DarkLightThemes = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = document.querySelectorAll(".bg-021228, .bg-FFF6E4");

    sections.forEach((section) => {
      if (isDarkMode) {
        section.classList.remove("bg-021228");
        section.classList.add("bg-FFF6E4");
      } else {
        section.classList.remove("bg-FFF6E4");
        section.classList.add("bg-021228");
      }
    });
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "" : ""}>
      <button
        onClick={toggleTheme}
        className={`py-2 px-4 bg-transparent rounded-full text-C22E2E ${
          isDarkMode ? "bg-C22E2E" : ""
        }`}
      >
        {isDarkMode ? "" : ""}
        <div className="border border-C22E2E rounded-full p-2">
          {isDarkMode ? <IoMdSunny /> : <IoMdMoon />}
        </div>
      </button>
    </div>
  );
};

export default DarkLightThemes;
