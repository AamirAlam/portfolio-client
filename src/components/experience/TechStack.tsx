import { motion } from 'framer-motion';

interface TechStackProps {
  stack: string[];
  index: number;
}

export function TechStack({ stack, index }: TechStackProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.2 + 0.3 }}
      className="mt-4 flex flex-wrap gap-2"
    >
      {stack.map((tech, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.2 + i * 0.1 }}
          className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
        >
          {tech}
        </motion.span>
      ))}
    </motion.div>
  );
}