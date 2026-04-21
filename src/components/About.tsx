import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import artistWork from "@/assets/artist-work.jpg";

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  // Smooth out the scroll progress for a more fluid iris reveal
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Iris reveal: clip from 0% to 150% using smoothed progress
  const clipSize = useTransform(smoothProgress, [0, 1], [0, 150]);
  const clipPath = useTransform(clipSize, (v) => `circle(${v}% at 50% 50%)`);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden border-b-4 border-ink bg-ink py-20 md:py-32"
    >
      {/* Iris-revealed inner content */}
      <motion.div
        style={{ 
          clipPath, 
          WebkitClipPath: clipPath as unknown as string,
          willChange: "clip-path"
        }}
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
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <p className="font-display text-2xl leading-tight text-ink md:text-3xl">
                  Sou Estevam Pinho, <span className="bg-yellow px-2">tatuador há mais de 8 anos</span>, e a minha ligação com a arte começou muito antes da tatuagem.
                </p>
                
                <p className="font-mono-brutal text-sm leading-relaxed text-ink/90">
                  Desde sempre fui apaixonado pelo desenho e pelo grafite de rua — formas de expressão que moldaram a minha visão artística e a minha identidade.
                </p>

                <div className="border-l-4 border-accent pl-4 py-1 italic font-mono-brutal text-sm text-ink/80">
                  <p>
                    "A minha trajetória começou de forma inesperada. Ao fazer uma das minhas próprias tatuagens, percebi o atendimento frio, sem interesse na minha ideia... Ali vi alguém a trabalhar apenas pelo dinheiro — e não pelo amor à arte."
                  </p>
                </div>

                <p className="font-mono-brutal text-sm leading-relaxed text-ink/90">
                  Acredito que a tatuagem não começa na máquina — começa no primeiro contacto, na escuta. Cada cliente traz uma história, e o meu trabalho é transformar essa visão em algo ainda maior, com identidade, técnica e propósito.
                </p>

                <p className="font-mono-brutal text-sm leading-relaxed text-ink/90">
                  Com foco em <span className="font-bold">full color, preto e cinza, fine line e blackwork</span>, entrego dedicação total. No meu estúdio, o processo é uma experiência completa, onde o cliente se sente ouvido e respeitado.
                </p>

                <p className="font-display text-xl leading-tight text-ink bg-secondary/10 p-4 border-brutal-2">
                  "Não procuro ser melhor nem pior — procuro ser diferente. E é nessa diferença que deixo a minha marca."
                </p>
              </motion.div>

              {/* Stats grid */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-3 gap-3 pt-4"
              >
                {[
                  { n: "800+", l: "Obras", c: "bg-secondary text-paper" },
                  { n: "8 anos", l: "Carreira", c: "bg-yellow text-ink" },
                  { n: "Unique", l: "Estilo", c: "bg-accent text-paper" },
                ].map((s, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`border-brutal p-3 ${s.c}`}
                  >
                    <div className="font-display text-2xl md:text-3xl">{s.n}</div>
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
