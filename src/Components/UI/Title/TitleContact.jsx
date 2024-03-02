import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const Title = () => {
  const { language } = useLanguage();
  return (
    <div className={`WireTitle`}>
      <div className={`BgTitleContact bg-cover bg-center py-28`}>
        <div
          className={`text-fff6e4 lg:text-left text-center font-extrabold px-20 lg:px-44`}
        >
          {" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`text-4xl md:text-6xl lg:text-8xl`}
          >
            {translations[language].titleContactFr}
            {translations[language].titleContactEn}
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Title;
