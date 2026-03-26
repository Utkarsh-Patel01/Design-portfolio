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
    <div className="group relative bg-card rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {image && (
          <div className="w-full h-56 bg-secondary rounded-2xl mb-6 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        
        <h3 className="text-3xl mb-4 text-foreground">{title}</h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-secondary text-foreground text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="space-y-3 mb-8 pt-6 border-t border-border">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-baseline gap-3">
              <span className="text-3xl text-foreground">
                {metric.value}
              </span>
              <span className="text-muted-foreground">{metric.label}</span>
            </div>
          ))}
        </div>
        
        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground group-hover:gap-3 transition-all text-lg"
          >
            View on GitHub
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        ) : (
          <button className="inline-flex items-center gap-2 text-foreground group-hover:gap-3 transition-all text-lg">
            View Project
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
}