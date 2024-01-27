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
            data-aos="fade-right"
            onClick={scrollUp}
            className="fixed bottom-8 right-4 shadow-sm rounded-full z-max"
          >
            <div className="bg-FFF6E4 p-4 border-D83939 border-2 h-53 h-54 rounded-full transition duration-500">
              <FaArrowUp className="text-D83939" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
