import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero.png";
import { FALogo } from "./navbar";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#f0f0f0] flex flex-col md:flex-row pt-16 md:pt-0"
    >
      {/* LEFT PANEL (Light Grey) */}
      <div className="relative flex-1 bg-[#f0f0f0] flex flex-col justify-between p-8 md:p-16 lg:p-24 z-10">
        {/* Top Monogram */}
        <div className="hidden md:block">
          <FALogo className="w-10 h-10 text-black" strokeWidth={10} />
        </div>

        {/* Center Text Details */}
        <div className="my-auto space-y-6 max-w-md pt-12 md:pt-0">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.2em] font-extrabold text-black"
          >
            Hi, I am
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight"
          >
            Fariss Achraf
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-bold text-neutral-500 tracking-wider uppercase"
          >
            Innovation & Technology Management Student
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-sm"
          >
            I'm an aspiring engineer-manager passionate about Industry 4.0,
            blending Lean Manufacturing, digitalization, and AI to solve real
            industrial challenges and turn continuous improvement ideas into
            measurable impact.
          </motion.p>

          {/* Social Icons (Embossed style) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4 pt-4"
          >
            {[
              {
                icon: Mail,
                href: "mailto:farissachraf@hotmail.com",
                label: "Email",
              },
              {
                icon: Github,
                href: "https://github.com/Bogg-25",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/achraffariss",
                label: "LinkedIn",
              },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-[#e0e0e0] flex items-center justify-center text-black border border-neutral-300/30 shadow-[3px_3px_6px_rgba(0,0,0,0.1),_-3px_-3px_6px_rgba(255,255,255,0.9)] hover:shadow-inner hover:bg-[#dcdcdc] transition-all"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* RIGHT PANEL (Black - Slanted on Desktop) */}
      <div
        className="relative md:absolute inset-y-0 right-0 w-full md:w-[60%] bg-[#0a0a0a] z-0 md:z-10
        flex flex-col justify-between p-8 md:p-16 lg:p-24 min-h-[450px] md:min-h-screen
        [clip-path:none] md:[clip-path:polygon(15%_0,_100%_0,_100%_100%,_0_100%)]"
      >
        {/* Local Nav Header Layered Over Black */}
        <div className="hidden md:flex items-center justify-between w-full relative z-20">
          <div className="flex items-center gap-8 pl-12">
            <button
              onClick={() => scrollToSection("about")}
              className="text-xs uppercase tracking-widest font-bold text-white/70 hover:text-white transition-colors"
            >
              About me
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-xs uppercase tracking-widest font-bold text-white/70 hover:text-white transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-xs uppercase tracking-widest font-bold text-white/70 hover:text-white transition-colors"
            >
              Portfolio
            </button>
          </div>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-[10px] tracking-widest font-bold text-black bg-white hover:bg-neutral-200 px-6 py-2.5 rounded-full transition-all uppercase"
          >
            CONTACT ME
          </button>
        </div>

        {/* Photo Container */}
        <div className="flex-1 flex items-center justify-center relative md:-left-4 mt-12 md:mt-0">
          <div className="relative max-w-xl w-full h-[500px] md:h-[780px]">
            <motion.img
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              src={heroImage}
              alt="Fariss Achraf"
              className="w-full h-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
