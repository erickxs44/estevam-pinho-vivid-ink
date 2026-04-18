import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import artistWork from "@/assets/artist-work.jpg";

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });
  // Iris reveal: clip from 0% to 150%
  const clipSize = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const clipPath = useTransform(clipSize, (v) => `circle(${v}% at 50% 50%)`);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden border-b-4 border-ink bg-ink py-20 md:py-32"
    >
      {/* Iris-revealed inner content */}
      <motion.div
        style={{ clipPath, WebkitClipPath: clipPath as unknown as string }}
        className="relative bg-paper"
      >
        <div className="relative py-16 md:py-24">
          {/* Decorative shapes */}
          <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rotate-12 bg-yellow border-brutal" />
          <div className="pointer-events-none absolute bottom-10 left-6 h-24 w-24 -rotate-6 bg-secondary border-brutal" />

          <div className="container relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left column — section label */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <span className="inline-block border-brutal-2 bg-ink px-3 py-1 font-mono-brutal text-xs font-bold uppercase text-yellow">
                  [02] About
                </span>
                <h2 className="mt-4 font-display text-6xl text-ink md:text-7xl">
                  THE<br />ARTIST.
                </h2>
              </div>
            </div>

            {/* Middle — image collage */}
            <div className="relative lg:col-span-4">
              <div className="relative">
                <img
                  src="/WhatsApp%20Image%202026-04-18%20at%2013.58.52.jpeg"
                  alt="Estevam Pinho"
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="border-brutal shadow-brutal-magenta w-full -rotate-2 aspect-square object-cover"
                />
                <div className="absolute -bottom-6 -right-4 border-brutal bg-yellow px-4 py-2 font-display text-xl rotate-3 text-ink">
                  EST. 2018
                </div>
                <div className="absolute -top-4 -left-4 border-brutal-2 bg-secondary px-3 py-1 font-mono-brutal text-xs font-bold uppercase -rotate-3 text-paper">
                  ▶ ARTISTA
                </div>
              </div>
            </div>

            {/* Right — zine text */}
            <div className="space-y-6 lg:col-span-5">
              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-3xl leading-tight text-ink md:text-4xl"
              >
                <span className="bg-accent px-2 text-paper">Tinta preta</span>, blocos de cor profunda
                e linhas que <span className="bg-yellow px-2 text-ink">não pedem desculpa</span>.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono-brutal text-base leading-relaxed text-ink/80"
              >
                Sou o Estevam — tatuador radicado no Porto há mais de 6 anos. Trabalho na
                interseção entre o blackwork tradicional e uma estética dark, gráfica
                e editorial. Cada peça é desenhada de raiz para quem a vai carregar.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono-brutal text-base leading-relaxed text-ink/80"
              >
                O meu estilo é direto, gráfico, e sem filtros. Penso cada tatuagem como
                um cartaz brutalista impresso para sempre na pele.
              </motion.p>

              {/* Stats grid */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-3 gap-3 pt-4"
              >
                {[
                  { n: "600+", l: "Peças", c: "bg-secondary text-paper" },
                  { n: "6 anos", l: "Atelier", c: "bg-yellow text-ink" },
                  { n: "PT", l: "Base", c: "bg-accent text-paper" },
                ].map((s, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`border-brutal p-3 ${s.c}`}
                  >
                    <div className="font-display text-3xl md:text-4xl">{s.n}</div>
                    <div className="font-mono-brutal text-[10px] font-bold uppercase">
                      {s.l}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
