import { FadeIn } from '../animations/FadeIn';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { SocialLinks } from './SocialLinks';
import { MobileMenuButton } from './MobileMenuButton';

export default function Header() {
  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm text-white z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <Navigation />
        <SocialLinks />
        <MobileMenuButton />
      </div>
    </header>
  );
}