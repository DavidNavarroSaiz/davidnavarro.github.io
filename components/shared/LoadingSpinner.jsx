import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = "medium", variant = "dots" }) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8", 
    large: "w-12 h-12"
  };

  if (variant === "dots") {
    return (
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`${sizeClasses[size]} bg-dev-blue rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "spinner") {
    return (
      <motion.div
        className={`${sizeClasses[size]} border-2 border-dev-blue/30 border-t-dev-blue rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    );
  }

  if (variant === "pulse") {
    return (
      <motion.div
        className={`${sizeClasses[size]} bg-dev-blue rounded-full`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    );
  }

  if (variant === "ai") {
    return (
      <div className="flex items-center space-x-1">
        {["A", "I"].map((letter, index) => (
          <motion.div
            key={letter}
            className="w-8 h-8 bg-dev-blue/20 border border-dev-blue rounded-lg flex items-center justify-center text-dev-blue font-bold"
            animate={{
              y: [0, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1,
              delay: index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {letter}
          </motion.div>
        ))}
      </div>
    );
  }

  return null;
};

export default LoadingSpinner;
