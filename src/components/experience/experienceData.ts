import { type Experience } from './types';

export const experienceData: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'API3',
    period: 'May 2023 – present',
    description: 'API3 builds solutions that bridge the gap between off-chain data and on-chain applications with maximal security and minimal latency.',
    achievements: [
      'Developed an Ecosystem website using Nuxt3 and Nitro to list all dApps utilizing API3 services dynamically.',
      'Created a real-time liquidation data extraction service leveraging Subgraphs and ethers.js to calculate liquidation metrics and searcher profits across lending dApps.',
      'Engineered deployment scripts for Aave V2 and Compound V3 markets, enabling streamlined deployment using API3 data feeds with minimal commands.',
      'Designed and implemented a script to accurately calculate searcher (Builders) profits for liquidations across various lending markets.'
    ],
    techStack: ['TypeScript', 'Nuxt3', 'React', 'Ethers.js', 'Node.js', 'Hardhat', 'Subgraphs']
  },
  {
    title: 'FullStack Engineer',
    company: 'QuickSwap',
    period: 'Jan 2022',
    description: 'QuickSwap is a Decentralized exchange platform on the Polygon Chain.',
    achievements: [
      'Optimized Quickswap App initial loading using React Lazy load, improving app\'s initial load time by 80%.',
      'Optimized App speed by 30-40% and improved User experience by reducing component re-rendering in React.',
      'Designed and integrated QuickSwap-v3 components in React.'
    ],
    techStack: ['TypeScript', 'React', 'Redux', 'Web3', 'Ethers.js', 'Solidity']
  },
  {
    title: 'Senior Full-stack Developer',
    company: 'Polkabridge',
    period: 'July 2021 – Apr 2023',
    description: 'PolkaBridge is a versatile multichain platform offering a range of features, including farming, a launchpad, an AMM, an NFT marketplace, and more.',
    achievements: [
      'Built Backend for Polkabridge P2P platform using MongoDB and Express. Design and integrated Reusable React Components for lightweight P2P interface.',
      'Built a Multichain AMM platform using React and Web3. Integrated multichain wallet using Web3React.',
      'Designed reusable hooks for fetching blockchain data using subgraphs.',
      'Designed and integrated React components with hooks for Swap, Farm, and AMM Analytics charts.',
      'Designed Polkawar Landing page which is a P2P gaming and NFT marketplace.'
    ],
    techStack: ['TypeScript', 'JavaScript', 'React', 'Web3', 'Node.js', 'Express.js', 'Solidity', 'Ethers.js', 'Subgraph']
  },
  {
    title: 'Full Stack Developer',
    company: 'Endovision Hong Kong',
    period: 'July 2020 – June 2021',
    description: 'Endovision is a HongKong based med-tech startup which works on ML based solutions to improve the diagnostic accuracy of the Upper-GI Endoscopy.',
    achievements: [
      'Built frame sequence labelling and area labelling features using Pyqt5, helping data-scientists improve classifier model accuracy from 45-78% to 87%.',
      'Built Upload AI-experiment feature using Pyqt5 to visualize results in the inference view, reducing 2-3 hours of manual integration to under 1-minute automated pipeline.'
    ],
    techStack: ['Python', 'Pyqt5', 'GCP']
  }
];