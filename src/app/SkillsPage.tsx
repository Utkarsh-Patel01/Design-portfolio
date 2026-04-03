import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { SkillSphere } from "./components/SkillSphere";
import { CustomCursor } from "./components/CustomCursor";

export default function SkillsPage() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "Java", "C", "SQL"],
    },
    {
      category: "Frontend UI",
      skills: ["Streamlit", "Next.js", "Tableau", "Power BI"],
    },
    {
      category: "Backend & DBs",
      skills: ["PostgreSQL", "MySQL", "Airtable", "Prisma (ORM)", "SQLAlchemy"],
    },
    {
      category: "AI Engineering",
      skills: ["PyTorch", "Scikit-learn", "HuggingFace", "OpenCV", "CNN", "LSTM", "LangChain", "n8n"],
    },
    {
      category: "DevOps & Tools",
      skills: ["AWS", "Docker", "Airflow", "Databricks"],
    },
    {
      category: "Core Competencies",
      skills: ["Pandas", "NumPy", "Machine Learning", "RAG", "Agentic Workflows"],
    },
  ];

  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <div className="min-h-screen relative z-0 bg-background text-foreground">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-[-1] opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      />
      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <span className="font-serif italic text-xl">Skills</span>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-16"
        >
          <p className="text-muted-foreground mb-4 uppercase tracking-[0.2em] text-sm font-medium">
            Technical Arsenal
          </p>
          <h1 className="text-5xl md:text-6xl text-foreground font-serif">
            Skills <span className="italic font-light">&</span> Technologies
          </h1>
        </motion.div>

        {/* Sphere Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
        >
          <SkillSphere skills={allSkills} />
        </motion.section>

        {/* Categories Section (Table-like grid) */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col border-t border-border">
            {skillCategories.map((cat, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row py-12 border-b border-border gap-8 hover:bg-secondary/10 transition-colors"
              >
                <div className="md:w-1/4 flex-shrink-0 pt-1">
                  <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground/80">
                    {cat.category}
                  </h3>
                </div>
                <div className="md:w-3/4">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 text-muted-foreground">
                    {cat.skills.map((skill, sIndex) => (
                      <li key={sIndex} className="text-[1.05rem]">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
