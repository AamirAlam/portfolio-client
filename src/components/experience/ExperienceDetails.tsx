import { motion } from 'framer-motion';

interface ExperienceDetailsProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export function ExperienceDetails({ title, company, period, description }: ExperienceDetailsProps) {
  return (
    <>
      <div className="flex justify-between items-start flex-wrap gap-2">
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-white"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-blue-400"
          >
            {company}
          </motion.p>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400"
        >
          {period}
        </motion.span>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-2 text-gray-300"
      >
        {description}
      </motion.p>
    </>
  );
}