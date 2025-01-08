import { motion } from "framer-motion";
import { Menu } from "lucide-react";

interface MobileMenuButtonProps {
  onClick: () => void;
}

export function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileTap={{ scale: 0.9 }}
      className="md:hidden p-2"
      onClick={onClick}
      aria-label="Toggle mobile menu"
    >
      <Menu size={24} />
    </motion.button>
  );
}
