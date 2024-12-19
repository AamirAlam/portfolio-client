import { FadeIn } from "../animations/FadeIn";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Flow3",
    description:
      "Achieve your Web3 goals with No code. Flow3 simplifies this process by offering a no-code solution where users can seamlessly select and connect pre-built web3 modules.",
    image: "/flow3.png",
    tech: ["React", "Solidity", "Coinbase CDP", "Node", "Express"],
    github: "https://github.com/AamirAlam/web3-flow-backend",
    live: "https://devfolio.co/projects/flow-bd3f",
    achievements: [
      "Won ETH India 2024 Finalists",
      "Coinbase Developer platform pirze",
      "Implement copy trading and Minting NFTs from excel sheets using Nodes",
      "All the onchain tasts perfromed by Coinbase CDP",
    ],
  },
  {
    title: "FirstCrypto",
    description:
      "A complete financial application on blockchain for millennials with removed technical complexities. Onboard using Social accounts, Pay crypto via UPI, Invest via strategies - all at one place.",
    image: "/first-crypto-logo.png",
    tech: [
      "React",
      "Vercel",
      "Gnosis Safe",
      "1Inch",
      "Polygon",
      "Scroll",
      "Waku",
    ],
    github: "https://github.com/tahirahmadin/first-crypto-app",
    live: "https://www.youtube.com/watch?v=XLwcg74JQHw",
    achievements: [
      "Won ETH Istanbul, ETH India 2023 and Aspecta Hackathons",
      "Implemented user onboarding using gnosis safe",
      "Integrated with 1Iinch fusion sdk for gasless trades",
    ],
  },
  {
    title: "API3 Ecosystem",
    description:
      "Dynamic website showcasing dApps utilizing API3 services with real-time data integration.",
    image: "/landscape.jpg",
    tech: ["Nuxt3", "Nitro", "TypeScript", "Ethers.js", "Git webhooks"],
    github: "https://github.com/AamirAlam/api3-ecosystem",
    live: "https://example.com",
  },
  {
    title: "SleepSwap",
    description:
      "A Decentralised Strategy-Based Trading Platform with Grid-based Trading implementation.",
    image:
      "https://cdn3d.iconscout.com/3d/free/thumb/squigly-globe-3494833-2926648@0.png",
    tech: ["React", "Solidity", "Wagmi", "Hardhat", "Ethers"],
    github: "https://github.com/SleepSwap/frontend",
    live: "https://frontend-beryl-six.vercel.app/",
    achievements: ["Won Chainlink online hackathon in 2022"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-white mb-12">
            Featured Projects
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
