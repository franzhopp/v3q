import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
import ButtonDiscover from "../Button/BtnDiscover.jsx";

const TitleHome = () => {
  const { language } = useLanguage();
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen pt-10">
        <h1 className="font-extrabold tracking-tight text-fff6e4 text-5xl md:text-8xl">
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
          <h2 className="text-fff6e4 text-sm font-inter uppercase">
            Paris x London
          </h2>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end pb-24 px-32">
        <ButtonDiscover />
      </div>
    </>
  );
};

export default TitleHome;
