import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const TitleQuote = () => {
  const { language } = useLanguage();
  return (
    <div className="WireTitle">
      <div className="BgTitleQuote bg-cover py-32">
        <div className="flex justify-center lg:justify-start text-fff6e4 font-extrabold pt-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`pt-5 px-10 lg:px-32 text-4xl lg:text-6xl`}
          >
            {translations[language].navSousFreeFr}
            {translations[language].navSousFreeEn}
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default TitleQuote;
