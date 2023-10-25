import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { data } from "./SearchData.jsx";

const ModalSearch = ({ closeModal, searchQuery }) => {
  const [searchQueryText, setSearchQueryText] = useState("");
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

  return (
    <div className="bg-FFF6E4 flex space-x-2">
      <input
        data-aos="fade-left"
        type="text"
        placeholder="Search..."
        onKeyDown={handleSearch}
        value={searchQueryText}
        onChange={(e) => setSearchQueryText(e.target.value)}
        className="rounded-xl p-3 outline-none border border-1-C22E2E input-bordered input-primary mb-5 ml-3 mr-3 sm:mb-0 md:ml-0"
      />
      <button onClick={handleSearch}>
        <ImCross
          onClick={() => closeModal(false)}
          className="text-C22E2E mb-4 sm:mb-0"
        />
      </button>
    </div>
  );
};

export default ModalSearch;
