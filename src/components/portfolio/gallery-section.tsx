import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// ─── Types ────────────────────────────────────────────────────────────────────

type Category =
  | "All"
  | "The Legends Club"
  | "Internships"
  | "Projects"
  | "Events";

interface Photo {
  id: string;
  src: string;
  title: string;
  category: Exclude<Category, "All">;
  aspect: "portrait" | "landscape" | "square";
  objectFit?: "cover" | "contain";
}

// ─── Seed Data ────────────────────────────────────────────────────────────────

const SEED_PHOTOS: Photo[] = [
  {
    id: "lc1",
    src: "/the legends .jpg",
    title: "The Legends Club — Team Portrait",
    category: "The Legends Club",
    aspect: "landscape",
  },
  {
    id: "lc2",
    src: "/the legends 2.jpg",
    title: "The Legends Club — Group Session",
    category: "The Legends Club",
    aspect: "landscape",
  },
  {
    id: "lc3",
    src: "/the legends 4.jpg",
    title: "The Legends Club — Event Day",
    category: "The Legends Club",
    aspect: "portrait",
  },
  {
    id: "lc4",
    src: "/LEGENDS SIENCES WEEK.jpg",
    title: "Legends Sciences Week",
    category: "The Legends Club",
    aspect: "landscape",
  },
  {
    id: "lc5",
    src: "/LGENDS SIENCES WEEK.jpg",
    title: "Legends Sciences Week",
    category: "The Legends Club",
    aspect: "landscape",
  },
  {
    id: "lc6",
    src: "/LGENDS SIENCESWEEK.jpg",
    title: "Legends Sciences Week — Highlights",
    category: "The Legends Club",
    aspect: "square",
  },
  {
    id: "lc7",
    src: "/EVENT LEGENDSXTALK.jpg",
    title: "Legends × Talk",
    category: "The Legends Club",
    aspect: "landscape",
  },
  {
    id: "lc8",
    src: "/EVENT LGENDSCTALK 2.jpg",
    title: "Legends × Talk",
    category: "The Legends Club",
    aspect: "landscape",
  },
  {
    id: "lc9",
    src: "/Event LEGENDS XTALK.jpg",
    title: "Legends × Talk",
    category: "The Legends Club",
    aspect: "landscape",
  },
  {
    id: "lc10",
    src: "/LEGENDS XTALK .jpg",
    title: "Legends × Talk",
    category: "The Legends Club",
    aspect: "square",
  },
  {
    id: "lc11",
    src: "/LEGNEDSXXTALK.jpg",
    title: "Legends × Talk",
    category: "The Legends Club",
    aspect: "landscape",
  },
  {
    id: "int1",
    src: "/INTERSHIP LEAR .jpg",
    title: "Internship — Lear Corporation",
    category: "Internships",
    aspect: "landscape",
  },
  {
    id: "int3",
    src: "/intership lear .png",
    title: "Lear Corporation — Internship",
    category: "Internships",
    aspect: "portrait",
    objectFit: "contain",
  },
  {
    id: "prj1",
    src: "/PFE PRESENTATION.jpg",
    title: "PFE — Final Year Project Presentation",
    category: "Projects",
    aspect: "landscape",
  },
  {
    id: "ev1",
    src: "/ficat-2024.jpg",
    title: "FICAT 2024 — Award Ceremony",
    category: "Events",
    aspect: "portrait",
  },
  {
    id: "ev2",
    src: "/ficat..jpg",
    title: "FICAT 2024 — Group Photo",
    category: "Events",
    aspect: "landscape",
  },
  {
    id: "ev3",
    src: "/FICAT 3.JPG",
    title: "FICAT 2024 — Team Celebration",
    category: "Events",
    aspect: "landscape",
  },
  {
    id: "ev4",
    src: "/FICAT CETFIFICATS.jpg",
    title: "FICAT 2024 — Certificate Presentation",
    category: "Events",
    aspect: "landscape",
  },
  {
    id: "ev5",
    src: "/FICAT slogan.jpg",
    title: "FICAT 2024 — Official Slogan",
    category: "Events",
    aspect: "square",
  },
  {
    id: "ev6",
    src: "/PHOTOS FICAT.jpg",
    title: "FICAT 2024 — Event Highlights",
    category: "Events",
    aspect: "landscape",
  },
  {
    id: "gitex1",
    src: "/GItex photo.jpeg",
    title: "GITEX EVENT 2026",
    category: "Events",
    aspect: "landscape",
  },
];

const CATEGORIES: Category[] = [
  "All",
  "The Legends Club",
  "Internships",
  "Projects",
  "Events",
];

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

// ─── Lightbox with Navigation ─────────────────────────────────────────────────

function Lightbox({
  photo,
  photos,
  onClose,
  onNavigate,
}: {
  photo: Photo;
  photos: Photo[];
  onClose: () => void;
  onNavigate: (photo: Photo) => void;
}) {
  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const goNext = useCallback(() => {
    const next = (currentIndex + 1) % photos.length;
    onNavigate(photos[next]);
  }, [currentIndex, photos, onNavigate]);

  const goPrev = useCallback(() => {
    const prev = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(photos[prev]);
  }, [currentIndex, photos, onNavigate]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, goNext, goPrev]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 z-30 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-200 backdrop-blur-md"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-5 z-30 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
        <span className="text-white/80 text-sm font-medium">
          {currentIndex + 1} / {photos.length}
        </span>
      </div>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Previous photo"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-200 backdrop-blur-md"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Next photo"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-200 backdrop-blur-md"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Image */}
      <motion.div
        key={photo.id}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 max-w-5xl w-full mx-4 md:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/60">
          <img
            src={photo.src}
            alt={photo.title}
            className={`w-full max-h-[78vh] ${
              photo.objectFit === "contain"
                ? "object-contain bg-black/30"
                : "object-cover"
            }`}
          />
        </div>

        {/* Info bar */}
        <div className="mt-4 flex items-center justify-between gap-4 px-1">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 flex items-center justify-center border border-cyan-500/20">
              <Camera className="h-4 w-4 text-cyan-300" />
            </div>
            <p className="text-white font-semibold text-base md:text-lg">
              {photo.title}
            </p>
          </div>
          <Badge
            variant="outline"
            className="border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs whitespace-nowrap"
          >
            {photo.category}
          </Badge>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Photo Card ───────────────────────────────────────────────────────────────

function PhotoCard({
  photo,
  onClick,
  index,
}: {
  photo: Photo;
  onClick: () => void;
  index: number;
}) {
  const { ref, isInView } = useInView(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: (index % 6) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      className="group cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Open photo: ${photo.title}`}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div
        className={`relative overflow-hidden rounded-2xl ${photo.aspect === "portrait" ? "aspect-[3/4]" : photo.aspect === "square" ? "aspect-square" : "aspect-[16/9]"} bg-white/[0.03] border border-white/[0.06] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/20 transition-all duration-500`}
      >
        {/* Image */}
        <img
          src={photo.src}
          alt={photo.title}
          loading="lazy"
          className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out group-hover:scale-110 ${
            photo.objectFit === "contain"
              ? "object-contain p-3"
              : "object-cover"
          }`}
        />

        {/* Dark gradient overlay (always visible at bottom, stronger on hover) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Top-right expand icon */}
        <div className="absolute top-3 right-3 z-10 w-9 h-9 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-400 shadow-lg">
          <svg
            className="h-4 w-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        </div>

        {/* Bottom info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <p className="text-white text-sm md:text-base font-bold leading-tight tracking-tight drop-shadow-lg">
            {photo.title}
          </p>
          <div className="mt-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/15 px-3 py-1 text-[11px] font-semibold text-cyan-200 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {photo.category}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Masonry Grid ─────────────────────────────────────────────────────────────

function MasonryGrid({
  photos,
  onOpen,
}: {
  photos: Photo[];
  onOpen: (p: Photo) => void;
}) {
  const cols: Photo[][] = [[], [], [], []];
  photos.forEach((p, i) => cols[i % 4].push(p));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {cols.map((col, ci) => (
        <div key={ci} className="flex flex-col gap-5">
          {col.map((photo, idx) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              onClick={() => onOpen(photo)}
              index={ci * 10 + idx}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function GallerySection() {
  const [photos] = useState<Photo[]>(SEED_PHOTOS);
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  const filtered =
    activeFilter === "All"
      ? photos
      : photos.filter((p) => p.category === activeFilter);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section id="gallery" className="section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge
            variant="outline"
            className="mb-4 border-cyan-500/30 text-cyan-300"
          >
            Galerie & Événements
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Moments & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="text-foreground/55 max-w-xl mx-auto text-sm leading-relaxed">
            A visual record of internships, club events, projects, and forums
            that shaped my professional journey.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2.5 mb-10"
        >
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? photos.length
                : photos.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`group/btn relative px-5 py-2.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent text-white shadow-lg shadow-cyan-500/25"
                    : "border-white/10 bg-white/[0.04] text-foreground/50 hover:border-white/20 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`ml-2 text-[10px] ${
                    activeFilter === cat
                      ? "text-white/60"
                      : "text-foreground/30 group-hover/btn:text-foreground/50"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Masonry grid */}
        {filtered.length === 0 ? (
          <div className="glass-card p-16 text-center text-foreground/30 text-sm">
            No photos in this category yet.
          </div>
        ) : (
          <MasonryGrid photos={filtered} onOpen={setLightbox} />
        )}
      </div>

      {/* Lightbox with navigation */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            photo={lightbox}
            photos={filtered}
            onClose={() => setLightbox(null)}
            onNavigate={setLightbox}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
