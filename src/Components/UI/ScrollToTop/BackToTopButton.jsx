import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeProvider.jsx";

const BackToTopButton = () => {
  const { isDarkMode } = useTheme();
  const [BackToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {BackToTopButton && (
        <button>
          <div
            onClick={scrollUp}
            className="fixed bottom-8 right-5 shadow-sm rounded-full z-50 animate-formbounce"
          >
            <div
              className={`p-4 border-d83939 border-4 h-53 h-54 rounded-full shadow-sm transform active:scale-75 transition-transform ${
                isDarkMode ? "bg-fff6e4" : "bg-061628"
              }`}
            >
              <FaArrowUp className="text-d83939" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
