import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Trigger letras quando a "explosão" da bola acontece (~ 1.6s no loop do vídeo)
const EXPLOSION_TRIGGER_SECONDS = 1.6;

export const Hero = () => {
  const [hover, setHover] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => {
      const t = v.currentTime % (v.duration || 999);
      if (t >= EXPLOSION_TRIGGER_SECONDS && !revealed) {
        setRevealed(true);
      }
    };
    v.addEventListener("timeupdate", onTime);
    // fallback caso timeupdate não dispare
    const fallback = window.setTimeout(() => setRevealed(true), 2200);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      window.clearTimeout(fallback);
    };
  }, [revealed]);

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden border-b-4 border-ink">
      {/* Background video with parallax */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/hero-sphere.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>
      
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-ink/60 mix-blend-multiply" />
      <div
        className="absolute inset-0 opacity-50 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, hsl(var(--cyan)/.5), transparent 45%), radial-gradient(circle at 80% 20%, hsl(var(--magenta)/.5), transparent 45%)",
        }}
      />

      {/* Top brutalist bar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between border-b-4 border-ink bg-yellow px-4 py-2 md:px-8"
      >
        <span className="font-display text-xl md:text-2xl text-ink">EP/01</span>
        <nav className="hidden gap-6 font-mono-brutal text-sm font-bold uppercase md:flex">
          <a href="#about" className="hover-invert px-2 py-1 text-ink">Sobre</a>
          <a href="#portfolio" className="hover-invert px-2 py-1 text-ink">Portfolio</a>
          <a href="#booking" className="hover-invert px-2 py-1 text-ink">Booking</a>
          <a href="#contact" className="hover-invert px-2 py-1 text-ink">Contacto</a>
        </nav>
        <span className="font-mono-brutal text-xs font-bold uppercase text-ink">PT • EST. 2018</span>
      </motion.div>

      {/* Main title */}
      <div className="relative z-10 flex min-h-screen flex-col items-start justify-center px-4 pt-20 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05, rotate: -2 }}
          className="mb-4 inline-block border-brutal bg-secondary px-3 py-1 font-mono-brutal text-xs font-bold uppercase text-paper shadow-brutal md:text-sm cursor-default"
        >
          ◆ Tattoo Studio • Porto, Portugal
        </motion.div>

        <h1
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          data-cursor-hover
          className={`font-display text-[22vw] leading-[0.82] md:text-[17vw] ${revealed ? "animate-glow-pulse" : ""}`}
          style={{
            color: hover ? "hsl(var(--accent))" : "transparent",
            WebkitTextStroke: hover ? "0" : "4px hsl(var(--paper))",
            transition: "color 0.4s cubic-bezier(0.16, 1, 0.3, 1), -webkit-text-stroke 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {["ESTEVAM", "PINHO"].map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%", opacity: 0, scale: 0.98 }}
                animate={
                  revealed
                    ? { y: 0, opacity: 1, scale: 1 }
                    : { y: "110%", opacity: 0, scale: 0.98 }
                }
                transition={{
                  duration: 1.4,
                  delay: i * 0.15 + 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={revealed ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.92, y: 10 }}
          transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex max-w-2xl flex-col gap-3"
        >
          <p className="font-mono-brutal text-sm font-bold uppercase text-paper md:text-base">
            ▸ Blackwork / Neo-Tradicional / Dark Color ◂
          </p>
          <a
            href="#booking"
            className="btn-tactile inline-block w-fit border-brutal bg-accent px-6 py-3 font-display text-lg uppercase text-paper shadow-brutal-yellow md:text-xl"
          >
            Marcar Sessão →
          </a>
        </motion.div>
      </div>

      {/* Bottom marquee ticker */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden border-t-4 border-ink bg-accent"
      >
        <div className="flex whitespace-nowrap py-3 animate-marquee">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-8 font-display text-2xl uppercase text-paper md:text-3xl">
              TATTOO ARTIST <span className="mx-4 text-yellow">✦</span> PORTUGAL <span className="mx-4 text-yellow">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
