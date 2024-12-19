import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TextGradientProps {
  children: ReactNode;
}

export function TextGradient({ children }: TextGradientProps) {
  return (
    <motion.span
      className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
      animate={{
        backgroundPosition: ['0%', '100%', '0%'],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      {children}
    </motion.span>
  );
}