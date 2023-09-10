// import { useState } from "react";
import { ImCross } from "react-icons/im";

const ModalSearch = ({ closeModal }) => {
  return (
    <>
      <div className="bg-FFF6E4 flex space-x-2">
        <input
          type="text"
          placeholder="Votre recherche..."
          data-aos="fade-right"
          className="rounded-xl p-3 outline-none input-bordered input-primary mb-5 ml-3 mr-3 sm:mb-0 md:ml-0 "
        />
        <button onClick={() => closeModal(false)}>
          <ImCross className="text-C22E2E" />
        </button>
      </div>
    </>
  );
};

export default ModalSearch;
