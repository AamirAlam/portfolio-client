import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  label: string;
  index: number;
}

export function NavLink({ href, label, index }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.1,
        color: '#00FFA3',
      }}
      className="font-mono transition-colors relative group"
    >
      {label}
      <motion.span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-crypto-accent group-hover:w-full transition-all duration-300"
        whileHover={{ width: '100%' }}
      />
    </motion.a>
  );
}