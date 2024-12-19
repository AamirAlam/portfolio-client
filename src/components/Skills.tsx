import React from 'react';
import { Database, Code, Server, Shield } from 'lucide-react';

const skills = {
  blockchain: [
    'Solidity',
    'Web3.js',
    'Ethers.js',
    'Smart Contracts',
    'DeFi Protocols',
    'NFT Standards',
    'Hardhat',
    'Truffle'
  ],
  frontend: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Redux',
    'GraphQL',
    'Web3 Integration'
  ],
  backend: [
    'Node.js',
    'Express',
    'PostgreSQL',
    'MongoDB',
    'REST APIs',
    'Docker',
    'AWS'
  ],
  security: [
    'Smart Contract Auditing',
    'Blockchain Security',
    'Gas Optimization',
    'Authentication',
    'Key Management'
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <Database className="text-blue-500" size={24} />
              <h3 className="text-xl font-bold text-white">Blockchain</h3>
            </div>
            <ul className="space-y-2">
              {skills.blockchain.map((skill, index) => (
                <li key={index} className="text-gray-400">{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <Code className="text-purple-500" size={24} />
              <h3 className="text-xl font-bold text-white">Frontend</h3>
            </div>
            <ul className="space-y-2">
              {skills.frontend.map((skill, index) => (
                <li key={index} className="text-gray-400">{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <Server className="text-green-500" size={24} />
              <h3 className="text-xl font-bold text-white">Backend</h3>
            </div>
            <ul className="space-y-2">
              {skills.backend.map((skill, index) => (
                <li key={index} className="text-gray-400">{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="text-red-500" size={24} />
              <h3 className="text-xl font-bold text-white">Security</h3>
            </div>
            <ul className="space-y-2">
              {skills.security.map((skill, index) => (
                <li key={index} className="text-gray-400">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}