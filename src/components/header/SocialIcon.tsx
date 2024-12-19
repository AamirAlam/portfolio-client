import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SocialIconProps {
  icon: LucideIcon;
  href: string;
  label: string;
  index: number;
}

export function SocialIcon({
  icon: Icon,
  href,
  label,
  index,
}: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{
        scale: 1.2,
        color: "#00FFA3",
      }}
      className="transition-colors"
      aria-label={label}
    >
      <Icon size={20} />
    </motion.a>
  );
}
