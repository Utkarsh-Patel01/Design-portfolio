import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Download,
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  Code2,
  Database,
  Brain,
  Award,
  Briefcase,
  Home,
  User,
  FolderOpen,
  Wrench,
  Building,
} from "lucide-react";
import { ProjectCard } from "./components/ProjectCard";
import { CertificationCard } from "./components/CertificationCard";
import { SkillCategory } from "./components/SkillCategory";
import { CustomCursor } from "./components/CustomCursor";
import { Typewriter } from "./components/Typewriter";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "skills",
        "certifications",
        "experience",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "SQL Data Warehouse",
      description:
        "Designed and implemented a comprehensive data warehouse solution using SQL Server, SSIS, and OLAP cubes. Optimized ETL processes and query performance for enterprise-scale analytics.",
      tags: ["SQL", "SSIS", "Tableau", "OLAP"],
      metrics: [
        { label: "faster processing", value: "40%" },
        { label: "reduced query latency", value: "30%" },
      ],
      githubUrl: "https://github.com/Utkarsh-Patel01/Sql-DataWarehouse",
    },
    {
      title: "Washington EV Predictive Analytics",
      description:
        "Developed a Machine Learning pipeline to forecast electric vehicle adoption and infrastructure needs. Leveraged historical Washington State data to build predictive models that identify future high-growth zones and market shifts.",
      tags: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "Tableau"],
      metrics: [
        { label: "model accuracy", value: "92%" },
        { label: "better zone identification", value: "30%" },
      ],
      githubUrl: "https://github.com/Utkarsh-Patel01/Washington-EV-Population-Analysis",
    },
  ];

  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "Java", "C", "SQL"],
    },
    {
      category: "Frontend",
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

  const certifications = [
    {
      title: "OCI Data Science Professional",
      issuer: "Oracle",
      date: "2025",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=2524352E7F6DAE3A78582D3E2619BBCF8B71F85B1D1B81785C1B435CEDF7DC36",
      image: "/assets/OCI Data Science Professional.png",
    },
    {
      title: "OCI Generative AI Professional",
      issuer: "Oracle",
      date: "2025",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8305DFEDF93A816ACBD85DB73FE3BB65C2228D0E9DEBC069BCFEB382055029C8",
      image: "/assets/OCI Generative AI Professional.png",
    },
    {
      title: "OCI AI Foundations Associate",
      issuer: "Oracle",
      date: "2025",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=FB5E3E54BDEE1CF9480BD0FF700826FF282740E7C97CF51158C974E0EDA07ADC",
      image: "/assets/OCI AI Foundations Associate.png",
    },
    {
      title: "Microsoft Excel Certification",
      issuer: "Udemy",
      date: "2024",
      url: "https://www.udemy.com/certificate/UC-4e5f28e0-248f-4712-bfaa-ff182716eb52/",
      image: "/assets/Microsoft Excel Certification.png",
    },
  ];

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "skills", label: "Skills", icon: Wrench },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "experience", label: "Experience", icon: Building },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen relative">
      <CustomCursor />
      {/* Top Floating Navigation Bar */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center gap-2 p-2 bg-background/80 backdrop-blur-md border border-border rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${activeSection === item.id
                ? "bg-secondary text-foreground font-medium"
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                }`}
              aria-label={item.label}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-muted/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mb-4 text-lg"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl lg:text-9xl mb-6 text-foreground tracking-tight"
            >
              Utkarsh Patel
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mb-8 justify-center lg:justify-start"
            >
              <div className="h-px w-16 bg-foreground" />
              <p className="text-xl md:text-2xl text-muted-foreground min-w-[280px]">
                <Typewriter words={["Data Scientist & ML Engineer", "AI Solutions Developer", "Big Data Analyst"]} />
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-2xl mb-12 mx-auto lg:mx-0"
            >
              Transforming complex data into actionable insights. Building
              intelligent systems that drive real-world impact through machine
              learning and advanced analytics.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] inline-flex items-center gap-2"
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <a
                href="https://drive.google.com/file/d/1ssc8pH6L703-r5UPNncLmbiuBKHDi67x/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition-all inline-flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-5xl md:text-6xl text-foreground">About Me</h2>
              <div className="h-px flex-1 bg-border max-w-xs" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate Data Scientist with a strong analytical
                  mindset and expertise in machine learning and data-driven
                  systems. My work focuses on transforming complex data into
                  actionable insights that drive real-world impact.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With proficiency in Python, SQL, and modern ML frameworks, I
                  specialize in building scalable data solutions, optimizing
                  analytics pipelines, and creating compelling data
                  visualizations that tell meaningful stories.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
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
                      <h3 className="text-xl mb-2 text-foreground">
                        Clean Code
                      </h3>
                      <p className="text-muted-foreground">
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
                      <h3 className="text-xl mb-2 text-foreground">
                        Data Engineering
                      </h3>
                      <p className="text-muted-foreground">
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
                      <h3 className="text-xl mb-2 text-foreground">
                        Machine Learning
                      </h3>
                      <p className="text-muted-foreground">
                        Developing intelligent models that learn from data and
                        make accurate predictions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <p className="text-muted-foreground mb-4 uppercase tracking-wider text-sm">
                Portfolio
              </p>
              <h2 className="text-5xl md:text-6xl mb-6 text-foreground">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A showcase of my work in data science, machine learning, and
                analytics engineering
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-5xl md:text-6xl text-foreground">
                Skills & Tools
              </h2>
              <div className="h-px flex-1 bg-border max-w-xs" />
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SkillCategory {...category} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-background" />
              </div>
              <h2 className="text-5xl md:text-6xl text-foreground">
                Certifications
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CertificationCard {...cert} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-background" />
              </div>
              <h2 className="text-5xl md:text-6xl text-foreground">
                Experience
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block ml-6" />

              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="md:ml-16">
                    <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-foreground hidden md:block -ml-[25px]" />
                    <div className="bg-card rounded-2xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                      <h3 className="text-2xl mb-2 text-foreground">
                        Machine Learning Training
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Cipher Schools
                      </p>
                      <div className="mt-2">
                        <p className="text-muted-foreground leading-relaxed text-[1.05rem]">
                          I completed an intensive Machine Learning and Data Science training at Cipher Schools, mastering end-to-end workflows from statistical analysis to implementing supervised and unsupervised models like Regression, Decision Trees, and K-means. My practical experience included developing real-world applications such as an NLP chatbot and a Heart Disease Risk Prediction System, alongside building interactive Power BI dashboards with advanced DAX.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4 uppercase tracking-wider text-sm">
              Get In Touch
            </p>
            <h2 className="text-5xl md:text-6xl mb-8 text-foreground">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <a
                href="mailto:utkarsh@example.com"
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] inline-flex items-center gap-2"
              >
                <Mail size={20} />
                Send Email
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all group"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all group"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Utkarsh Patel. All rights reserved.
          </p>
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground hover:opacity-70 transition-opacity text-sm"
          >
            Back to top ↑
          </button>
        </div>
      </footer>
    </div>
  );
}
