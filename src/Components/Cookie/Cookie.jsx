import Modal from "react-modal";

const CookieModal = ({ isOpen, onRequestClose, onAccept }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Cookie Modal"
      className="fixed bottom-0 left-0 right-0 bg-white p-4 outline-none border-none shadow-none"
      // overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-white outline-none border-none shadow-none"
    >
      <div className="text-left">
        <h2 className="text-xl font-sans-serif font-extrabold mb-2 text-black">
          Politique de cookies
        </h2>
        <p className="text-black">
          Ce site utilise des cookies pour améliorer votre expérience.
        </p>
        <div className="flex flex-col">
          <div className="w-52">
            <button
              onClick={onAccept}
              className="bg-f3dbc3 hover:bg-gray text-white font-extrabold font-sans-serif py-2 px-4 rounded-full"
            >
              Accepter
            </button>
            <button
              onClick={onRequestClose}
              className="text-black font-sans-serif mt-5 underline"
            >
              Continuer sans accepter
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CookieModal;
