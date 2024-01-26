import { useEffect, useState } from "react";

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
          <svg
            onClick={scrollUp}
            className="fixed bottom-48 right-10 rounded-full  shadow-2xl z-max"
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="54"
            viewBox="0 0 53 54"
            fill="none"
          >
            <circle
              cx="26.5"
              cy="26.6814"
              r="26.5"
              transform="rotate(90 26.5 26.6814)"
              fill="#FFF6E4"
            />
            <path
              d="M28.072 12.3164C27.2841 11.4808 25.9945 11.469 25.1915 12.29L12.1055 25.6702C11.3024 26.4912 11.2901 27.8343 12.078 28.6699C12.8658 29.5055 14.1555 29.5174 14.9585 28.6962L26.5906 16.8028L38.003 28.9071C38.7908 29.7428 40.0805 29.7546 40.8835 28.9335C41.6866 28.1125 41.6989 26.7694 40.911 25.9338L28.072 12.3164ZM28.3998 41.6994L28.6549 13.8217L24.5812 13.7845L24.326 41.6621L28.3998 41.6994Z"
              fill="#C22E2E"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
