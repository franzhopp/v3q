import translations from "../translate.jsx";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import { motion } from "framer-motion";
import ButtonDiscover from "../Button/ButtonDiscover";

const TitleHome = () => {
  const { language } = useLanguage();
  return (
    <section>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="font-extrabold tracking-tight text-FFF6E4 text-5xl md:text-8xl">
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
          <span className="text-FFF6E4 text-sm font-inter uppercase">Paris x London</span>
        </div>
      </div>
      <div className="flex justify-center sm:justify-end px-0 sm:px-20 pb-14">
        <ButtonDiscover />
      </div>
      <p className="pb-5">
        <span className="whitespace-nowrap animation-scrolling-rtl text-FFF6E4 text-2xl sm:text-4xl">
          {translations[language].scrollingTextFr}
          {translations[language].scrollingTextEn}
        </span>
      </p>
    </section>
  );
};

export default TitleHome;
