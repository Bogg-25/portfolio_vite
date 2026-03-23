import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "Master 1 - Management of Innovation and Technology",
    school: "ENSAM Rabat",
    location: "Rabat, Morocco",
    period: "2025 - Present",
    type: "Master's",
    highlight: "Current",
    description:
      "Advanced studies in innovation management, technology strategy, digital transformation, and project management methodologies.",
  },
  {
    degree: "Bachelor's Degree in Industrial Engineering",
    school: "FST Tanger",
    location: "Tangier, Morocco",
    period: "2024 - 2025",
    type: "License",
    highlight: "Completed",
    description:
      "Comprehensive training in industrial processes, quality management systems, production optimization, and supply chain management.",
  },
  {
    degree: "DEUST - Mechanical and Electrical Engineering",
    school: "FST Tanger",
    location: "Tangier, Morocco",
    period: "2021 - 2024",
    type: "DEUST",
    highlight: "Completed",
    description:
      "Foundation in mechanical engineering principles, electrical systems, and core scientific disciplines enabling industrial applications.",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-cyan-500/30 text-cyan-300">
            Education
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Engineering fundamentals built progressively toward innovation
            and technology management leadership.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-blue-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-cyan-500/40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur z-10">
                  <GraduationCap className="h-5 w-5 text-cyan-400" />
                </div>

                <div className="glass-card p-6 md:p-8 hover:border-cyan-500/20 transition-all group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge
                          className={`text-xs ${
                            edu.highlight === "Current"
                              ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-300"
                              : "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                          }`}
                          variant="outline"
                        >
                          {edu.highlight}
                        </Badge>
                        <Badge variant="outline" className="border-white/10 text-foreground/40 text-xs">
                          {edu.type}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground/55">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="h-3.5 w-3.5 text-cyan-400/60" />
                      {edu.school}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-cyan-400/60" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-cyan-400/60" />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


