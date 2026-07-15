import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Monitor,
  BarChart2,
  Globe,
  Cpu,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// ─── Types ────────────────────────────────────────────────────────────────────

export type Project = {
  icon: LucideIcon;
  title: string;
  company: string;
  description: string;
  longDescription?: string;
  tags: string[];
  color: string;
  category: "enterprise" | "academic" | "hackathon";
  url?: string;
  pdfUrl?: string;
  certUrl?: string;
  logo?: string;
  features?: string[];
  role?: string;
  team?: string;
  images?: string[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    icon: Cpu,
    title: "Smart Stock Level Alert System",
    company: "Academic Project • 2025",
    description:
      "An embedded system designed to monitor stock levels automatically using an Arduino microcontroller and ultrasonic sensor. When stock reaches a predefined threshold, a three-level visual LED alert is triggered to notify requirements for replenishment.",
    longDescription:
      "This project simulates a simple smart inventory monitoring solution that could be applied in warehouses, retail stores, or industrial environments.",
    tags: ["Arduino Uno", "HC-SR04 Sensor", "Tinkercad", "CATIA", "IoT"],
    color: "amber",
    category: "academic",
    features: [
      "Automatic stock level detection",
      "Three-level alert system (Green / Orange / Red)",
      "Real-time sensor measurement",
      "Low-cost embedded prototype",
      "Simulation and testing using Tinkercad",
    ],
    role: "Project Manager & Team Member responsible for project coordination, documentation, and system testing.",
    team: "Achraf Fariss, Abdelaziz Lembarek, Ayoub Ismaili Alaoui, Ouissal Essalhi, Safouan Makhlouf",
    images: [],
  },
  {
    icon: Globe,
    title: "Non-Conformity Tracking Web App",
    company: "Lear Corporation TRIM 1 • 2025",
    description:
      "Designed and developed a full-stack web application to track, manage, and analyze non-conformities in the reception quality department. Built with HTML, CSS, JavaScript, and Python to improve traceability and reduce resolution time.",
    tags: ["Python", "HTML/CSS/JS", "Quality Management", "IATF 16949"],
    color: "cyan",
    category: "enterprise",
    url: "https://www.lear.com",
    logo: "/lear-logo.png",
  },
  {
    icon: BarChart2,
    title: "Power BI KPI Quality Dashboard",
    company: "Lear Corporation TRIM 1 • 2025",
    description:
      "Built an interactive Power BI dashboard for real-time monitoring of quality KPIs. Enabled management to track supplier evaluation metrics, defect trends, and reception control performance at a glance.",
    tags: [
      "Power BI",
      "KPI Monitoring",
      "Data Visualization",
      "Supplier Evaluation",
    ],
    color: "blue",
    category: "enterprise",
    logo: "/lear-logo.png",
  },
  {
    icon: Layers,
    title: "Quality Inspection Standardization",
    company: "Lear Corporation TRIM 1 • 2025",
    description:
      "Led the revision and standardization of inspection instructions across the reception quality department, ensuring full compliance with ISO 9001 and IATF 16949 international standards.",
    tags: ["ISO 9001", "IATF 16949", "Process Improvement", "Documentation"],
    color: "violet",
    category: "enterprise",
    logo: "/lear-logo.png",
  },
  {
    icon: Monitor,
    title: "FabConnect MA",
    company: "Personal Project • 2026",
    description:
      "Plateforme web de fabrication additive connectant les clients aux services d'impression 3D, avec dépôt de modèles, estimation de budget par IA et gestion simplifiée des demandes de fabrication.",
    tags: [
      "Next.js",
      "AI Budget Estimation",
      "Industry 4.0",
      "3D Printing",
      "Web Platform",
      "SaaS",
    ],
    color: "emerald",
    category: "enterprise",
    url: "https://fabconnect.vercel.app/",
    pdfUrl: "/Industrie4_Fabrication_Additive_Automobile.pdf",
    certUrl: "/ID_33_F.A.pdf",
    logo: "/FabConnect MA.png",
  },
  {
    icon: Globe,
    title: "KhettaraViz",
    company: "Hackathon EHYN 2026 • 2026",
    description:
      "MVP conçu pour documenter et visualiser, de manière open-access, le déclin des systèmes traditionnels de khettaras dans la région du Drâa-Tafilalet. Combine cartographie interactive (Leaflet + OpenStreetMap) et visualisation de données (Plotly) pour rendre lisible l'ampleur de ce déclin et ses implications sur la résilience climatique des territoires arides.",
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Leaflet",
      "Plotly",
      "Water Governance",
      "Open Access",
    ],
    color: "blue",
    category: "hackathon",
    url: "https://khettaraviz-mvp.vercel.app/",
    logo: "/ecohydrology_youth_network_logo.jpeg",
  },
];

// ─── Color Map ────────────────────────────────────────────────────────────────

const colorMap: Record<
  string,
  {
    border: string;
    bg: string;
    text: string;
    icon: string;
    glow: string;
    tagBg: string;
    tagBorder: string;
  }
> = {
  cyan: {
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/10",
    text: "text-cyan-300",
    icon: "text-cyan-400",
    glow: "hover:shadow-cyan-500/10",
    tagBg: "bg-cyan-500/10",
    tagBorder: "border-cyan-500/20",
  },
  blue: {
    border: "border-blue-500/20",
    bg: "bg-blue-500/10",
    text: "text-blue-300",
    icon: "text-blue-400",
    glow: "hover:shadow-blue-500/10",
    tagBg: "bg-blue-500/10",
    tagBorder: "border-blue-500/20",
  },
  violet: {
    border: "border-violet-500/20",
    bg: "bg-violet-500/10",
    text: "text-violet-300",
    icon: "text-violet-400",
    glow: "hover:shadow-violet-500/10",
    tagBg: "bg-violet-500/10",
    tagBorder: "border-violet-500/20",
  },
  emerald: {
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/10",
    text: "text-emerald-300",
    icon: "text-emerald-400",
    glow: "hover:shadow-emerald-500/10",
    tagBg: "bg-emerald-500/10",
    tagBorder: "border-emerald-500/20",
  },
  amber: {
    border: "border-amber-500/20",
    bg: "bg-amber-500/10",
    text: "text-amber-300",
    icon: "text-amber-400",
    glow: "hover:shadow-amber-500/10",
    tagBg: "bg-amber-500/10",
    tagBorder: "border-amber-500/20",
  },
};

const categoryMap: Record<
  Project["category"],
  { label: string; className: string; icon: LucideIcon }
> = {
  enterprise: {
    label: "Enterprise",
    className: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    icon: Briefcase,
  },
  academic: {
    label: "Academic",
    className: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    icon: GraduationCap,
  },
  hackathon: {
    label: "Hackathon",
    className: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    icon: Trophy,
  },
};

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

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isInView } = useInView(0.1);
  const Icon = project.icon;
  const c = colorMap[project.color];
  const category = categoryMap[project.category];
  const CategoryIcon = category.icon;
  const hasDetails =
    project.features ||
    project.role ||
    (project.images && project.images.length > 0);

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
      className={`group relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${c.glow} hover:border-white/[0.12] ${isExpanded ? "md:col-span-2" : ""
        }`}
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.color === "cyan"
          ? "from-cyan-500 to-blue-600"
          : project.color === "blue"
            ? "from-blue-500 to-indigo-600"
            : project.color === "violet"
              ? "from-violet-500 to-purple-600"
              : project.color === "emerald"
                ? "from-emerald-500 to-green-600"
                : "from-amber-500 to-orange-600"
          } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="p-6 md:p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${c.bg} border ${c.border} transition-transform duration-300 group-hover:scale-110 overflow-hidden`}
          >
            {project.logo ? (
              <img
                src={project.logo}
                alt={`${project.company} logo`}
                className="w-full h-full object-cover"
              />
            ) : (
              <Icon className={`h-5 w-5 ${c.icon}`} />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border ${category.className}`}
              >
                <CategoryIcon className="h-2.5 w-2.5" />
                {category.label}
              </span>
            </div>
            <h3 className="text-base md:text-lg font-bold text-white leading-snug">
              {project.title}
            </h3>
            <p className={`text-xs font-medium mt-1 ${c.text}`}>
              {project.company}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-foreground/55 leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium ${c.tagBorder} ${c.tagBg} ${c.text} transition-colors duration-200`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expanded Details */}
        <AnimatePresence>
          {isExpanded && hasDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-1 border-t border-white/[0.06] space-y-5">
                {project.longDescription && (
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">
                      Overview
                    </h4>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                )}

                {project.features && (
                  <div>
                    <h4 className="text-sm font-bold text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((f: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-foreground/60"
                        >
                          <span
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.bg.replace(
                              "/10",
                              "/40"
                            )}`}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  {project.role && (
                    <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground/35 mb-1.5">
                        My Role
                      </h4>
                      <p className="text-sm text-foreground/65 leading-relaxed">
                        {project.role}
                      </p>
                    </div>
                  )}
                  {project.team && (
                    <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground/35 mb-1.5">
                        Team
                      </h4>
                      <p className="text-sm text-foreground/65 leading-tight">
                        {project.team}
                      </p>
                    </div>
                  )}
                </div>

                {project.images && project.images.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold text-white mb-3">
                      Gallery
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.images.map((img: string, i: number) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${project.title} screenshot`}
                          className="rounded-xl object-cover w-full h-40 border border-white/[0.06] bg-black/20"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-2">
          {hasDetails && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center gap-1.5 text-xs font-semibold hover:text-white transition-colors duration-200 ${c.text}`}
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  View Details <ChevronDown className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/40 hover:text-white transition-colors duration-200 ml-auto"
            >
              Visit
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          {project.pdfUrl && (
            <a
              href={project.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/40 hover:text-white transition-colors duration-200"
            >
              Article PDF
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          {project.certUrl && (
            <a
              href={project.certUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/40 hover:text-white transition-colors duration-200"
            >
              Certificate
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-black/20">
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
            Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Key Projects & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto text-sm leading-relaxed">
            Tangible outcomes from internships, academic work, and
            extracurricular initiatives.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
