import { motion } from 'framer-motion';

const NeuralNetwork = ({ variant = "default", intensity = "medium" }) => {
  const getNodeCount = () => {
    switch (intensity) {
      case "low": return 6;
      case "medium": return 8;
      case "high": return 12;
      default: return 8;
    }
  };

  const getConnectionCount = () => {
    switch (intensity) {
      case "low": return 4;
      case "medium": return 6;
      case "high": return 10;
      default: return 6;
    }
  };

  const nodeCount = getNodeCount();
  const connectionCount = getConnectionCount();

  // Generate completely random positions for nodes
  const generateNodes = () => {
    const nodes = [];
    
    for (let i = 0; i < nodeCount; i++) {
      // Use a seeded random function for consistent values
      const seededRandom = (seed) => {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
      };
      
      const randomX = seededRandom(i * 1.1) * 90 + 5; // 5% to 95% range
      const randomY = seededRandom(i * 1.3) * 90 + 5; // 5% to 95% range
      const randomDelay = seededRandom(i * 1.5) * 4; // Random delay 0-4 seconds
      const randomSpeed = 0.5 + seededRandom(i * 1.7) * 2; // Random speed 0.5-2.5
      const randomDashed = seededRandom(i * 1.9) > 0.3; // 70% chance of being dashed
      const randomPattern = seededRandom(i * 2.1) > 0.5 ? "1,2" : seededRandom(i * 2.3) > 0.5 ? "2,3" : "1,4";
      
      nodes.push({
        id: i,
        x: randomX,
        y: randomY,
        delay: randomDelay,
        speed: randomSpeed,
        isDashed: randomDashed,
        dashPattern: randomPattern
      });
    }
    return nodes;
  };

  const nodes = generateNodes();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Neural nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-2 h-2 bg-dev-blue rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          animate={{
            scale: [0.5, 1.2, 0.5],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.5 + (node.id * 0.3) % 1.5, // Stable duration based on node id
            delay: node.delay,
            repeat: Infinity,
            repeatDelay: 0.5 + (node.id * 0.7) % 2, // Stable repeat delay based on node id
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Neural connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {Array.from({ length: connectionCount }, (_, i) => {
          // Create more interesting connections
          const startIndex = i % nodes.length;
          const endIndex = (i + Math.floor(Math.random() * 3) + 1) % nodes.length;
          const startNode = nodes[startIndex];
          const endNode = nodes[endIndex];
          
          // Calculate distance to avoid very short connections
          const distance = Math.sqrt(
            Math.pow(endNode.x - startNode.x, 2) + Math.pow(endNode.y - startNode.y, 2)
          );
          
          // Only draw connection if distance is reasonable
          if (distance < 10) return null;
          
          return (
            <motion.path
              key={i}
              d={`M${startNode.x},${startNode.y} Q${(startNode.x + endNode.x) / 2},${(startNode.y + endNode.y) / 2 - 10} ${endNode.x},${endNode.y}`}
              stroke="rgba(0, 212, 255, 0.3)"
              strokeWidth="0.2"
              fill="none"
              strokeDasharray={startNode.isDashed ? startNode.dashPattern : "none"}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0.2, 0.6, 0.2] 
              }}
              transition={{
                duration: 2 + (i * 0.4) % 3, // Stable duration based on connection index
                delay: (i * 0.6) % 2, // Stable delay based on connection index
                repeat: Infinity,
                repeatDelay: (i * 0.8) % 2, // Stable repeat delay based on connection index
                ease: "linear",
              }}
            />
          );
        })}
      </svg>

      {/* Data flow particles */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`flow-${i}`}
          className="absolute w-1 h-1 bg-dev-cyan rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + (i * 0.5) % 4, // Stable duration based on particle index
            delay: (i * 0.7) % 3, // Stable delay based on particle index
            repeat: Infinity,
            repeatDelay: (i * 0.9) % 3, // Stable repeat delay based on particle index
            ease: "linear",
          }}
        />
      ))}

      {/* Floating code snippets */}
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute text-dev-blue/30 text-xs font-mono"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60],
            opacity: [0, 0.4, 0],
            x: [0, Math.random() * 20 - 10],
          }}
          transition={{
            duration: 6 + (i * 0.6) % 4, // Stable duration based on code index
            delay: (i * 0.8) % 4, // Stable delay based on code index
            repeat: Infinity,
            repeatDelay: (i * 1.1) % 4, // Stable repeat delay based on code index
            ease: "linear",
          }}
        >
          {['AI', 'ML', 'Python', 'TensorFlow', 'PyTorch', 'RAG', 'LLM', 'MLOps'][i % 8]}
        </motion.div>
      ))}
    </div>
  );
};

export default NeuralNetwork;
