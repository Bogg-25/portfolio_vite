import { motion } from "framer-motion";
import { Layers, Monitor, BarChart2, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
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
    tags: ["Power BI", "KPI Monitoring", "Data Visualization", "Supplier Evaluation"],
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
    tags: ["Leadership", "Event Management", "Public Speaking", "Team Building"],
    color: "emerald",
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string; icon: string }> = {
  cyan:    { border: "border-cyan-500/30",    bg: "bg-cyan-500/10",    text: "text-cyan-300",    icon: "text-cyan-400" },
  blue:    { border: "border-blue-500/30",    bg: "bg-blue-500/10",    text: "text-blue-300",    icon: "text-blue-400" },
  violet:  { border: "border-violet-500/30",  bg: "bg-violet-500/10",  text: "text-violet-300",  icon: "text-violet-400" },
  emerald: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-300", icon: "text-emerald-400" },
};

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
          <Badge variant="outline" className="mb-4 border-cyan-500/30 text-cyan-300">
            Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Key Projects & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Tangible outcomes from internships, academic work and extracurricular initiatives.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = project.icon;
            const c = colorMap[project.color];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 md:p-7 hover:border-cyan-500/20 transition-all flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${c.bg} border ${c.border}`}>
                    <Icon className={`h-5 w-5 ${c.icon}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white leading-snug">{project.title}</h3>
                    <p className={`text-xs font-medium mt-0.5 ${c.text}`}>{project.company}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${c.border} ${c.bg} ${c.text}`}
                    >
                      {tag}
                    </span>
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


