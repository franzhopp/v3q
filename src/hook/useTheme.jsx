import { useEffect } from "react";
import { useTheme } from "../context/ThemeProvider";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

const DarkLightThemes = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  useEffect(() => {
    const section = document.querySelectorAll(".bg-042142, .bg-FFF6E4");
    section.forEach((section) => {
      section.classList.add("duration-100");
      if (isDarkMode) {
        section.classList.remove("bg-042142");
        section.classList.add("bg-FFF6E4");
      } else {
        section.classList.remove("bg-FFF6E4");
        section.classList.add("bg-042142");
      }
    });
  }, [isDarkMode]);
  return (
    <div className={isDarkMode ? "" : ""}>
      <button
        onClick={toggleTheme}
        className={`${isDarkMode ? "text-C22E2E" : "text-FFF6E4"}`}
      >
        {isDarkMode ? "" : ""}
        <div data-aos="fade-right">
          {isDarkMode ? (
            <IoMdSunny className="h-8 w-5 2xl:h-7 2xl:w-7 2xl:mt-1 mt-0" />
          ) : (
            <IoMdMoon className="h-8 w-5 2xl:h-7 2xl:w-7 2xl:mt-1 mt-0" />
          )}
        </div>
      </button>
    </div>
  );
};

export default DarkLightThemes;
