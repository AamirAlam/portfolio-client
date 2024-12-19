import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { TechStack } from './TechStack';
import { ExperienceDetails } from './ExperienceDetails';
import { type Experience } from './types';

interface ExperienceCardProps extends Experience {
  index: number;
}

export function ExperienceCard({ title, company, period, description, achievements, techStack, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
          className="p-2 bg-blue-500/20 rounded-lg"
        >
          <Briefcase className="text-blue-500" size={24} />
        </motion.div>
        <div className="flex-1">
          <ExperienceDetails
            title={title}
            company={company}
            period={period}
            description={description}
          />
          <ul className="mt-4 space-y-2">
            {achievements.map((achievement, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                className="text-gray-400 flex items-center space-x-2"
              >
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
          <TechStack stack={techStack} index={index} />
        </div>
      </div>
    </motion.div>
  );
}