import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    name: "ISO 9001 - Quality Management Auditor",
    issuer: "Quality Standards",
    color: "cyan",
    url: "https://www.udemy.com/certificate/UC-3f310741-487a-4a2f-a207-163a2cb79d49/",
  },
  {
    name: "Power BI - Data Analytics & Visualization",
    issuer: "Microsoft",
    color: "blue",
    url: "#",
  },
  {
    name: "SAP S/4HANA - Enterprise Resource Planning",
    issuer: "SAP",
    color: "violet",
    url: "#",
  },
  {
    name: "MS Project - Professional Project Management",
    issuer: "Microsoft",
    color: "sky",
    url: "https://www.udemy.com/certificate/UC-e16c4e8c-80a1-47c7-8432-4abacf2fdb0c/",
  },
  {
    name: "Python - Programming & Automation",
    issuer: "Python Institute",
    color: "emerald",
    url: "https://www.udemy.com/certificate/UC-c9a104d0-0106-4233-a337-acec3763ad1b/",
  },
  {
    name: "CATIA - 3D Industrial Design",
    issuer: "Dassault Systemes",
    color: "amber",
    url: "https://www.udemy.com/certificate/UC-9efcf7af-0f6b-485e-94a4-58c76cd031a7/",
  },
  {
    name: "Supply Chain Management",
    issuer: "Industry Certification",
    color: "blue",
    url: "#",
  },
  {
    name: "Lean, Six Sigma, Quality Management",
    issuer: "Industry Certification",
    color: "blue",
    url: "https://www.udemy.com/certificate/UC-edab2ed3-139f-49a1-a4f3-b2dd099d34e8/",
  },
];

const colorMap: Record<string, string> = {
  cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  blue: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  violet: "border-violet-500/30 bg-violet-500/10 text-violet-300",
  sky: "border-sky-500/30 bg-sky-500/10 text-sky-300",
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-300",
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
          <Badge
            variant="outline"
            className="mb-4 border-cyan-500/30 text-cyan-300"
          >
            Certifications
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Validated <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Industry-recognized certifications covering quality auditing,
            enterprise software, and digital tools.
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
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border ${colorMap[cert.color]}`}
              >
                <Award className="h-5 w-5" />
              </div>
              <div className="flex-1 mt-0.5">
                <p className="text-sm font-semibold text-white leading-snug pr-2">
                  {cert.name}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-foreground/40">{cert.issuer}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                      aria-label={`Voir le certificat ${cert.name}`}
                    >
                      Voir <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
