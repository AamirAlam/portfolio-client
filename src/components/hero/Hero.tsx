import { FadeIn } from "../animations/FadeIn";
import { HeroTitle } from "./HeroTitle";
import { HeroIcons } from "./HeroIcons";
import { HeroContent } from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 md:pt-20 pb-16 bg-gradient-to-b from-black to-gray-900 text-white flex items-start md:items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 py-4 md:py-8 mt-8 md:mt-0">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-8 relative z-10">
            <FadeIn>
              <HeroTitle />
              <HeroContent />
            </FadeIn>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <HeroIcons />
          </div>
        </div>
      </div>
    </section>
  );
}
