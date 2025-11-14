import { FadeIn } from '../animations/FadeIn'
import { ProjectCard } from './ProjectCard'

const projects = [
  {
    title: 'QuickSwap',
    description:
      'Leading decentralized exchange (DEX) on Polygon network offering fast, low-cost token swaps with automated market maker functionality and advanced DeFi features.',
    image:
      'https://chainstack.com/wp-content/uploads/2021/07/Quickswap_darker.jpg',
    tech: ['React', 'TypeScript', 'Polygon', 'Web3.js', 'Subgraph', 'GraphQL'],
    github:
      'https://github.com/QuickSwap/interface-v2/pulls?q=is%3Apr+is%3Aclosed+author%3AAamirAlam',
    live: 'https://quickswap.exchange/',
    gradientColors: 'from-blue-500/10 via-purple-500/10 to-indigo-600/10',
    achievements: [
      'Optimized app loading performance by 40%',
      'Integrated v3 components for enhanced trading experience',
      'Integrated farming components with farm subgraphs for real-time data',
      'Leading DEX on Polygon with billions in TVL',
    ],
  },
  {
    title: 'Neura Vaults',
    description:
      'Advanced DeFi yield farming protocol offering automated vault strategies for maximizing returns across multiple blockchain networks with sophisticated risk management.',
    image: 'https://neura-vaults-frontend.vercel.app/logo.webp',
    tech: ['React', 'TypeScript', 'Solidity', 'Web3.js', 'Ethers.js', 'Vercel'],
    github: 'https://github.com/creeping-vampires?tab=repositories',
    live: 'https://neuravaults.xyz/',
    gradientColors: 'from-emerald-500/10 via-teal-500/10 to-cyan-600/10',
    achievements: [
      'Built automated yield farming strategies',
      'Implemented multi-chain vault architecture',
      'Developed risk management algorithms',
      'Created intuitive markets dashboard interface',
    ],
  },
  {
    title: 'Flow3',
    description:
      'Achieve your Web3 goals with No code. Flow3 simplifies this process by offering a no-code solution where users can seamlessly select and connect pre-built web3 modules.',
    image: '/flow3.png',
    tech: ['React', 'Solidity', 'Coinbase CDP', 'Node', 'Express'],
    github: 'https://github.com/AamirAlam/web3-flow-backend',
    live: 'https://devfolio.co/projects/flow-bd3f',
    gradientColors: 'from-orange-500/10 via-red-500/10 to-pink-600/10',
    achievements: [
      'Won ETH India 2024 Finalists',
      'Coinbase Developer platform pirze',
      'Implement copy trading and Minting NFTs from excel sheets using Nodes',
      'All the onchain tasts perfromed by Coinbase CDP',
    ],
  },
  {
    title: 'FirstCrypto',
    description:
      'A complete financial application on blockchain for millennials with removed technical complexities. Onboard using Social accounts, Pay crypto via UPI, Invest via strategies - all at one place.',
    image: '/first-crypto-logo.png',
    tech: [
      'React',
      'Vercel',
      'Gnosis Safe',
      '1Inch',
      'Polygon',
      'Scroll',
      'Waku',
    ],
    github: 'https://github.com/tahirahmadin/first-crypto-app',
    live: 'https://www.youtube.com/watch?v=XLwcg74JQHw',
    gradientColors: 'from-violet-500/10 via-purple-500/10 to-fuchsia-600/10',
    achievements: [
      'Won ETH Istanbul, ETH India 2023 and Aspecta Hackathons',
      'Implemented user onboarding using gnosis safe',
      'Integrated with 1Iinch fusion sdk for gasless trades',
    ],
  },
  {
    title: 'API3 Ecosystem',
    description:
      'Dynamic website showcasing dApps utilizing API3 services with real-time data integration.',
    image: '/landscape.jpg',
    tech: ['Nuxt3', 'Nitro', 'TypeScript', 'Ethers.js', 'Git webhooks'],
    github: 'https://github.com/AamirAlam/api3-ecosystem',
    live: 'https://example.com',
    gradientColors: 'from-sky-500/10 via-blue-500/10 to-indigo-600/10',
  },
  {
    title: 'SleepSwap',
    description:
      'A Decentralised Strategy-Based Trading Platform with Grid-based Trading implementation.',
    image:
      'https://cdn3d.iconscout.com/3d/free/thumb/squigly-globe-3494833-2926648@0.png',
    tech: ['React', 'Solidity', 'Wagmi', 'Hardhat', 'Ethers'],
    github: 'https://github.com/SleepSwap/frontend',
    live: 'https://frontend-beryl-six.vercel.app/',
    achievements: ['Won Chainlink online hackathon in 2022'],
    gradientColors: 'from-green-500/10 via-emerald-500/10 to-teal-600/10',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center md:text-left">
            Featured Projects
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
