import { FadeIn } from "../animations/FadeIn";
import { HeroTitle } from "./HeroTitle";
import { HeroIcons } from "./HeroIcons";
import { HeroContent } from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 md:pt-20 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-0">
          <div className="w-full md:w-1/2 space-y-6">
            <FadeIn>
              <HeroTitle />
              <HeroContent />
            </FadeIn>
          </div>
          <div className="w-full md:w-1/2">
            <HeroIcons />
          </div>
        </div>
      </div>
    </section>
  );
}
