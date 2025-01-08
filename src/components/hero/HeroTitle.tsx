import { motion } from "framer-motion";
import { TextGradient } from "../animations/TextGradient";

export function HeroTitle() {
  return (
    <motion.h1
      className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 text-center md:text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Fullstack
      <TextGradient>
        <span className="block md:inline md:ml-2">Blockchain Developer</span>
      </TextGradient>
    </motion.h1>
  );
}
