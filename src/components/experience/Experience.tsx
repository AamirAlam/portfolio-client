import { FadeIn } from '../animations/FadeIn';
import { ExperienceCard } from './ExperienceCard';
import { experienceData } from './experienceData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>
        </FadeIn>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}