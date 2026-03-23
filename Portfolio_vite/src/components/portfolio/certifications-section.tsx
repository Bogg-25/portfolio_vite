import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  { name: "ISO 9001 - Quality Management Auditor", issuer: "Quality Standards", color: "cyan" },
  { name: "Power BI - Data Analytics & Visualization", issuer: "Microsoft", color: "blue" },
  { name: "SAP S/4HANA - Enterprise Resource Planning", issuer: "SAP", color: "violet" },
  { name: "MS Project - Professional Project Management", issuer: "Microsoft", color: "sky" },
  { name: "Python - Programming & Automation", issuer: "Python Institute", color: "emerald" },
  { name: "CATIA - 3D Industrial Design", issuer: "Dassault Systemes", color: "amber" },
  { name: "Supply Chain Management", issuer: "Industry Certification", color: "blue" },
];

const colorMap: Record<string, string> = {
  cyan:    "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  blue:    "border-blue-500/30 bg-blue-500/10 text-blue-300",
  violet:  "border-violet-500/30 bg-violet-500/10 text-violet-300",
  sky:     "border-sky-500/30 bg-sky-500/10 text-sky-300",
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  amber:   "border-amber-500/30 bg-amber-500/10 text-amber-300",
};

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-cyan-500/30 text-cyan-300">
            Certifications
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Validated <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Industry-recognized certifications covering quality auditing, enterprise software, and digital tools.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card p-5 hover:border-cyan-500/20 transition-all flex items-start gap-4"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border ${colorMap[cert.color]}`}>
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-snug">{cert.name}</p>
                <p className="text-xs text-foreground/40 mt-1">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


