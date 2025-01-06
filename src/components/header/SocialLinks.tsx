import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Briefcase } from "lucide-react";
import { SocialIcon } from "./SocialIcon";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/AamirAlam",
    label: "GitHub Profile",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/aamir2alam/",
    label: "LinkedIn Profile",
  },
  {
    icon: Mail,
    href: "mailto:aamiralam1991@gmail.com",
    label: "Email Contact",
  },
  {
    icon: Briefcase,
    href: "https://drive.google.com/file/d/1KXjSmXzahkXPLVmI_nQcgKBESNjzaXm9/view?usp=sharing",
    label: "Resume",
  },
];

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden md:flex space-x-4"
    >
      {socialLinks.map((link, index) => (
        <SocialIcon key={link.href} {...link} index={index} />
      ))}
    </motion.div>
  );
}
