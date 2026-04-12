import { Award, ExternalLink } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  url?: string;
}

export function CertificationCard({
  title,
  issuer,
  date,
  image,
  url,
}: CertificationCardProps) {
  return (
    <div className="group bg-[#111111] rounded-2xl p-6 border border-[#2e2e2e] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:border-[#ffffff] hover:scale-[1.05]">
      <div className="w-full h-40 bg-[#0d0d0d] border border-[#2e2e2e] rounded-xl mb-4 flex items-center justify-center overflow-hidden p-3 shadow-inner">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Award className="w-12 h-12 text-muted-foreground" />
        )}
      </div>
      
      <h4 className="text-lg mb-2 text-[#f5f5f5] font-['Space_Grotesk'] line-clamp-2 min-h-[3.5rem] group-hover:text-[#ffffff] transition-colors">
        {title}
      </h4>
      
      <p className="text-[#a0a0a0] text-sm mb-1">{issuer}</p>
      <div className="flex items-center justify-between mt-4">
        <p className="text-[#a0a0a0] font-['JetBrains_Mono'] text-xs">{date}</p>
        
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7a7a7a] hover:text-[#ffffff] transition-colors p-1"
            title="View Certificate"
          >
            <ExternalLink className="w-5 h-5 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
          </a>
        )}
      </div>
    </div>
  );
}
