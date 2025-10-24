import { FadeIn } from "../animations/FadeIn";
import { SkillCard } from "./SkillCard";
import { Code, Database, Server, Shield } from "lucide-react";

const skills = {
  languages: ["JavaScript", "TypeScript", "Solidity", "Python", "HTML/CSS"],
  frameworks: [
    "React",
    "Nuxt",
    "Node.js",
    "Express",
    "Hardhat",
    "React Native",
    "Flutter",
  ],
  blockchain: [
    "Ethers.js",
    "Viem",
    "Web3.js",
    "TheGraph Protocol",
    "Smart Contracts",
  ],
  databases: ["MongoDB", "Firestore", "MySQL", "PostgreSQL"],
};

export default function Skills() {
  const skillCards = [
    {
      title: "Languages",
      skills: skills.languages,
      icon: Code,
      color: "text-blue-500",
      gradientColors: "from-blue-500/10 via-cyan-500/10 to-blue-600/10",
    },
    {
      title: "Frameworks",
      skills: skills.frameworks,
      icon: Server,
      color: "text-purple-500",
      gradientColors: "from-purple-500/10 via-violet-500/10 to-purple-600/10",
    },
    {
      title: "Blockchain",
      skills: skills.blockchain,
      icon: Database,
      color: "text-green-500",
      gradientColors: "from-green-500/10 via-emerald-500/10 to-green-600/10",
    },
    {
      title: "Databases",
      skills: skills.databases,
      icon: Shield,
      color: "text-red-500",
      gradientColors: "from-red-500/10 via-orange-500/10 to-red-600/10",
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center md:text-left">
            Technical Skills
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCards.map((card, index) => (
            <SkillCard
              key={index}
              title={card.title}
              skills={card.skills}
              icon={card.icon}
              iconColor={card.color}
              gradientColors={card.gradientColors}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
