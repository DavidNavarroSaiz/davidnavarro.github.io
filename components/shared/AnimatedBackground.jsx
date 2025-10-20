import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedBackground = ({ variant = "particles" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (variant === "particles") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-dev-blue/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Floating code snippets */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-dev-blue/20 text-xs font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80],
              opacity: [0, 0.3, 0],
              x: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              delay: Math.random() * 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {['AI', 'ML', 'Python', 'TensorFlow', 'PyTorch', 'RAG', 'LLM', 'MLOps'][i % 8]}
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0, 212, 255, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Animated grid lines */}
          <motion.path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="rgba(0, 212, 255, 0.2)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    );
  }

  if (variant === "waves") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,20 50,50 T100,50 L100,100 L0,100 Z"
            fill="rgba(0, 212, 255, 0.05)"
            initial={{ d: "M0,50 Q25,20 50,50 T100,50 L100,100 L0,100 Z" }}
            animate={{
              d: [
                "M0,50 Q25,20 50,50 T100,50 L100,100 L0,100 Z",
                "M0,50 Q25,80 50,50 T100,50 L100,100 L0,100 Z",
                "M0,50 Q25,20 50,50 T100,50 L100,100 L0,100 Z"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,60 Q25,30 50,60 T100,60 L100,100 L0,100 Z"
            fill="rgba(0, 212, 255, 0.03)"
            initial={{ d: "M0,60 Q25,30 50,60 T100,60 L100,100 L0,100 Z" }}
            animate={{
              d: [
                "M0,60 Q25,30 50,60 T100,60 L100,100 L0,100 Z",
                "M0,60 Q25,90 50,60 T100,60 L100,100 L0,100 Z",
                "M0,60 Q25,30 50,60 T100,60 L100,100 L0,100 Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </svg>
      </div>
    );
  }

  return null;
};

export default AnimatedBackground;
