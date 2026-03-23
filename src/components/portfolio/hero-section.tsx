import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero.png";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen hero-bg flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/3 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,179,179,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,179,179,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl w-full px-6 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-12 glow"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none rounded-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 rounded-full border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-cyan-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Available for Internship And Work
              </Badge>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
                >
                  Fariss <span className="gradient-text">Achraf</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg font-medium text-cyan-300 tracking-wide"
                >
                  Master's Student | Innovation & Technology Management
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="max-w-xl text-base leading-relaxed text-foreground/70"
                >
                  Industrial Innovation, Quality Improvement & Digital
                  Transformation Enthusiast. A rigorous and proactive engineer
                  bridging the gap between industrial management and
                  cutting-edge digital tools.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { value: "ISO 9001", label: "Auditor Certified" },
                  { value: "ENSAM", label: "Rabat Graduate" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass rounded-2xl p-4 text-center"
                  >
                    <p className="text-sm font-bold gradient-text">
                      {stat.value}
                    </p>
                    <p className="text-xs text-foreground/50 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("experience")}
                  className="gap-2"
                >
                  View Experience
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open("tel:+212651120806")}
                  className="gap-2"
                >
                  <Phone className="h-4 w-4" />
                  +212 651 120 806
                </Button>
              </motion.div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -inset-10 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-3xl rounded-full" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 w-full max-w-sm">
                <div className="flex flex-col items-center text-center space-y-5">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl scale-150" />
                    <img
                      src={heroImage}
                      alt="Fariss Achraf - Professional photo"
                      className="relative w-36 h-36 rounded-full border-2 border-cyan-500/40 object-cover shadow-[0_25px_60px_rgba(34,179,179,0.25)]"
                    />
                    <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-background" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-white">
                      Fariss Achraf
                    </h2>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400/70 mt-1">
                      ENSAM Rabat | Morocco
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-sm leading-relaxed text-foreground/60"
                  >
                    Driving industrial excellence through innovation, quality
                    standards, and data-driven insights.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full space-y-2"
                  >
                    {[
                      {
                        label: "Email",
                        value: "Achraf_fariss@um5.ac.ma",
                        href: "mailto:Achraf_fariss@um5.ac.ma",
                      },
                      {
                        label: "Phone",
                        value: "+212 651 120 806",
                        href: "tel:+212651120806",
                      },
                      {
                        label: "Location",
                        value: "Morocco",
                        href: "https://maps.google.com/?q=Morocco",
                      },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center justify-between w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-left hover:bg-white/10 hover:border-white/20 transition-all group"
                      >
                        <div>
                          <p className="text-xs text-foreground/40 font-medium">
                            {item.label}
                          </p>
                          <p className="text-sm text-foreground/80">
                            {item.value}
                          </p>
                        </div>
                        <ArrowUpRight className="h-3.5 w-3.5 text-foreground/30 group-hover:text-cyan-400 transition-colors" />
                      </a>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-foreground/30 hover:text-cyan-400 transition-colors group"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
