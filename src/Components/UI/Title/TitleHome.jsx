import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
import ButtonDiscover from "../Button/ButtonDiscover";

const TitleHome = () => {
  const { language } = useLanguage();
  return (
    <section>
      <div className="flex flex-col justify-center items-center h-screen pt-36">
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
          <h2 className="text-FFF6E4 text-sm font-inter uppercase">
            Paris x London
          </h2>
        </div>
        <div className="flex justify-center pt-10">
          <ButtonDiscover />
        </div>
      </div>
      <p className="pb-5">
        <span
          data-aos="fade-left"
          className="flex justify-center text-center font-extrabold px-10 text-FFF6E4 text-2xl sm:text-4xl"
        >
          {translations[language].scrollingTextFr}
          {translations[language].scrollingTextEn}
        </span>
      </p>
    </section>
  );
};

export default TitleHome;
