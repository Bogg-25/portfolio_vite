import { motion } from "framer-motion";
import {
  Code2,
  BarChart3,
  Settings,
  Heart,
  Wrench,
  PenTool,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: Settings,
    title: "Quality & Continuous Improvement",
    variant: "quality" as const,
    bgClass: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-400",
    skills: [
      "ISO 9001",
      "IATF 16949",
      "Non-conformity Management",
      "KPI Monitoring & Supplier Quality Metrics",
      "5S",
      "PDCA",
      "Quality Auditing",
      "AMDEC (FMEA)",
      "PPAP",
      "Pareto Analysis",
      "Lean Six Sigma (Foundations)",
    ],
  },
  {
    icon: BarChart3,
    title: "Industrial & Operations Management",
    variant: "skill" as const,
    bgClass: "from-cyan-500/20 to-emerald-500/20",
    iconClass: "text-cyan-400",
    skills: [
      "Process Optimization",
      "Production Management",
      "Logistics & Supply Chain",
      "Project Management",
      "Innovation Management",
      "Technology Watch & Strategic Intelligence",
    ],
  },
  {
    icon: Wrench,
    title: "Project & Business Tools",
    variant: "cert" as const,
    bgClass: "from-amber-500/20 to-orange-500/20",
    iconClass: "text-amber-400",
    skills: [
      "MS Project",
      "ClickUp",
      "SAP S/4HANA",
      "QAD",
      "Excel Advanced (VBA)",
      "Minitab (Basic)",
    ],
  },
  {
    icon: Code2,
    title: "Data, Digitalization & Development",
    variant: "digital" as const,
    bgClass: "from-violet-500/20 to-fuchsia-500/20",
    iconClass: "text-violet-400",
    skills: [
      "Power BI (Dashboard & KPI Monitoring)",
      "Python",
      "SQL / SQL Server",
      "HTML / CSS / JavaScript",
      "Data Mining",
      "Machine Learning (Foundations)",
      "Artificial Intelligence Concepts",
      "Git / GitHub",
      "Industrial Process Digitalization",
    ],
  },
  {
    icon: PenTool,
    title: "Engineering & Design Tools",
    variant: "outline" as const,
    bgClass: "from-slate-500/20 to-zinc-500/20",
    iconClass: "text-slate-400",
    skills: ["SolidWorks", "CATIA"],
  },
  {
    icon: Heart,
    title: "Soft Skills",
    variant: "soft" as const,
    bgClass: "from-emerald-500/20 to-teal-500/20",
    iconClass: "text-emerald-400",
    skills: [
      "Leadership",
      "Teamwork",
      "Communication",
      "Presentation",
      "Initiative",
      "Creativity",
      "Organization",
      "Analytical Thinking",
      "Rigor",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 border-cyan-500/30 text-cyan-300"
          >
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Expertise & <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            A versatile toolkit spanning quality systems, industrial processes,
            digital technologies, and leadership capabilities.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 md:p-8 hover:border-cyan-500/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-2xl bg-gradient-to-br flex items-center justify-center ${category.bgClass}`}
                  >
                    <Icon className={`h-5 w-5 ${category.iconClass}`} />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={category.variant}
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
