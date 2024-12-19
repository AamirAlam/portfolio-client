import { motion } from 'framer-motion';
import { NavLink } from './NavLink';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

export function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden md:flex space-x-8"
    >
      {navItems.map((item, index) => (
        <NavLink key={item.href} {...item} index={index} />
      ))}
    </motion.nav>
  );
}