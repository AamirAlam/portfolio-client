import { FadeIn } from '../animations/FadeIn';
import { HeroTitle } from './HeroTitle';
import { HeroIcons } from './HeroIcons';
import { HeroContent } from './HeroContent';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <FadeIn>
              <HeroTitle />
              <HeroContent />
            </FadeIn>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <HeroIcons />
          </div>
        </div>
      </div>
    </section>
  );
}