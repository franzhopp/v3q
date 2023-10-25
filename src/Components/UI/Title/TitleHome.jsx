import translations from "../translate.jsx";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import { motion } from "framer-motion";
import ButtonDiscover from "../Button/ButtonDiscover";

const TitleHome = () => {
  const { language } = useLanguage();
  return (
    <>
      <div className="flex flex-col justify-center items-center h-my-screen">
        <h1 className="font-extrabold tracking-tight text-FFF6E4 text-4xl sm:text-8xl md:text-8xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {translations[language].titleHomeFr}
            {translations[language].titleHomeEn}
          </motion.span>
        </h1>
        <div className="flex justify-center">
          <span
            data-aos="fade-right"
            className="text-FFF6E4 text-base font-extrabold "
          >
            PARIS X LONDON
          </span>
        </div>
      </div>
      <div className="flex justify-center sm:justify-end px-0 sm:px-20">
        <ButtonDiscover />
      </div>
      <p className="pt-10 pb-10">
        <span className="whitespace-nowrap animation-scrolling-rtl text-black text-2xl sm:text-4xl">
          {translations[language].scrollingTextFr}
          {translations[language].scrollingTextEn}
        </span>
      </p>
    </>
  );
};

export default TitleHome;
