import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { data } from "./Data/SearchData.jsx";
import { useTheme } from "../../context/ThemeProvider.jsx";

const ModalSearch = ({ closeModal, searchQuery }) => {
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
    <div className={`flex space-x-2 ${isDarkMode ? "bg-FFF6E4" : "bg-042142"}`}>
      <input
        data-aos="fade-left"
        type="text"
        placeholder="Search"
        onKeyDown={handleSearch}
        value={searchQueryText}
        onChange={(e) => setSearchQueryText(e.target.value)}
        className="rounded-xl p-3 outline-none border border-1-C22E2E input-bordered input-primary mb-5 ml-3 mr-3 sm:mb-0 md:ml-0"
      />
      <button onClick={handleSearch}>
        <ImCross
          onClick={() => closeModal(false)}
          className={`mb-4 mr-4 sm:mb-0 hover:text-0C3E78 ${
            isDarkMode ? "text-C22E2E" : "text-FFF6E4"
          }`}
        />
      </button>
    </div>
  );
};

export default ModalSearch;
