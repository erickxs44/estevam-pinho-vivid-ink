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
          <h2 className="mt-4 font-display text-5xl leading-tight text-paper md:text-7xl">
            <span style={{ color: "hsl(var(--glow-blue))" }}>VEM</span><br />
            VISITAR<br />
            <span style={{ color: "hsl(var(--glow-purple))" }}>O ATELIER.</span>
          </h2>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 border-brutal-2 border-yellow bg-ink p-4">
              <MapPin className="h-6 w-6 shrink-0 text-yellow" strokeWidth={3} />
              <div>
                <div className="font-mono-brutal text-xs font-bold uppercase text-yellow">Endereço</div>
                <div className="font-display text-xl text-paper">Estr. Serra da Mira 38A<br />2650-388 Amadora, Portugal</div>
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

        {/* Real Google Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="relative h-96 overflow-hidden border-brutal shadow-brutal-magenta md:h-[520px] grayscale contrast-125 invert brightness-75">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.45561113063!2d-9.2311198!3d38.7657731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecc885f8188fb%3A0xed5668b0c8973b4!2sEstr.%20Serra%20da%20Mira%2038A%2C%202650-388%20Amadora%2C%20Portugal!5e0!3m2!1spt!2spt!4v1713460000000!5m2!1spt!2spt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="pointer-events-none absolute inset-0 border-brutal-4 border-ink/20" />
            <div className="absolute top-4 left-4 border-brutal-2 bg-ink px-3 py-1 font-mono-brutal text-[10px] font-bold uppercase" style={{ color: "hsl(var(--glow-blue))" }}>
              ▸ LOCALIZAÇÃO • AMADORA
            </div>
            <a 
              href="https://maps.app.goo.gl/vwY1ysti67JzjrLv8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 border-brutal bg-yellow px-4 py-2 font-display text-sm uppercase text-ink hover:bg-white transition-colors"
            >
              Abrir no Maps ↗
            </a>
          </div>
        </motion.div>
      </div>

      {/* Social brutal icons */}
      <div className="container mt-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
