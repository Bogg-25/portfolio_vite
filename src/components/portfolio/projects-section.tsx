import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Monitor,
  BarChart2,
  Globe,
  Cpu,
  ChevronDown,
  ChevronUp,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// ─── Data ─────────────────────────────────────────────────────────────────────

export type Project = {
  icon: LucideIcon;
  title: string;
  company: string;
  description: string;
  longDescription?: string;
  tags: string[];
  color: string;
  features?: string[];
  role?: string;
  team?: string;
  images?: string[];
};

const projects: Project[] = [
  {
    icon: Cpu,
    title: "Smart Stock Level Alert System (Arduino)",
    company: "Academic Project • 2025",
    description:
      "An embedded system designed to monitor stock levels automatically using an Arduino microcontroller and ultrasonic sensor. When stock reaches a predefined threshold, a three-level visual LED alert is triggered to notify requirements for replenishment.",
    longDescription:
      "This project simulates a simple smart inventory monitoring solution that could be applied in warehouses, retail stores, or industrial environments.",
    tags: ["Arduino Uno", "HC-SR04 Sensor", "Tinkercad", "CATIA", "IoT"],
    color: "amber",
    features: [
      "Automatic stock level detection",
      "Three-level alert system (Green / Orange / Red)",
      "Real-time sensor measurement",
      "Low-cost embedded prototype",
      "Simulation and testing using Tinkercad",
    ],
    role: "Project Manager & Team Member responsible for project coordination, documentation, and system testing.",
    team: "Achraf Fariss, Abdelaziz Lembarek, Ayoub Ismaili Alaoui, Ouissal Essalhi, Safouan Makhlouf",
    images: [], // You can add image URLs here later, e.g. ["/arduino-circuit.png"]
  },
  {
    icon: Globe,
    title: "Non-Conformity Tracking Web App",
    company: "Lear Corporation TRIM 1",
    description:
      "Designed and developed a full-stack web application to track, manage, and analyze non-conformities in the reception quality department. Built with HTML, CSS, JavaScript, and Python to improve traceability and reduce resolution time.",
    tags: ["Python", "HTML/CSS/JS", "Quality Management", "IATF 16949"],
    color: "cyan",
  },
  {
    icon: BarChart2,
    title: "Power BI KPI Quality Dashboard",
    company: "Lear Corporation TRIM 1",
    description:
      "Built an interactive Power BI dashboard for real-time monitoring of quality KPIs. Enabled management to track supplier evaluation metrics, defect trends, and reception control performance at a glance.",
    tags: [
      "Power BI",
      "KPI Monitoring",
      "Data Visualization",
      "Supplier Evaluation",
    ],
    color: "blue",
  },
  {
    icon: Layers,
    title: "Quality Inspection Standardization",
    company: "Lear Corporation TRIM 1",
    description:
      "Led the revision and standardization of inspection instructions across the reception quality department, ensuring full compliance with ISO 9001 and IATF 16949 international standards.",
    tags: ["ISO 9001", "IATF 16949", "Process Improvement", "Documentation"],
    color: "violet",
  },
  {
    icon: Monitor,
    title: "The Legends Club - Personal Development Platform",
    company: "FST Tanger",
    description:
      "Founded and presided over a student club dedicated to leadership, personal development, and management. Organized training sessions, conferences, and events to foster communication and leadership capabilities.",
    tags: [
      "Leadership",
      "Event Management",
      "Public Speaking",
      "Team Building",
    ],
    color: "emerald",
  },
];

const colorMap: Record<
  string,
  { border: string; bg: string; text: string; icon: string }
> = {
  cyan: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    text: "text-cyan-300",
    icon: "text-cyan-400",
  },
  blue: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    text: "text-blue-300",
    icon: "text-blue-400",
  },
  violet: {
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
    text: "text-violet-300",
    icon: "text-violet-400",
  },
  emerald: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    text: "text-emerald-300",
    icon: "text-emerald-400",
  },
  amber: {
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
    text: "text-amber-300",
    icon: "text-amber-400",
  },
};

// ─── Project Card Component ───────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = project.icon;
  const c = colorMap[project.color];
  const hasDetails =
    project.features ||
    project.role ||
    (project.images && project.images.length > 0);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card p-6 md:p-7 transition-all flex flex-col h-full 
        ${isExpanded ? "md:col-span-2" : ""} 
        hover:border-${project.color}-500/20`}
    >
      <motion.div layout className="flex items-start gap-4 mb-4">
        <div
          className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${c.bg} border ${c.border}`}
        >
          <Icon className={`h-5 w-5 ${c.icon}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-white leading-snug">
            {project.title}
          </h3>
          <p className={`text-xs font-medium mt-0.5 ${c.text}`}>
            {project.company}
          </p>
        </div>
      </motion.div>

      <motion.p
        layout
        className="text-sm text-foreground/60 leading-relaxed mb-5 flex-1"
      >
        {project.description}
      </motion.p>

      <motion.div layout className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${c.border} ${c.bg} ${c.text}`}
          >
            {tag}
          </span>
        ))}
      </motion.div>

      <AnimatePresence>
        {isExpanded && hasDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-2 border-t border-white/10 space-y-5">
              {project.longDescription && (
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">
                    Overview
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              )}

              {project.features && (
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1">
                    {project.features.map((f: string, i: number) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                {project.role && (
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1.5">
                      My Role
                    </h4>
                    <p className="text-sm text-foreground/70">{project.role}</p>
                  </div>
                )}
                {project.team && (
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1.5">
                      Team
                    </h4>
                    <p className="text-sm text-foreground/70 leading-tight">
                      {project.team}
                    </p>
                  </div>
                )}
              </div>

              {project.images && project.images.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-sm font-semibold text-white mb-3">
                    Gallery & Simulations
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.images.map((img: string, i: number) => (
                      <img
                        key={i}
                        src={img}
                        alt="Project circuit or simulation"
                        className="rounded-xl object-cover w-full h-40 border border-white/10 bg-black/20"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {hasDetails && (
        <motion.button
          layout
          onClick={() => setIsExpanded(!isExpanded)}
          className={`mt-4 flex items-center gap-1.5 text-xs font-semibold self-start hover:text-white transition-colors ${c.text}`}
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              View Project Details <ChevronDown className="w-3.5 h-3.5" />
            </>
          )}
        </motion.button>
      )}
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
          <p className="text-foreground/60 max-w-xl mx-auto">
            Tangible outcomes from internships, academic work, and
            extracurricular initiatives.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
