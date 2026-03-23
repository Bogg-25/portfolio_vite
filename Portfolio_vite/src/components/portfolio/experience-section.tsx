import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Quality Reception Intern",
    company: "Lear Corporation TRIM 1",
    location: "TFZ Tangier, Morocco",
    period: "04/2025 - 07/2025",
    type: "Internship",
    color: "cyan",
    achievements: [
      "Enhanced the Quality Management System in the Receiving Department in compliance with IATF 16949:2016 and ISO 9001:2015 standards",
      "Standardized documentation by revising 6 Quality Control Instructions and developing a new procedure for the Ci62 spectrophotometer, reducing inspection time from 14 to 8 minutes and interpretation errors by 60%",
      "Designed and deployed a full-stack web application (HTML, CSS, JavaScript, Python Flask, SQL Server) replacing manual Excel tracking for non-conformity management, reducing search time by 91% and data entry errors by 96%",
      "Developed a Power BI dashboard for real-time monitoring of supplier quality KPIs, identifying critical suppliers, increasing satisfaction rate from 42% to 95%, and reducing processing time by 45%",
    ],
  },
  {
    role: "Maritime Electronics Intern ",
    company: "Soremar Holding",
    location: "Agadir, Morocco",
    period: "07/2022",
    type: "Internship",
    color: "cyan",
    achievements: [
      "Gained hands-on exposure to maritime electronic systems including communication, navigation, and surveillance equipment",
      "Observed maintenance, installation, and troubleshooting processes of onboard electronic systems under supervision of experienced technicians",
      "Developed understanding of system diagnostics, equipment inspection, and operational requirements of marine vessels",
      "Enhanced teamwork and technical awareness by collaborating with professionals in a real industrial environment",
    ],
  },
  {
    role: "Electronics & IT Store Employee",
    company: "DARCONNECT GROUPE",
    location: "Tetouan, Morocco",
    period: "07/2021 - 09/2021",
    type: "Part-time",
    color: "blue",
    achievements: [
      "Managed daily store operations and inventory control",
      "Provided technical support and troubleshooting for electronics and IT products",
      "Built strong customer relations through responsive and knowledgeable service",
    ],
  },
];

const colorMap: Record<string, string> = {
  cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  blue: "border-blue-500/30 bg-blue-500/10 text-blue-300",
};

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-black/20">
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
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Real-world contributions in quality management, industrial systems,
            and software development.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 md:p-8 hover:border-cyan-500/20 transition-all"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-base font-medium text-cyan-300/80">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <Badge
                  className={`text-xs border ${colorMap[exp.color]}`}
                  variant="outline"
                >
                  {exp.type}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-foreground/50">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-cyan-400/60" />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-cyan-400/60" />
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((ach, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.08 }}
                    className="flex items-start gap-3 text-sm text-foreground/65 leading-relaxed"
                  >
                    <CheckCircle2 className="h-4 w-4 text-cyan-400/70 flex-shrink-0 mt-0.5" />
                    {ach}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
