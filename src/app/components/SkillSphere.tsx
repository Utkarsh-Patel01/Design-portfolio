import { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';

interface SkillSphereProps {
  skills: string[];
}

export function SkillSphere({ skills }: SkillSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear existing content to prevent duplicates on hot reload or React.StrictMode remounts
    containerRef.current.innerHTML = '';

    const container = containerRef.current;

    const tagCloud = TagCloud([container], skills, {
      radius: typeof window !== 'undefined' && window.innerWidth < 768 ? 160 : 300,
      maxSpeed: 'fast',
      initSpeed: 'normal',
      keep: true,
    });

    return () => {
      if (tagCloud && typeof tagCloud.destroy === 'function') {
        tagCloud.destroy();
      }
    };
  }, [skills]);

  return (
    <div className="flex justify-center items-center w-full min-h-[400px] md:min-h-[600px] text-foreground font-medium text-lg md:text-xl relative z-10">
      <div ref={containerRef} className="tagcloud-container flex justify-center items-center"></div>
      <style>{`
        .tagcloud-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .tagcloud-container span {
          cursor: pointer;
          transition: color 0.1s;
        }
        .tagcloud-container span:hover {
          color: hsl(var(--primary));
        }
      `}</style>
    </div>
  );
}
