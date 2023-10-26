import Modal from "react-modal";
import ImgText from "../../assets/logo-4.png";

const CookieModal = ({ isOpen, onRequestClose, onAccept }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Cookie Modal"
      className="bg-FFF6E4 rounded-2xl fixed bottom-16 left-10 right-10 p-10 outline-none border-none shadow-none"
    >
      <div className="text-left">
        <h2 className="text-C22E2E text-xl font-inter font-extrabold mb-2">
          Politique de cookies
        </h2>
        <p className="text-black">
          Ce site utilise des cookies pour améliorer son fonctionnement et votre
          expérience. Vous pouvez les accepter ou les gérer selon vos
          préférences, ou continuer votre navigation sans les accepter. Bon
          visionnage ! L'équipe{" "}
          <span>
            <img
              src={ImgText}
              className="h-6 mr-1 inline"
              alt="Icône navi studio."
            />
          </span>
        </p>
        <div className="flex flex-col">
          <div className="w-52 pt-5">
            <button
              onClick={onAccept}
              className=" bg-C22E2E hover:bg-0C3E78  text-FFF6E4 font-extrabold font-sans-serif py-2 px-4 rounded-full"
            >
              Accepter
            </button>
            <button
              onClick={onRequestClose}
              className="text-C22E2E font-inter font-sans-serif mt-3 underline"
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
