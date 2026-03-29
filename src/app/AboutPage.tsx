import { motion } from "motion/react";
import { Code2, Database, Brain, ArrowLeft } from "lucide-react";
import { CustomCursor } from "./components/CustomCursor";
import { Link } from "react-router";

export default function AboutPage() {
  return (
    <div className="min-h-screen relative z-0">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-[-1] opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      />
      <CustomCursor />

      {/* Back button */}
      <div className="fixed top-8 left-8 z-50">
        <Link 
          to="/" 
          className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-md border border-border rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.08)] text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <section id="about" className="py-32 px-6 relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-5xl md:text-6xl text-foreground">About Me</h2>
            <div className="h-px flex-1 bg-border max-w-xs" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm a passionate Data Scientist with a strong analytical
                mindset and expertise in machine learning and data-driven
                systems. My work focuses on transforming complex data into
                actionable insights that drive real-world impact.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With proficiency in Python, SQL, and modern ML frameworks, I
                specialize in building scalable data solutions, optimizing
                analytics pipelines, and creating compelling data
                visualizations that tell meaningful stories.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I combine technical expertise with problem-solving abilities
                to deliver innovative solutions that bridge the gap between
                data and business value.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-2 text-foreground">
                      Clean Code
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Writing efficient, maintainable, and scalable code
                      following best practices
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-2 text-foreground">
                      Data Engineering
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Building robust data pipelines and warehouses for
                      enterprise-scale analytics
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-2 text-foreground">
                      Machine Learning
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Developing intelligent models that learn from data and
                      make accurate predictions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
