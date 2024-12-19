import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroContent() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-gray-300"
      >
        Fullstack web3 developer skilled in decentralized app development,
        front-end and back-end web technologies, and blockchain architecture.
        Currently working at API3, building solutions that bridge the gap between
        off-chain data and on-chain applications.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex space-x-4"
      >
        <a
          href="#projects"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <span>View Projects</span>
          <ArrowRight size={20} />
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border border-blue-600 hover:bg-blue-600/10 rounded-lg transition-colors"
        >
          Contact Me
        </a>
      </motion.div>
    </>
  );
}