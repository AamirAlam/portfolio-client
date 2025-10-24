import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
  iconColor: string;
  index: number;
  gradientColors?: string;
}

export function SkillCard({ 
  title, 
  skills, 
  icon: Icon, 
  iconColor, 
  index, 
  gradientColors = "from-blue-600/10 via-purple-600/10 to-blue-600/10" 
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 group hover:scale-105"
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none`} />
      <div className="flex items-center space-x-3 mb-6 relative z-10">
        <Icon className={iconColor} size={24} />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-2 relative z-10">
        {skills.map((skill, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
            className="text-gray-400"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}