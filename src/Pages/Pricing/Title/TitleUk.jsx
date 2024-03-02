import { motion } from "framer-motion";

const TitleUk = () => {
  return (
    <div className={`BgTitlePricingUk bg-cover py-32`}>
      <div
        className={`flex justify-center lg:justify-start text-fff6e4 font-extrabold pt-20 px-20 lg:px-28`}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`text-4xl md:text-6xl lg:text-8xl`}
        >
          Pricing
        </motion.span>
      </div>
    </div>
  );
};

export default TitleUk;
