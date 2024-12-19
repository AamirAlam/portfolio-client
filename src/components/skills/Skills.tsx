import { FadeIn } from '../animations/FadeIn';
import { SkillCard } from './SkillCard';
import { Code, Database, Server, Shield } from 'lucide-react';

const skills = {
  languages: [
    'JavaScript',
    'TypeScript',
    'Solidity',
    'Python',
    'HTML/CSS'
  ],
  frameworks: [
    'React',
    'Nuxt',
    'Node.js',
    'Express',
    'Hardhat',
    'React Native',
    'Flutter'
  ],
  blockchain: [
    'Ethers.js',
    'Viem',
    'Web3.js',
    'TheGraph Protocol',
    'Smart Contracts'
  ],
  databases: [
    'MongoDB',
    'Firestore',
    'MySQL',
    'PostgreSQL'
  ]
};

export default function Skills() {
  const skillCards = [
    { title: 'Languages', skills: skills.languages, icon: Code, color: 'text-blue-500' },
    { title: 'Frameworks', skills: skills.frameworks, icon: Server, color: 'text-purple-500' },
    { title: 'Blockchain', skills: skills.blockchain, icon: Database, color: 'text-green-500' },
    { title: 'Databases', skills: skills.databases, icon: Shield, color: 'text-red-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-white mb-12">Technical Skills</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCards.map((card, index) => (
            <SkillCard
              key={index}
              title={card.title}
              skills={card.skills}
              icon={card.icon}
              iconColor={card.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}