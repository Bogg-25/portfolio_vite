import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  BarChart3,
  Settings,
  Heart,
  Wrench,
  PenTool,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// ─── Types ────────────────────────────────────────────────────────────────────

type FilterCategory = "All" | "Technical" | "Management" | "Soft Skills";

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  filterTag: FilterCategory;
  bgClass: string;
  glowColor: string;
  iconClass: string;
  skills: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const skillCategories: SkillCategory[] = [
  {
    icon: Settings,
    title: "Quality & Continuous Improvement",
    filterTag: "Technical",
    bgClass: "from-blue-500/20 to-cyan-500/20",
    glowColor: "shadow-blue-500/20",
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
    filterTag: "Management",
    bgClass: "from-cyan-500/20 to-emerald-500/20",
    glowColor: "shadow-cyan-500/20",
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
    filterTag: "Management",
    bgClass: "from-amber-500/20 to-orange-500/20",
    glowColor: "shadow-amber-500/20",
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
    filterTag: "Technical",
    bgClass: "from-violet-500/20 to-fuchsia-500/20",
    glowColor: "shadow-violet-500/20",
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
    filterTag: "Technical",
    bgClass: "from-slate-500/20 to-zinc-500/20",
    glowColor: "shadow-slate-500/20",
    iconClass: "text-slate-400",
    skills: ["SolidWorks", "CATIA"],
  },
  {
    icon: Heart,
    title: "Soft Skills",
    filterTag: "Soft Skills",
    bgClass: "from-emerald-500/20 to-teal-500/20",
    glowColor: "shadow-emerald-500/20",
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

const FILTERS: { label: string; value: FilterCategory }[] = [
  { label: "All", value: "All" },
  { label: "Technical", value: "Technical" },
  { label: "Management", value: "Management" },
  { label: "Soft Skills", value: "Soft Skills" },
];

// ─── Intersection Observer Hook ───────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

// ─── Skill Card ───────────────────────────────────────────────────────────────

function SkillCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const { ref, isInView } = useInView(0.1);
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${category.glowColor} hover:border-white/[0.12]`}
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
          category.iconClass.includes("blue")
            ? "from-blue-500 to-cyan-600"
            : category.iconClass.includes("cyan")
              ? "from-cyan-500 to-emerald-600"
              : category.iconClass.includes("amber")
                ? "from-amber-500 to-orange-600"
                : category.iconClass.includes("violet")
                  ? "from-violet-500 to-fuchsia-600"
                  : category.iconClass.includes("emerald")
                    ? "from-emerald-500 to-teal-600"
                    : "from-slate-500 to-zinc-600"
        } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="p-6 md:p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center ${category.bgClass} border border-white/[0.08] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
          >
            <Icon className={`h-5 w-5 ${category.iconClass}`} />
          </div>
          <div className="flex-1">
            <h3 className="text-base md:text-lg font-bold text-white leading-snug">
              {category.title}
            </h3>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-foreground/30 mt-1">
              {category.filterTag}
            </p>
          </div>
          <div className="text-xs font-bold text-foreground/20">
            {category.skills.length}
          </div>
        </div>

        {/* Tags with cascade animation */}
        <div className="flex flex-wrap gap-2 flex-1">
          {category.skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.3,
                delay: index * 0.1 + 0.3 + i * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ scale: 1.08 }}
              className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium transition-all duration-200 cursor-default ${
                category.iconClass.includes("blue")
                  ? "border-blue-500/20 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400/30"
                  : category.iconClass.includes("cyan")
                    ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/30"
                    : category.iconClass.includes("amber")
                      ? "border-amber-500/20 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 hover:border-amber-400/30"
                      : category.iconClass.includes("violet")
                        ? "border-violet-500/20 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20 hover:border-violet-400/30"
                        : category.iconClass.includes("emerald")
                          ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400/30"
                          : "border-slate-500/20 bg-slate-500/10 text-slate-300 hover:bg-slate-500/20 hover:border-slate-400/30"
              }`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filtered =
    activeFilter === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.filterTag === activeFilter);

  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
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
          <p className="text-foreground/55 max-w-xl mx-auto text-sm leading-relaxed">
            A versatile toolkit spanning quality systems, industrial processes,
            digital technologies, and leadership capabilities.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2.5 mb-10"
        >
          {FILTERS.map((filter) => {
            const count =
              filter.value === "All"
                ? skillCategories.length
                : skillCategories.filter(
                    (c) => c.filterTag === filter.value
                  ).length;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent text-white shadow-lg shadow-cyan-500/25"
                    : "border-white/10 bg-white/[0.04] text-foreground/50 hover:border-white/20 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`ml-2 text-[10px] ${
                    activeFilter === filter.value
                      ? "text-white/60"
                      : "text-foreground/30"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch"
          >
            {filtered.map((category, i) => (
              <SkillCard
                key={category.title}
                category={category}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
