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
    <div className="bg-[#111111] rounded-3xl p-8 border border-[#2e2e2e] shadow-[0_8px_24px_rgba(255,255,255,0.04)] h-full">
      <h4 className="text-2xl mb-2 text-[#f5f5f5] font-['Space_Grotesk'] font-semibold">{category}</h4>
      {description && <p className="text-[#a0a0a0] text-sm mb-6 leading-relaxed bg-[#0d0d0d] p-4 rounded-xl border border-[#2e2e2e]">{description}</p>}
      
      {subcategories ? (
        <div className="space-y-6 mt-4">
          {subcategories.map((sub, idx) => (
            <div key={idx}>
              <h5 className="text-sm font-semibold text-[#f5f5f5]/80 font-['Space_Grotesk'] mb-3 tracking-wide">{sub.name}</h5>
              <div className="flex flex-wrap gap-2">
                {sub.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#0d0d0d] text-[#ffffff] font-['JetBrains_Mono'] text-sm rounded-md border border-[#ffffff]/30 shadow-sm transition-all hover:bg-[#1a1a1a] hover:border-[#ffffff] hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 duration-300 uppercase tracking-wider"
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
              className="px-5 py-2.5 bg-[#0d0d0d] text-[#ffffff] font-['JetBrains_Mono'] text-sm rounded-md border border-[#ffffff]/30 shadow-sm transition-all hover:bg-[#1a1a1a] hover:border-[#ffffff] hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 duration-300 uppercase tracking-wider"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}