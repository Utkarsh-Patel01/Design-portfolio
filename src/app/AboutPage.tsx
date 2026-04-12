import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { CustomCursor } from "./components/CustomCursor";
import { Link } from "react-router";

export default function AboutPage() {
  return (
    <div className="min-h-screen relative z-0 bg-[#0d0d0d] text-[#f5f5f5] font-['Space_Grotesk']">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-[-1] opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      />
      <CustomCursor />

      {/* Back button */}
      <div className="fixed top-8 left-8 z-50">
        <Link 
          to="/" 
          className="flex items-center gap-2 px-4 py-2 bg-[#141414]/80 backdrop-blur-md border border-[#2e2e2e] rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-[#a0a0a0] hover:text-[#ffffff] hover:bg-[#1c1c1c] transition-all font-medium font-['Inter']"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <section className="py-32 px-6 max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
            {/* Phase A: Hero & Labels */}
            <div className="mb-24 mt-12">
                <h1 className="text-[6rem] md:text-[9rem] font-bold leading-none mb-10 tracking-tighter text-[#f5f5f5]">About.</h1>
                <p className="text-3xl md:text-4xl text-[#a0a0a0] max-w-4xl leading-tight font-['Inter'] font-light">
                I am Utkarsh, a Data Science & ML Engineer based in Robertsganj, building intelligent data systems and scalable analytics pipelines.
                </p>
            </div>

            {/* Two-column label section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                <div className="md:col-span-1">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#7a7a7a] mb-6 font-['Inter'] font-semibold">Focusing On</h4>
                <ul className="space-y-3 text-[#a0a0a0] font-['Inter'] text-sm">
                    <li>Data Science & ML</li>
                    <li>Data Engineering</li>
                    <li>Analytics & Visualization</li>
                </ul>
                </div>
                <div className="md:col-span-2">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#7a7a7a] mb-6 font-['Inter'] font-semibold">Knowledge Of</h4>
                <ul className="space-y-3 text-[#a0a0a0] font-['Inter'] text-sm">
                    <li>Python & SQL</li>
                    <li>Machine Learning & NLP</li>
                    <li>Tableau & Power BI</li>
                </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#2e2e2e] my-20" />

            {/* Phase B: Identity & Bio */}
            <div className="mb-24">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#7a7a7a] mb-3 font-['Inter'] font-semibold">My Name Is</h4>
                <h2 className="text-2xl font-bold mb-16 tracking-wide text-[#f5f5f5]">Utkarsh Patel</h2>

                <div className="grid md:grid-cols-[1fr_2.5fr] gap-12 items-start">
                {/* Image placeholder */}
                <div className="w-full aspect-[4/5] bg-[#1a1a1a] rounded-3xl border border-[#2e2e2e] shadow-inner relative overflow-hidden flex items-center justify-center">
                    <span className="text-[#3d3d3d] font-['Inter'] text-sm uppercase tracking-widest">Photo Placeholder</span>
                </div>
                
                {/* Bio text */}
                <div className="space-y-8 text-[#a0a0a0] text-xl leading-relaxed font-['Inter'] pt-2">
                    <p>
                        Hi, I'm Utkarsh Patel. I am a Data Science & ML Engineer with expertise in building end-to-end data pipelines, intelligent ML models, and real-time analytics dashboards. My practice is rooted in robust data engineering workflows and highly actionable business insights.
                    </p>
                    <p>
                        I currently focus on Machine Learning, SQL-based data warehousing, and LLM/NLP applications. Right now, I am pursuing my B.Tech in Computer Science & Engineering at Lovely Professional University with a specialization in Data Science & ML.
                    </p>
                </div>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#2e2e2e] my-20" />

            {/* Phase C: Education */}
            <div className="grid md:grid-cols-[1fr_2.5fr] gap-12 mb-24">
                <div>
                <h3 className="text-3xl font-medium tracking-tight text-[#f5f5f5]">Education</h3>
                <p className="text-[#a0a0a0] mt-2 font-['Inter']">in Computer Science.</p>
                </div>
                <div className="pt-2">
                <h4 className="text-xl font-bold mb-6 text-[#f5f5f5]">Degrees</h4>
                <div className="mb-8">
                    <p className="text-[#f5f5f5] text-lg mb-2 font-medium">Bachelor of Technology in Computer Science & Engineering</p>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-[#7a7a7a] text-sm font-['Inter']">
                        <span>2023 Aug – Present (CGPA: 7.9)</span>
                        <span className="hidden md:inline text-[#3d3d3d]">|</span>
                        <span>Lovely Professional University, Jalandhar, Punjab</span>
                    </div>
                </div>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#2e2e2e] my-20" />

            {/* Phase C: Featured Projects */}
            <div className="grid md:grid-cols-[1fr_2.5fr] gap-12 mb-24">
                <div>
                <h3 className="text-3xl font-medium tracking-tight text-[#f5f5f5]">Featured Projects</h3>
                <p className="text-[#a0a0a0] mt-2 font-['Inter']">in Data & ML.</p>
                </div>
                <div className="space-y-20 pt-2">
                <div>
                    <h4 className="text-xl font-bold mb-3 text-[#f5f5f5]">Project 1 — SQL Data Warehouse</h4>
                    <p className="text-[#a0a0a0] text-lg mb-4 font-['Inter']">Enterprise-Grade Data Warehouse with Medallion Architecture</p>
                    
                    <div className="flex items-center gap-4 text-[#7a7a7a] text-sm font-['Inter'] mb-6">
                        <span>Independent Project</span>
                        <span className="text-[#3d3d3d]">|</span>
                        <span>July 2025</span>
                    </div>

                    <p className="text-[#a0a0a0] font-['JetBrains_Mono'] text-sm mb-3">
                        <span className="italic text-[#7a7a7a]">Stack —</span> SQL (T-SQL), SSIS, OLAP, Tableau
                    </p>
                    <p className="text-[#7a7a7a] font-['Inter'] text-sm tracking-wide">{`Data Engineering`}</p>
                </div>
                
                <div className="w-32 h-px bg-[#2e2e2e]" />

                <div>
                    <h4 className="text-xl font-bold mb-3 text-[#f5f5f5]">Project 2 — Washington EV Population Analysis</h4>
                    <p className="text-[#a0a0a0] text-lg mb-4 font-['Inter']">Large-Scale EV Trend Analysis & Interactive Dashboard</p>
                    
                    <div className="flex items-center gap-4 text-[#7a7a7a] text-sm font-['Inter'] mb-6">
                        <span>Independent Project</span>
                        <span className="text-[#3d3d3d]">|</span>
                        <span>Jan 2025</span>
                    </div>

                    <p className="text-[#a0a0a0] font-['JetBrains_Mono'] text-sm mb-3">
                        <span className="italic text-[#7a7a7a]">Stack —</span> SQL, Python, Pandas, Tableau, Matplotlib
                    </p>
                    <p className="text-[#7a7a7a] font-['Inter'] text-sm tracking-wide">{`Data Analytics`}</p>
                </div>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#2e2e2e] my-20" />

            {/* Phase C: Certifications & Achievements */}
            <div className="grid md:grid-cols-[1fr_2.5fr] gap-12 mb-32">
                <div>
                <h3 className="text-3xl font-medium tracking-tight text-[#f5f5f5]">Certifications</h3>
                <p className="text-[#a0a0a0] mt-2 font-['Inter']">& Achievements.</p>
                </div>
                <div className="space-y-20 pt-2">
                {/* Oracle */}
                <div>
                    <h4 className="text-lg font-bold mb-8 text-[#f5f5f5]">Oracle</h4>
                    <div className="space-y-8 font-['Inter']">
                        <div className="group cursor-pointer">
                            <p className="text-[#f5f5f5] text-lg mb-2 group-hover:text-[#ffffff] transition-colors inline-flex items-center gap-2">
                                OCI Data Science Professional 
                                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </p>
                            <p className="text-[#7a7a7a] text-sm">2025 October</p>
                        </div>
                        <div className="group cursor-pointer">
                            <p className="text-[#f5f5f5] text-lg mb-2 group-hover:text-[#ffffff] transition-colors inline-flex items-center gap-2">
                                OCI Generative AI Professional 
                                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </p>
                            <p className="text-[#7a7a7a] text-sm">2025 October</p>
                        </div>
                        <div className="group cursor-pointer">
                            <p className="text-[#f5f5f5] text-lg mb-2 group-hover:text-[#ffffff] transition-colors inline-flex items-center gap-2">
                                OCI AI Foundations Associate 
                                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </p>
                            <p className="text-[#7a7a7a] text-sm">2025 October</p>
                        </div>
                    </div>
                </div>

                <div className="w-32 h-px bg-[#2e2e2e]" />

                {/* Udemy */}
                <div>
                    <h4 className="text-lg font-bold mb-8 text-[#f5f5f5]">Udemy</h4>
                    <div className="font-['Inter'] group cursor-pointer">
                        <p className="text-[#f5f5f5] text-lg mb-2 group-hover:text-[#ffffff] transition-colors inline-flex items-center gap-2">
                            Microsoft Excel – Beginner to Advanced 
                            <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </p>
                        <p className="text-[#7a7a7a] text-sm">2024 July</p>
                    </div>
                </div>

                <div className="w-32 h-px bg-[#2e2e2e]" />

                {/* Training */}
                <div>
                    <h4 className="text-lg font-bold mb-8 text-[#f5f5f5]">Cipher Schools</h4>
                    <div className="font-['Inter']">
                        <p className="text-[#f5f5f5] text-lg mb-2">A Guide to Machine Learning with Data Science</p>
                        <p className="text-[#7a7a7a] text-sm">2025 June–July</p>
                    </div>
                </div>

                </div>
            </div>
            
            {/* Push to top */}
            <div className="flex justify-center pb-20">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                  className="px-8 py-3 border border-[#2e2e2e] rounded-full text-sm font-['Inter'] text-[#a0a0a0] hover:text-[#f5f5f5] hover:border-[#ffffff] hover:bg-[#141414] transition-all flex items-center gap-2 group"
                >
                <ArrowLeft className="w-4 h-4 rotate-90 group-hover:-translate-y-1 transition-transform" />
                Go to Top
                </button>
            </div>
        </motion.div>
      </section>
    </div>
  );
}
