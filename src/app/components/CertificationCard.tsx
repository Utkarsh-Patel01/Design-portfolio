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
    <div className="group bg-card rounded-2xl p-6 border border-border transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:scale-[1.05]">
      <div className="w-full h-40 bg-secondary rounded-xl mb-4 flex items-center justify-center overflow-hidden p-3 shadow-inner">
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
      
      <h4 className="text-lg mb-2 text-foreground line-clamp-2 min-h-[3.5rem]">
        {title}
      </h4>
      
      <p className="text-muted-foreground text-sm mb-1">{issuer}</p>
      <div className="flex items-center justify-between mt-4">
        <p className="text-muted-foreground text-xs">{date}</p>
        
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
            title="View Certificate"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}
