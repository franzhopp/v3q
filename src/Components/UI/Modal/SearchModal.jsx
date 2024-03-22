import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { data } from "./Data/SearchData.jsx";
import { useTheme } from "../../../context/ThemeProvider.jsx";
const ModalSearch = ({ searchQuery, closeModal }) => {
  const [searchQueryText, setSearchQueryText] = useState("");
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const query = searchQueryText.toLowerCase();
      searchQuery(query);
      const matchingPage = data.find(
        (item) => item.keywords.toLowerCase() === query
      );
      if (matchingPage) {
        navigate(matchingPage.link);
        window.scrollTo(0, 0);
        closeModal(false);
      }
    }
  };
  const handleReset = () => {
    setSearchQueryText("");
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);
  return (
    <div className={`flex space-x-2 ${isDarkMode ? "bg-fff6e4" : "bg-061628"}`}>
      <div
        data-aos="fade-in"
        className={`bg-fff6e4 fixed w-full h-12 2xl:h-16 top-96 2xl:top-28 left-0`}
      >
        <div className={`flex justify-between`}>
          <input
            type="text"
            placeholder="Search..."
            onKeyDown={handleSearch}
            value={searchQueryText}
            onChange={(e) => setSearchQueryText(e.target.value)}
            className={`bg-fff6e4 text-c22e2e h-12 2xl:h-16 text-lg 2xl:text-2xl outline-none px-8`}
          />
          <button
            onClick={handleSearch}
            className={`text-c22e2e px-8 inline transform active:scale-75 transition-transform`}
          >
            <ImCross onClick={() => closeModal(false)} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSearch;
