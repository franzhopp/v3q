import Modal from "react-modal";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import translations from "./translate.jsx";

const CookieModal = ({ isOpen, onRequestClose, onAccept }) => {
  const { language, changeLanguage } = useLanguage();
  const changeLanguageHandler = (newLanguage) => {
    changeLanguage(newLanguage);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Cookie Modal"
      className="fixed bg-fff6e4 shadow-md rounded-tr-2xl rounded-tl-2xl bottom-0 left-0 right-0 p-3 outline-none border-none"
    >
      <div className="flex justify-center pb-5">
        <span className="w-12 h-1 rounded-full bg-gray-400"></span>
      </div>
      <div className="p-5">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="text-left"
        >
          <h2 className="text-c22e2e text-xl font-inter font-extrabold mb-2">
            {translations[language].cookieTitleFr}
            {translations[language].cookieTitleEn}
          </h2>
          <p className="text-black">
            <RiBardLine className="inline" />{" "}
            {translations[language].cookieDescFr}
            {translations[language].cookieDescEn}
          </p>
          <div className="flex flex-col my-3">
            <li className="list-none">
              <div className="text-c22e2e block px-1 py-2 border-c22e2e border-b-2 rounded-md text-base font-extrabold">
                <select
                  value={language}
                  onChange={(e) => changeLanguageHandler(e.target.value)}
                >
                  <option value="fr">🇫🇷</option>
                  <option value="en">🇬🇧</option>
                </select>
              </div>
            </li>
            <div className="w-52 pt-5">
              <button
                onClick={onAccept}
                className=" bg-c22e2e hover:bg-0C3E78  text-fff6e4 font-extrabold font-sans-serif py-2 px-4 rounded-full"
              >
                {translations[language].btnCookieAcceptFr}
                {translations[language].btnCookieAcceptEn}
              </button>
            </div>
            <div className="w-52 pt-1">
              <button
                onClick={onRequestClose}
                className="text-c22e2e font-inter font-sans-serif mt-3 underline"
              >
                {translations[language].btnCookieDisableFr}
                {translations[language].btnCookieDisableEn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CookieModal;
