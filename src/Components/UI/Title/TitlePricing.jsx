import { motion } from "framer-motion";

const TitleRate = () => {
  return (
    <div className={`WireTitle`}>
      <div className={`BgTitlePricing bg-cover py-32`}>
        <div
          className={`text-fff6e4 flex justify-center lg:justify-start font-extrabold pt-20 px-20 lg:px-28`}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`text-5xl md:text-6xl lg:text-8xl`}
          >
            Tarification
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default TitleRate;
