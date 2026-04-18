import { motion } from "framer-motion";
import { Instagram, MapPin, Mail } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
  </svg>
);

export const Contact = () => {
  return (
    <section id="contact" className="relative border-b-4 border-ink bg-ink py-20 md:py-32">
      <div className="container grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <span className="inline-block border-brutal-2 border-yellow bg-secondary px-3 py-1 font-mono-brutal text-xs font-bold uppercase text-paper">
            [05] Localização
          </span>
          <h2 className="mt-4 font-display text-6xl text-paper md:text-7xl">
            <span style={{ color: "hsl(var(--glow-blue))" }}>VEM</span><br />
            VISITAR<br />
            <span style={{ color: "hsl(var(--glow-purple))" }}>O ATELIER.</span>
          </h2>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 border-brutal-2 border-yellow bg-ink p-4">
              <MapPin className="h-6 w-6 shrink-0 text-yellow" strokeWidth={3} />
              <div>
                <div className="font-mono-brutal text-xs font-bold uppercase text-yellow">Endereço</div>
                <div className="font-display text-xl text-paper">Rua das Flores, 88<br />4050-262 Porto, Portugal</div>
              </div>
            </div>
            <div className="flex items-start gap-4 border-brutal-2 bg-ink p-4" style={{ borderColor: "hsl(var(--glow-purple))" }}>
              <Mail className="h-6 w-6 shrink-0" strokeWidth={3} style={{ color: "hsl(var(--glow-purple))" }} />
              <div>
                <div className="font-mono-brutal text-xs font-bold uppercase" style={{ color: "hsl(var(--glow-purple))" }}>Contacto</div>
                <div className="font-display text-xl text-paper">booking@estevampinho.pt</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stylized map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="relative h-96 overflow-hidden border-brutal shadow-brutal-magenta md:h-[520px]">
            {/* Stylized map background */}
            <div className="absolute inset-0 bg-[#1a1a1a]">
              <svg className="h-full w-full" viewBox="0 0 600 500" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2a2a2a" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="600" height="500" fill="url(#grid)" />
                {/* River — Douro */}
                <path
                  d="M0 320 Q150 280 300 310 T 600 290 L600 360 Q450 380 300 360 T 0 380 Z"
                  fill="hsl(var(--glow-blue))"
                  opacity="0.55"
                />
                {/* Roads */}
                <path d="M0 200 L600 220" stroke="hsl(var(--glow-purple))" strokeWidth="3" opacity="0.7" />
                <path d="M150 0 L180 500" stroke="hsl(var(--glow-purple))" strokeWidth="3" opacity="0.5" />
                <path d="M400 0 L420 500" stroke="hsl(var(--yellow))" strokeWidth="2" opacity="0.5" />
                <path d="M0 100 L600 130" stroke="#444" strokeWidth="2" />
                {/* Building blocks */}
                {[
                  [80, 80, 60, 50], [200, 60, 80, 40], [340, 80, 50, 60], [460, 50, 70, 50],
                  [60, 160, 70, 30], [220, 150, 90, 40], [380, 170, 60, 30], [500, 160, 60, 40],
                  [100, 230, 50, 40], [240, 240, 60, 30], [360, 250, 70, 30],
                ].map(([x, y, w, h], i) => (
                  <rect key={i} x={x} y={y} width={w} height={h} fill="#2d2d2d" stroke="#444" strokeWidth="1" />
                ))}
              </svg>
              {/* Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="border-brutal bg-yellow px-3 py-2 font-display text-base uppercase shadow-brutal text-ink">
                    📍 ATELIER EP
                  </div>
                  <div className="mx-auto h-8 w-1 bg-yellow border-brutal-2" />
                </motion.div>
              </div>
            </div>
            <div className="absolute top-4 left-4 border-brutal-2 bg-ink px-3 py-1 font-mono-brutal text-[10px] font-bold uppercase" style={{ color: "hsl(var(--glow-blue))" }}>
              ▸ PORTO • 41.1496° N
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social brutal icons */}
      <div className="container mt-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="group flex items-center justify-between border-brutal bg-accent p-6 text-paper transition-transform hover:-translate-y-2 hover:shadow-brutal-yellow md:p-10"
          >
            <span className="font-display text-3xl uppercase md:text-5xl">INSTAGRAM</span>
            <Instagram className="h-12 w-12 transition-transform group-hover:rotate-12 md:h-20 md:w-20" strokeWidth={2.5} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="group flex items-center justify-between border-brutal bg-secondary p-6 text-paper transition-transform hover:-translate-y-2 hover:shadow-brutal-magenta md:p-10"
          >
            <span className="font-display text-3xl uppercase md:text-5xl">TIKTOK</span>
            <TikTokIcon className="h-12 w-12 transition-transform group-hover:rotate-12 md:h-20 md:w-20" />
          </a>
        </div>
      </div>
    </section>
  );
};
