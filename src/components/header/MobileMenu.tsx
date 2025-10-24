import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-[58]"
            onClick={onClose}
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700 z-[59] pt-20"
          >
            <nav className="px-6 py-8">
              <div className="flex flex-col space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block px-4 py-4 text-lg font-medium text-gray-300 hover:text-white hover:bg-blue-600/20 rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-blue-500"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
              
              {/* Close button */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <button
                  onClick={onClose}
                  className="w-full px-4 py-3 text-center text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <X size={20} />
                  Close Menu
                </button>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
