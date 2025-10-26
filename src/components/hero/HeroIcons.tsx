import { motion } from 'framer-motion';
import { Hexagon } from 'lucide-react';

export function HeroIcons() {
  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Network Connection Lines */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {/* Lines from center to each hexagon node (6 lines, 60° apart) */}
        <div className="absolute w-32 h-0.5 bg-gradient-to-r from-purple-400/60 to-transparent origin-left" style={{left: '50%', top: '50%'}} />
        <div className="absolute w-32 h-0.5 bg-gradient-to-r from-purple-400/60 to-transparent origin-left" style={{left: '50%', top: '50%', transform: 'rotate(60deg)'}} />
        <div className="absolute w-32 h-0.5 bg-gradient-to-r from-purple-400/60 to-transparent origin-left" style={{left: '50%', top: '50%', transform: 'rotate(120deg)'}} />
        <div className="absolute w-32 h-0.5 bg-gradient-to-r from-purple-400/60 to-transparent origin-left" style={{left: '50%', top: '50%', transform: 'rotate(180deg)'}} />
        <div className="absolute w-32 h-0.5 bg-gradient-to-r from-purple-400/60 to-transparent origin-left" style={{left: '50%', top: '50%', transform: 'rotate(240deg)'}} />
        <div className="absolute w-32 h-0.5 bg-gradient-to-r from-purple-400/60 to-transparent origin-left" style={{left: '50%', top: '50%', transform: 'rotate(300deg)'}} />
        
        {/* Additional connecting lines between nodes */}
        <div className="absolute top-8 left-8 w-20 h-0.5 bg-gradient-to-r from-transparent via-gray-400/30 to-transparent rotate-12" />
        <div className="absolute top-8 right-8 w-20 h-0.5 bg-gradient-to-r from-transparent via-gray-400/30 to-transparent -rotate-12" />
        <div className="absolute bottom-8 left-8 w-20 h-0.5 bg-gradient-to-r from-transparent via-gray-400/30 to-transparent -rotate-12" />
        <div className="absolute bottom-8 right-8 w-20 h-0.5 bg-gradient-to-r from-transparent via-gray-400/30 to-transparent rotate-12" />
        
        {/* Data flow particles */}
        <motion.div
          className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full"
          animate={{
            x: [0, 87, 43, -43, -87, 0],
            y: [0, -50, -87, -87, -50, 0],
            opacity: [1, 0.3, 1, 0.3, 1, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Central Bitcoin */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div 
          className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center shadow-lg"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        >
          <Hexagon size={20} className="text-white" />
          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 border-2 border-purple-400/50 rounded-full"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.8, 0, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Hexagon Network Nodes - 6 nodes positioned symmetrically */}
      
      {/* Node 1 - Top (0°) */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-400 rounded-full border-2 border-blue-500 flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
      >
        <div className="w-2 h-2 bg-blue-600 rounded-full" />
      </motion.div>
      
      {/* Node 2 - Top Right (60°) */}
      <motion.div
        className="absolute w-8 h-8 bg-purple-400 rounded-full border-2 border-purple-500 flex items-center justify-center"
        style={{ top: '25%', right: '12%' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.33 }}
      >
        <div className="w-2 h-2 bg-purple-600 rounded-full" />
      </motion.div>
      
      {/* Node 3 - Bottom Right (120°) */}
      <motion.div
        className="absolute w-8 h-8 bg-blue-400 rounded-full border-2 border-blue-500 flex items-center justify-center"
        style={{ bottom: '25%', right: '12%' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.66 }}
      >
        <div className="w-2 h-2 bg-blue-600 rounded-full" />
      </motion.div>
      
      {/* Node 4 - Bottom (180°) */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-purple-400 rounded-full border-2 border-purple-500 flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-2 h-2 bg-purple-600 rounded-full" />
      </motion.div>
      
      {/* Node 5 - Bottom Left (240°) */}
      <motion.div
        className="absolute w-8 h-8 bg-blue-400 rounded-full border-2 border-blue-500 flex items-center justify-center"
        style={{ bottom: '25%', left: '12%' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.33 }}
      >
        <div className="w-2 h-2 bg-blue-600 rounded-full" />
      </motion.div>
      
      {/* Node 6 - Top Left (300°) */}
      <motion.div
        className="absolute w-8 h-8 bg-purple-400 rounded-full border-2 border-purple-500 flex items-center justify-center"
        style={{ top: '25%', left: '12%' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.66 }}
      >
        <div className="w-2 h-2 bg-purple-600 rounded-full" />
      </motion.div>

    </div>
  );
}