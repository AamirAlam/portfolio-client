import { motion } from 'framer-motion';

export function Logo() {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-bold font-mono"
    >
      <motion.span
        className="bg-crypto-gradient bg-clip-text text-transparent relative"
        animate={{
          backgroundPosition: ['0%', '100%', '0%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        Aamir Alam
        <motion.span
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-crypto-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.span>
    </motion.h1>
  );
}