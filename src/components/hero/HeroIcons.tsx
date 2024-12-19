import { motion } from 'framer-motion';
import { Bitcoin, Database, Code } from 'lucide-react';

export function HeroIcons() {
  return (
    <div className="relative w-72 h-72 mx-auto">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-lg backdrop-blur-lg flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Bitcoin size={32} className="text-blue-500" />
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-lg backdrop-blur-lg flex items-center justify-center"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Database size={32} className="text-purple-500" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 -translate-y-1/2 -right-8 w-20 h-20 bg-green-500/20 rounded-lg backdrop-blur-lg flex items-center justify-center"
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Code size={32} className="text-green-500" />
      </motion.div>

      <motion.img
        src="https://images.unsplash.com/photo-1637763723578-79a4ca9225c7?auto=format&fit=crop&q=80&w=400&h=400"
        alt="Profile"
        className="rounded-full w-full h-full object-cover border-4 border-white/10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      />
    </div>
  );
}