import { motion } from "framer-motion";
import { Users, Star, Calendar, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    icon: Trophy,
    title: "Founded The Legends Club",
    desc: "Established a student organization from scratch, defining its vision, mission, and operational structure.",
  },
  {
    icon: Users,
    title: "Club President since 2022",
    desc: "Led a growing community of students focused on personal development, leadership, and professional readiness.",
  },
  {
    icon: Calendar,
    title: "Events & Conferences",
    desc: "Organized multiple training sessions, workshops, and conferences addressing leadership, communication, and career development.",
  },
  {
    icon: Star,
    title: "Leadership Development",
    desc: "Developed team communication, conflict resolution, and leadership capabilities in club members through structured programs.",
  },
];

export function LeadershipSection() {
  return (
    <section id="leadership" className="section-padding bg-black/20">
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
            Leadership
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Extracurricular & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Beyond academic and professional work - building community, driving
            personal growth, and leading with purpose.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-10 hover:border-cyan-500/20 transition-all mb-8"
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
              <Users className="h-8 w-8 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                Founder & President
              </h3>
              <p className="text-cyan-300 font-medium mt-1">The Legends Club</p>
              <p className="text-sm text-foreground/50 mt-1">
                Since 2022 | FST Tanger, Morocco
              </p>
            </div>
          </div>

          <p className="text-foreground/65 leading-relaxed mb-8 max-w-3xl">
            Created and led{" "}
            <span className="text-white font-medium">The Legends Club</span>, a
            student organization dedicated to personal development, leadership
            training, and professional readiness. Built an environment where
            students could grow their communication skills, management
            abilities, and entrepreneurial mindset through structured programs
            and impactful events.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {achievements.map((ach, i) => {
              const Icon = ach.icon;
              return (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/3 p-4"
                >
                  <Icon className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {ach.title}
                    </p>
                    <p className="text-xs text-foreground/55 mt-1 leading-relaxed">
                      {ach.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
