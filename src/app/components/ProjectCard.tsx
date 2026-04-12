import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  image?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  metrics,
  image,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-[#111111] border border-[#2e2e2e] rounded-3xl p-8 transition-all duration-500 hover:border-[#ffffff] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] overflow-hidden">
      {/* Top Gradient Bar */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ffffff] to-[#7a7a7a] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        {image && (
          <div className="w-full h-56 bg-[#0d0d0d] border border-[#2e2e2e] rounded-2xl mb-6 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
            />
          </div>
        )}
        
        <h3 className="text-3xl mb-4 text-[#f5f5f5] font-['Space_Grotesk']">{title}</h3>
        
        <p className="text-[#a0a0a0] mb-6 leading-relaxed text-lg">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#1a1a1a] border border-[#3d3d3d] text-[#e8e8e8] text-xs font-['JetBrains_Mono'] rounded-md group-hover:border-[#ffffff] transition-colors uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="space-y-3 mb-8 pt-6 border-t border-[#2e2e2e]">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-baseline gap-3">
              <span className="text-3xl font-medium text-[#ffffff] drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] font-['Space_Grotesk']">
                {metric.value}
              </span>
              <span className="text-[#7a7a7a] font-['JetBrains_Mono'] text-sm tracking-wide uppercase">{metric.label}</span>
            </div>
          ))}
        </div>
        
        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#f5f5f5] hover:text-[#ffffff] group-hover:gap-3 transition-all text-lg group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          >
            View on GitHub
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        ) : (
          <button className="inline-flex items-center gap-2 text-[#f5f5f5] hover:text-[#ffffff] group-hover:gap-3 transition-all text-lg group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            View Project
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
}