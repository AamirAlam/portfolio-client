import { useState } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { SocialLinks } from "./SocialLinks";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileMenu } from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm text-white z-[55]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <Navigation />
        <SocialLinks />
        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
