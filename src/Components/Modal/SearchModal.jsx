// import { useState } from "react";
import { ImCross } from "react-icons/im";

const ModalSearch = ({ closeModal, searchQuery }) => {
  const handleSearch = (e) => {
    searchQuery(e.target.value);
    console.log(handleSearch);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      const elementFound = document.getElementById("all");
      if (elementFound) {
        elementFound.scrollIntoView({ behavior: "smooth" });
      }
      console.log("test");
    }
  };

  return (
    <>
      <div className="bg-FFF6E4 flex space-x-2">
      
        <input
          type="text"
          placeholder="Votre recherche..."
          onChange={handleSearch}
          onKeyUp={handleEnterPress}
          className="rounded-xl p-3 outline-none border border-1-C22E2E input-bordered input-primary mb-5 ml-3 mr-3 sm:mb-0 md:ml-0"
        />
        <button onClick={() => closeModal(false)}>
          <ImCross className="text-C22E2E mb-4 sm:mb-0" />
        </button>
        </div>
    
    </>
  );
};

export default ModalSearch;
