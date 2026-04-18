import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import t1 from "@/assets/tattoo-1.jpg";
import t2 from "@/assets/tattoo-2.jpg";
import t3 from "@/assets/tattoo-3.jpg";
import t4 from "@/assets/tattoo-4.jpg";
import t5 from "@/assets/tattoo-5.jpg";

type Item = { src: string; label: string; bg: string; rotate: string; span: string };

const items: Item[] = [
  { src: t1, label: "SKETCH WORK // 01", bg: "bg-yellow", rotate: "-rotate-2", span: "md:col-span-4 md:row-span-2", dir: "left" },
  { src: t2, label: "WATERCOLOR FOX // 02", bg: "bg-secondary text-paper", rotate: "rotate-1", span: "md:col-span-4 md:row-span-2", dir: "right" },
  { src: t3, label: "EAGLE & TIME // 03", bg: "bg-accent text-paper", rotate: "-rotate-1", span: "md:col-span-4 md:row-span-2", dir: "up" },
  { src: t4, label: "MANDALA DOTS // 04", bg: "bg-secondary text-paper", rotate: "rotate-2", span: "md:col-span-4 md:row-span-2", dir: "left" },
  { src: t5, label: "BLACK ROSE // 05", bg: "bg-yellow", rotate: "rotate-1", span: "md:col-span-8 md:row-span-2", dir: "right" },
] as (Item & { dir: "left" | "right" | "up" })[];

const offsetFor = (dir: string) => {
  if (dir === "left") return { x: -60, y: 0 };
  if (dir === "right") return { x: 60, y: 0 };
  return { x: 0, y: 60 };
};

export const Portfolio = () => {
  const [active, setActive] = useState<Item | null>(null);

  return (
    <section id="portfolio" className="relative border-b-4 border-ink bg-ink py-20 md:py-32">
      <div className="container">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="inline-block border-brutal-2 border-yellow bg-accent px-3 py-1 font-mono-brutal text-xs font-bold uppercase text-paper">
              [03] Portfolio
            </span>
            <h2 className="mt-4 font-display text-6xl text-paper md:text-8xl">
              <span className="text-yellow">PEÇAS</span><br />
              <span className="text-stroke-thin" style={{ WebkitTextStroke: "2px hsl(var(--paper))" }}>
                SELECIONADAS.
              </span>
            </h2>
          </div>
          <p className="max-w-xs font-mono-brutal text-sm text-paper/70">
            ▸ Click para ampliar. Cada peça é única, desenhada especificamente para o cliente.
          </p>
        </div>

        {/* Brutalist asymmetric grid — Individual scroll reveal */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-8 md:gap-12 md:auto-rows-[300px]">
          {items.map((item, i) => {
            const { x, y } = offsetFor((item as Item & { dir: string }).dir);
            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, x, y, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  // Remove index-based delay to trigger exactly when user scrolls to them
                }}
                whileHover={{ y: -10, rotate: 0, scale: 1.02, zIndex: 5 }}
                onClick={() => setActive(item)}
                data-cursor-hover
                className={`group relative overflow-hidden border-brutal shadow-brutal bg-paper ${item.span} ${item.rotate}`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute bottom-0 left-0 border-t-4 border-r-4 border-ink ${item.bg} px-3 py-1 font-mono-brutal text-[10px] font-bold uppercase md:text-xs`}>
                  {item.label}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[9998] flex items-center justify-center bg-ink/90 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -3 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-3xl border-brutal shadow-brutal-yellow"
            >
              <img src={active.src} alt={active.label} className="max-h-[88vh] w-auto object-contain bg-paper" />
              <div className={`absolute -top-4 -left-4 border-brutal ${active.bg} px-3 py-1 font-mono-brutal text-xs font-bold uppercase`}>
                {active.label}
              </div>
              <button
                onClick={() => setActive(null)}
                aria-label="Fechar"
                className="absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center border-brutal bg-yellow text-ink hover-invert"
              >
                <X className="h-6 w-6" strokeWidth={3} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
