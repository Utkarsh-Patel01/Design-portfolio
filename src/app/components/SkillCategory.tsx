interface SkillCategoryProps {
  category: string;
  description?: string;
  skills?: string[];
  subcategories?: {
    name: string;
    skills: string[];
  }[];
}

export function SkillCategory({ category, description, skills, subcategories }: SkillCategoryProps) {
  return (
    <div className="bg-card rounded-3xl p-8 border border-border shadow-[0_8px_24px_rgba(0,0,0,0.04)] h-full">
      <h4 className="text-2xl mb-2 text-foreground font-semibold">{category}</h4>
      {description && <p className="text-muted-foreground text-sm mb-6 leading-relaxed bg-secondary/30 p-4 rounded-xl">{description}</p>}
      
      {subcategories ? (
        <div className="space-y-6 mt-4">
          {subcategories.map((sub, idx) => (
            <div key={idx}>
              <h5 className="text-sm font-semibold text-foreground/80 mb-3 tracking-wide">{sub.name}</h5>
              <div className="flex flex-wrap gap-2">
                {sub.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-secondary text-foreground text-sm rounded-xl border border-border shadow-sm transition-all hover:bg-card hover:shadow-md hover:-translate-y-0.5 duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2 mt-6">
          {skills?.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2.5 bg-secondary text-foreground rounded-2xl border border-border shadow-sm transition-all hover:bg-card hover:shadow-md hover:-translate-y-0.5 duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}