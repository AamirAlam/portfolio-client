import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6 mb-10"
      >
        <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          Expert in building decentralized applications with cutting-edge blockchain technology,
          modern web frameworks, and robust full-stack solutions.
        </p>
        <p className="text-lg sm:text-xl text-gray-400 leading-relaxed text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          Currently working at <span className="text-blue-400 font-semibold">API3</span>, creating innovative solutions that bridge
          off-chain data with on-chain applications.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4 pb-8 relative z-20"
      >
        <a
          href="#projects"
          className="group relative px-10 py-5 bg-transparent border-2 border-blue-500/30 rounded-xl flex items-center justify-center gap-3 transition-all duration-500 font-semibold text-white hover:border-blue-400/50 hover:scale-105 min-w-[200px] text-lg backdrop-blur-sm overflow-hidden"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <span className="relative z-10">View My Work</span>
          <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
        </a>
        <a
          href="#contact"
          className="group relative px-10 py-5 bg-transparent border-2 border-purple-500/30 rounded-xl transition-all duration-500 font-semibold text-white hover:border-purple-400/50 hover:scale-105 min-w-[200px] text-lg flex items-center justify-center backdrop-blur-sm overflow-hidden"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <span className="relative z-10">Get In Touch</span>
        </a>
      </motion.div>
    </>
  );
}
