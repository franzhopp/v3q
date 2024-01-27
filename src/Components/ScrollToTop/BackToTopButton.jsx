import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
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
            className="fixed bottom-10 right-7 shadow-sm rounded-full z-max"
          >
            <div className="h-53 h-54 bg-FFF6E4 rounded-full border-D83939 border-4 p-5">
              <FaArrowUp className="text-D83939" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
