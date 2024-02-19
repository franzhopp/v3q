import { useEffect, useState } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { useTheme } from "../context/ThemeProvider";

const DarkLightThemes = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [localStorageTheme, setLocalStorageTheme] = useState(false);
  useEffect(() => {
    const section = document.querySelectorAll(".bg-061628, .bg-fff6e4");
    section.forEach((section) => {
      if (isDarkMode) {
        section.classList.remove("bg-061628");
        section.classList.add("bg-fff6e4");
      } else {
        section.classList.remove("bg-fff6e4");
        section.classList.add("bg-061628");
      }
    });
  }, [isDarkMode]);
  return (
    <div className={isDarkMode ? "" : ""}>
      <button
        onClick={toggleTheme}
        className={`${isDarkMode ? "text-c22e2e" : "text-fff6e4"}`}
      >
        {isDarkMode ? "" : ""}
        <div data-aos="fade-right">
          {isDarkMode ? (
            <IoMdSunny className="h-8 w-5 2xl:h-7 2xl:w-7 2xl:mt-1 mt-0 transform active:scale-75 transition-transform" />
          ) : (
            <IoMdMoon className="h-8 w-5 2xl:h-7 2xl:w-7 2xl:mt-1 mt-0 transform active:scale-75 transition-transform" />
          )}
        </div>
      </button>
    </div>
  );
};

export default DarkLightThemes;
