import { motion } from "framer-motion";

const TitleUk = () => {
  return (
    <div className="BgTitlePricingUk bg-cover py-32">
      <div className="flex justify-center lg:justify-start text-fff6e4 font-extrabold pt-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`pt-5 px-32 text-4xl lg:text-6xl`}
        >
          Pricing
        </motion.span>
      </div>
    </div>
  );
};

export default TitleUk;