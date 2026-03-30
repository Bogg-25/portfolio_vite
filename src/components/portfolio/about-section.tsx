import { motion } from "framer-motion";
import { User, Target, Globe, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const traits = [
  {
    icon: Target,
    label: "Rigorous",
    desc: "Strong attention to standards and detail in quality processes",
  },
  {
    icon: Zap,
    label: "Proactive",
    desc: "Anticipates challenges and drives solutions before they escalate",
  },
  {
    icon: User,
    label: "Collaborative",
    desc: "Thrives in cross-functional teams, fostering open communication",
  },
  {
    icon: Globe,
    label: "Multilingual",
    desc: "Arabic, Tamazight, French, English, and basic German",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-black/20">
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
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Profile Behind the{" "}
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-base leading-relaxed">
            A dual-discipline engineer bridging industrial management and
            digital innovation, with a passion for quality systems and
            data-driven transformation.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 space-y-6"
          >
            <h3 className="text-xl font-semibold text-white">
              Professional Summary
            </h3>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                I'm a Master's student in Management of Innovation and
                Technology at{" "}
                <span className="text-cyan-300 font-medium">ENSAM Rabat</span>,
                with a background in Industrial Engineering from FST Tangier. I
                am passionate about combining technology, innovation, and
                leadership to create impactful solutions.
              </p>
              <p>
                At{" "}
                <span className="text-cyan-300 font-medium">
                  Lear Corporation TRIM 1
                </span>{" "}
                (TFZ Tangier), I contributed to standardizing inspection
                protocols under{" "}
                <span className="text-blue-300 font-medium">
                  IATF 16949 &amp; ISO 9001
                </span>
                , built a web-based non-conformity tracker, and designed a Power
                BI KPI dashboard - all from a single two-month internship.
              </p>
              <p>
                My approach combines the precision of industrial quality
                management with modern digital tools: Python, Power BI,
                HTML/CSS/JS, and emerging domains like AI and Data Mining.
              </p>
            </div>

            {/* Languages */}
            <div>
              <h4 className="text-sm font-semibold text-foreground/40 uppercase tracking-widest mb-3">
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { lang: "Arabic", level: "Native" },
                  { lang: "Tamazight", level: "Native" },
                  { lang: "French", level: "B2" },
                  { lang: "English", level: "B2" },
                  { lang: "German", level: "A1" },
                ].map((l) => (
                  <span
                    key={l.lang}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/70"
                  >
                    <span className="font-medium text-white">{l.lang}</span>
                    <span className="text-foreground/40"> | </span>
                    {l.level}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Traits grid */}
          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait, i) => {
              const Icon = trait.icon;
              return (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card p-5 space-y-3 hover:border-cyan-500/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {trait.label}
                    </p>
                    <p className="text-xs text-foreground/55 leading-relaxed mt-1">
                      {trait.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
