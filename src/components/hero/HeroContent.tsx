import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroContent() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-gray-300 text-center md:text-left"
      >
        Fullstack web3 developer skilled in decentralized app development,
        front-end and back-end web technologies, and blockchain architecture.
        Currently working at API3, building solutions that bridge the gap
        between off-chain data and on-chain applications.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 sm:space-x-4 justify-center md:justify-start"
      >
        <a
          href="#projects"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center space-x-2 transition-colors w-full sm:w-auto"
        >
          <span>View Projects</span>
          <ArrowRight size={20} />
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border border-blue-600 hover:bg-blue-600/10 rounded-lg transition-colors flex items-center justify-center w-full sm:w-auto"
        >
          Contact Me
        </a>
      </motion.div>
    </>
  );
}
