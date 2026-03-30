import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Play } from "lucide-react";
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
  src: string; // image path (or video poster / empty for video-only)
  title: string;
  category: Exclude<Category, "All">;
  aspect: "portrait" | "landscape" | "square";
  type?: "photo" | "video"; // defaults to "photo"
  videoSrc?: string; // path to .mp4 for video items
  objectFit?: "cover" | "contain"; // defaults to "cover"
}

// ─── Seed Data ────────────────────────────────────────────────────────────────

const SEED_PHOTOS: Photo[] = [
  // ── The Legends Club ──────────────────────────────────────────────────────
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
    title: "Legends Sciences Week ",
    category: "The Legends Club",
    aspect: "landscape",
  },
  {
    id: "lc5",
    src: "/LGENDS SIENCES WEEK.jpg",
    title: "Legends Sciences Week ",
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
    title: "Legends × Talk ",
    category: "The Legends Club",
    aspect: "landscape",
  },
  {
    id: "lc8",
    src: "/EVENT LGENDSCTALK 2.jpg",
    title: "Legends × Talk ",
    category: "The Legends Club",
    aspect: "landscape",
  },
  {
    id: "lc9",
    src: "/Event LEGENDS XTALK.jpg",
    title: "Legends × Talk ",
    category: "The Legends Club",
    aspect: "landscape",
  },
  {
    id: "lc10",
    src: "/LEGENDS XTALK .jpg",
    title: "Legends × Talk ",
    category: "The Legends Club",
    aspect: "square",
  },
  {
    id: "lc11",
    src: "/LEGNEDSXXTALK.jpg",
    title: "Legends × Talk ",
    category: "The Legends Club",
    aspect: "landscape",
  },

  // ── Internships ───────────────────────────────────────────────────────────
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

  // ── Projects ──────────────────────────────────────────────────────────────
  {
    id: "prj1",
    src: "/PFE PRESENTATION.jpg",
    title: "PFE — Final Year Project Presentation",
    category: "Projects",
    aspect: "landscape",
  },

  // ── Events ────────────────────────────────────────────────────────────────
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
];

const CATEGORIES: Category[] = [
  "All",
  "The Legends Club",
  "Internships",
  "Projects",
  "Events",
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function aspectClass(aspect: Photo["aspect"]) {
  if (aspect === "portrait") return "aspect-[3/4]";
  if (aspect === "landscape") return "aspect-[16/9]";
  return "aspect-square";
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({ photo, onClose }: { photo: Photo; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={photo.title}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative z-10 max-w-4xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute -top-4 -right-4 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            {photo.type === "video" && photo.videoSrc ? (
              <video
                src={photo.videoSrc}
                controls
                autoPlay
                poster={photo.src || undefined}
                className="w-full max-h-[75vh] object-contain bg-black"
              />
            ) : (
              <img
                src={photo.src}
                alt={photo.title}
                className={`w-full max-h-[75vh] ${photo.objectFit === "contain" ? "object-contain bg-black/20" : "object-cover"}`}
              />
            )}
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-white font-semibold text-lg">{photo.title}</p>
            <div className="flex items-center gap-2">
              {photo.type === "video" && (
                <Badge
                  variant="outline"
                  className="border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs whitespace-nowrap"
                >
                  Vidéo
                </Badge>
              )}
              <Badge
                variant="outline"
                className="border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs whitespace-nowrap"
              >
                {photo.category}
              </Badge>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Photo Card ───────────────────────────────────────────────────────────────

function PhotoCard({ photo, onClick }: { photo: Photo; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = photo.type === "video" && !!photo.videoSrc;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      whileHover={{ scale: 1.02 }}
      className={`relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10 ${aspectClass(photo.aspect)} bg-white/5`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Open ${isVideo ? "video" : "photo"}: ${photo.title}`}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      {isVideo ? (
        <video
          ref={videoRef}
          src={photo.videoSrc}
          poster={photo.src || undefined}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <img
          src={photo.src}
          alt={photo.title}
          loading="lazy"
          className={`absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105 ${
            photo.objectFit === "contain"
              ? "object-contain p-2"
              : "object-cover"
          }`}
        />
      )}

      {/* Top-right icon */}
      {isVideo ? (
        <div className="absolute top-3 right-3 z-10">
          <span className="flex items-center gap-1 rounded-full bg-purple-600/80 backdrop-blur border border-purple-400/30 px-2 py-0.5 text-[10px] font-semibold text-white">
            <Play className="h-3 w-3 fill-white" />
            Vidéo
          </span>
        </div>
      ) : (
        <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Maximize2 className="h-3.5 w-3.5 text-white" />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <p className="text-white text-sm font-semibold leading-tight">
          {photo.title}
        </p>
        <span className="mt-1.5 inline-flex self-start items-center rounded-full border border-cyan-500/40 bg-cyan-500/20 px-2.5 py-0.5 text-xs text-cyan-300">
          {photo.category}
        </span>
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
  const cols: Photo[][] = [[], [], []];
  photos.forEach((p, i) => cols[i % 3].push(p));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cols.map((col, ci) => (
        <div key={ci} className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {col.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                onClick={() => onOpen(photo)}
              />
            ))}
          </AnimatePresence>
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
      <div className="mx-auto max-w-6xl">
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
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent text-white shadow-lg shadow-cyan-500/20"
                  : "border-white/10 bg-white/5 text-foreground/60 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        {filtered.length === 0 ? (
          <div className="glass-card p-16 text-center text-foreground/30 text-sm">
            No photos in this category yet.
          </div>
        ) : (
          <MasonryGrid photos={filtered} onOpen={setLightbox} />
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox photo={lightbox} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}
