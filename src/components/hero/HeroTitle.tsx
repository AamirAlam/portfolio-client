import { motion } from "framer-motion";
import { TextGradient } from "../animations/TextGradient";

export function HeroTitle() {
  return (
    <motion.h1
      className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-8 text-center lg:text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TextGradient>
        <span className="block mb-3">FullStack Developer</span>
      </TextGradient>
      <span className="block text-white/90 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium">
        Blockchain & Web3 Specialist
      </span>
    </motion.h1>
  );
}
