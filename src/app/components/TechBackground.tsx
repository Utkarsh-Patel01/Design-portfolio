import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function TechBackground() {
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    // Generate static tech nodes floating extremely slowly
    const newNodes = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2, // 2 to 5px
      duration: Math.random() * 20 + 20, // 20s to 40s
      delay: Math.random() * 5,
    }));
    setNodes(newNodes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] bg-[#0d0d0d] overflow-hidden">
      {/* Abstract Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07] mix-blend-screen"
        style={{
          backgroundImage: "url('/monochrome-texture.png'), url('/monochrome-texture.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1e1e1e 1px, transparent 1px),
            linear-gradient(to bottom, #1e1e1e 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem'
        }}
      />
      
      {/* Deep Vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 10%, #0d0d0d 95%)',
        }}
      />

      {/* Floating White Network Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute bg-[#ffffff] rounded-full"
          style={{
            left: `${node.x}vw`,
            top: `${node.y}vh`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            boxShadow: `0 0 10px #ffffff`,
          }}
          animate={{
            y: ["-5vh", "5vh", "-5vh"],
            x: ["-2vw", "2vw", "-2vw"],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: node.duration,
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating Binary Rain (simulated softly on right side) */}
      <motion.div 
        className="absolute right-[5vw] top-0 text-[#ffffff] font-['JetBrains_Mono'] text-xs opacity-10 select-none"
        animate={{ y: [0, 1000] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <p>0 1 0 0 1</p>
        <p>1 0 1 1 0</p>
        <p>0 1 1 0 1</p>
        <p>1 1 0 0 1</p>
        <p>0 1 0 1 0</p>
        <p>1 0 0 1 1</p>
        <p>1 1 0 0 1</p>
      </motion.div>
    </div>
  );
}
