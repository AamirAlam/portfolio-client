import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  live,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <motion.div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 + i * 0.1 }}
              className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
        <div className="flex space-x-4">
          <motion.a
            href={github}
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
            <span>Code</span>
          </motion.a>
          <motion.a
            href={live}
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
