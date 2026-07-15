import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  ArrowUpRight,
  Mic,
  Trophy,
  Flame,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Event {
  title: string;
  organizer: string;
  location: string;
  date: string;
  role: string;
  description: string;
  tags: string[];
  type: "conference" | "hackathon" | "summit" | "workshop";
  url?: string;
  certUrl?: string;
  logo?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const events: Event[] = [
  {
    title:
      "FutureWorks Leadership Series: Conversations with Senior WBG Leaders",
    organizer:
      "World Bank Group Youth Summit 2026 (#FutureWorks — Designing Jobs for the Digital Age)",
    location: "Washington, D.C. & Online",
    date: "June 11–12, 2026",
    role: "Delegate",
    description:
      "Fireside chat series featuring conversations between senior World Bank Group leaders and the next generation on jobs, economic opportunity, AI, innovation, and the future of work. Hear directly from: Ajay Banga (President, WBG), Anna Bjerde (MD of Operations, WBG), Makhtar Diop (MD, IFC), Paschal Donohoe (MD & Chief Knowledge Officer, WBG), Indermit Gill (Chief Economist, WBG).",
    tags: [
      "World Bank Group",
      "Future of Work",
      "AI & Innovation",
      "Economic Development",
      "Leadership",
    ],
    type: "summit",
    url: "https://www.worldbank.org/en/events/2026/06/11/youth-summit-2026-future-works-designing-jobs-for-the-digital-age",
    certUrl: "/world bank certificats .pdf",
    logo: "/wbg_youth_summit_logo.jpeg",
  },
  {
    title:
      "CITX.C 2026 — International Innovation Competition",
    organizer:
      "Fondation UTT, in partnership with Chaire Connected Innovation, Université de Technologie de Troyes, Université Ibn Zohr & Đại học Bách khoa Đà Nẵng — held in synergy with IEEE-ICCITX 2026",
    location: "International (Remote submission)",
    date: "Final: April 1–3, 2026",
    role: "Candidate",
    description:
      "Submitted FabConnect, an on-demand 3D printing marketplace platform, as an innovation proposal to CITX.C 2026 — an international competition addressing AI challenges and technological disruptions shaping Industry X.0. The proposal highlighted how AI-driven cost and delay estimation combined with a connected marketplace model can accelerate access to on-demand manufacturing, competing among academic and professional candidates from around the world under the guidance of international experts.",
    tags: [
      "Innovation",
      "Artificial Intelligence",
      "Industry X.0",
      "3D Printing",
      "On-Demand Manufacturing",
      "International Competition",
    ],
    type: "hackathon",
    logo: "/ieee logo.jpeg",
    certUrl: "/ID_33_F.A.pdf",
  },
  {
    title: "KhettaraViz — Visualisation du déclin des khettaras du Drâa-Tafilalet",
    organizer: "EHYN UNESCO 2026 (WBSRCE — Water Bodies, Societies Resilience and Cultural Evolution)",
    location: "Hackathon (Remote)",
    date: "2026",
    role: "Participant",
    description:
      "MVP open-access développé dans le cadre du EHYN Global Hackathon 2026 (UNESCO Ecohydrology Youth Network), visant à documenter et visualiser le déclin des khettaras — systèmes hydrauliques traditionnels amazighs — dans la région du Drâa-Tafilalet, sud du Maroc (de plus de 570 systèmes recensés à environ 150 encore fonctionnels).",
    tags: [
      "Water Governance",
      "Khettaras",
      "Indigenous Knowledge",
      "GIS & Mapping",
      "Data Visualization",
      "Climate Resilience",
      "Open Access",
    ],
    type: "hackathon",
    logo: "/ecohydrology_youth_network_logo.jpeg",
  },
];

// ─── Config ───────────────────────────────────────────────────────────────────

const typeConfig: Record<
  string,
  {
    icon: LucideIcon;
    label: string;
    color: string;
    badge: string;
    glow: string;
  }
> = {
  conference: {
    icon: Mic,
    label: "Conference",
    color: "text-rose-400",
    badge:
      "border-rose-500/30 bg-rose-500/10 text-rose-300",
    glow: "hover:shadow-rose-500/10",
  },
  hackathon: {
    icon: Trophy,
    label: "Hackathon",
    color: "text-orange-400",
    badge:
      "border-orange-500/30 bg-orange-500/10 text-orange-300",
    glow: "hover:shadow-orange-500/10",
  },
  summit: {
    icon: Flame,
    label: "Summit",
    color: "text-fuchsia-400",
    badge:
      "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300",
    glow: "hover:shadow-fuchsia-500/10",
  },
  workshop: {
    icon: Mic,
    label: "Workshop",
    color: "text-sky-400",
    badge:
      "border-sky-500/30 bg-sky-500/10 text-sky-300",
    glow: "hover:shadow-sky-500/10",
  },
};

const roleColors: Record<string, string> = {
  Delegate: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  Participant: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  "Selected Representative":
    "border-amber-500/30 bg-amber-500/10 text-amber-300",
  Speaker: "border-violet-500/30 bg-violet-500/10 text-violet-300",
};

// ─── Intersection Observer Hook ───────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

// ─── Event Card ───────────────────────────────────────────────────────────────

function EventCard({ event, index }: { event: Event; index: number }) {
  const { ref, isInView } = useInView(0.1);
  const config = typeConfig[event.type] || typeConfig.conference;
  const Icon = config.icon;
  const roleColor =
    roleColors[event.role] || "border-white/20 bg-white/5 text-white/70";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${config.glow} hover:border-white/[0.12]`}
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${event.type === "conference"
          ? "from-rose-500 to-pink-600"
          : event.type === "hackathon"
            ? "from-orange-500 to-red-600"
            : event.type === "summit"
              ? "from-fuchsia-500 to-purple-600"
              : "from-sky-500 to-blue-600"
          } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="p-6 md:p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/[0.05] border border-white/[0.08] transition-transform duration-300 group-hover:scale-110 overflow-hidden`}
          >
            {event.logo ? (
              <img
                src={event.logo}
                alt={`${event.organizer} logo`}
                className="w-full h-full object-cover"
              />
            ) : (
              <Icon className={`h-5 w-5 ${config.color}`} />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border ${config.badge}`}
              >
                {config.label}
              </span>
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border ${roleColor}`}
              >
                {event.role}
              </span>
            </div>
            <h3 className="text-base md:text-lg font-bold text-white leading-snug">
              {event.title}
            </h3>
          </div>
        </div>

        {/* Organizer */}
        <p className="text-xs font-medium text-fuchsia-300/80 mb-3">
          {event.organizer}
        </p>

        {/* Location & Date */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-foreground/45">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-fuchsia-400/60" />
            {event.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-fuchsia-400/60" />
            {event.date}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-foreground/55 leading-relaxed mb-5 flex-1">
          {event.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-foreground/55 transition-colors duration-200 hover:text-white hover:border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-2">
          {event.url && (
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/40 hover:text-white transition-colors duration-200"
            >
              Learn More
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          {event.certUrl && (
            <a
              href={event.certUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/40 hover:text-white transition-colors duration-200 ml-auto"
            >
              Certificate
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function ConferencesSection() {
  return (
    <section id="conferences" className="section-padding">
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
            className="mb-4 border-fuchsia-500/30 text-fuchsia-300"
          >
            Conferences & Hackathons
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Events & <span className="gradient-text">Engagements</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto text-sm leading-relaxed">
            Participations in high-impact summits, leadership series, and
            innovation events shaping the future of industry and technology.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          {events.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
