import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Blockchain Developer',
    company: 'DeFi Protocol',
    period: '2022 - Present',
    description: 'Led the development of smart contracts and DeFi protocols, implementing automated market makers and yield farming mechanisms.',
    achievements: [
      'Developed and audited smart contracts for $100M+ TVL protocol',
      'Optimized gas consumption by 40% across all contracts',
      'Implemented cross-chain bridge functionality'
    ]
  },
  {
    title: 'Fullstack Developer',
    company: 'NFT Platform',
    period: '2020 - 2022',
    description: 'Built full-stack NFT marketplace with focus on artist collaboration and royalty management.',
    achievements: [
      'Architected scalable marketplace supporting 100k+ NFTs',
      'Implemented automated royalty distribution system',
      'Reduced infrastructure costs by 60%'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Tech Startup',
    period: '2018 - 2020',
    description: 'Developed web applications and integrated blockchain solutions for enterprise clients.',
    achievements: [
      'Built private blockchain solutions for supply chain tracking',
      'Implemented smart contract-based voting system',
      'Led team of 5 developers'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Briefcase className="text-blue-500" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                    <span className="text-gray-400">{exp.period}</span>
                  </div>
                  <p className="mt-2 text-gray-300">{exp.description}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}