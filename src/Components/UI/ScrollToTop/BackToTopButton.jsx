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
            data-aos="fade-right"
            onClick={scrollUp}
            className="fixed bottom-8 right-5 shadow-sm rounded-full z-50"
          >
            <div
              className={`p-4 border-D83939 border-4 h-53 h-54 rounded-full shadow-sm transform active:scale-75 transition-transform ${
                isDarkMode ? "bg-FFF6E4" : "bg-042142"
              }`}
            >
              <FaArrowUp className="text-D83939" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
