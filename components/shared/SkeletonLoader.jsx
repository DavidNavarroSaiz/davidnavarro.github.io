import { motion } from 'framer-motion';

const SkeletonLoader = ({ className = "", variant = "default" }) => {
  const baseClasses = "bg-gray-700 rounded animate-pulse";
  
  if (variant === "image") {
    return (
      <div className={`${baseClasses} ${className}`}>
        <motion.div
          className="w-full h-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background: "linear-gradient(90deg, #374151 25%, #4B5563 50%, #374151 75%)",
            backgroundSize: "200% 100%",
          }}
        />
      </div>
    );
  }

  if (variant === "text") {
    return (
      <div className={`${baseClasses} ${className}`}>
        <motion.div
          className="h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background: "linear-gradient(90deg, #374151 25%, #4B5563 50%, #374151 75%)",
            backgroundSize: "200% 100%",
          }}
        />
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className={`${baseClasses} ${className} p-4`}>
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(90deg, #374151 25%, #4B5563 50%, #374151 75%)",
              backgroundSize: "200% 100%",
            }}
          />
          <motion.div
            className="h-3 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded w-3/4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: 0.2,
            }}
            style={{
              background: "linear-gradient(90deg, #374151 25%, #4B5563 50%, #374151 75%)",
              backgroundSize: "200% 100%",
            }}
          />
          <motion.div
            className="h-3 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded w-1/2"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: 0.4,
            }}
            style={{
              background: "linear-gradient(90deg, #374151 25%, #4B5563 50%, #374151 75%)",
              backgroundSize: "200% 100%",
            }}
          />
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default SkeletonLoader;
