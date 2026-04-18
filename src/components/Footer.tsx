export const Footer = () => {
  return (
    <footer className="bg-ink py-8">
      <div className="container">
        {/* Marquee */}
        <div className="overflow-hidden border-brutal-2 border-yellow bg-yellow py-2 mb-6">
          <div className="flex whitespace-nowrap animate-marquee-reverse">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="mx-6 font-display text-xl uppercase text-ink">
                INK FOREVER ✦ NO REGRETS ✦ ESTEVAM PINHO ✦ PORTO 2024 ✦
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <span className="font-mono-brutal text-xs uppercase text-paper">
            © 2024 Estevam Pinho — All rights reserved.
          </span>
          <span className="font-mono-brutal text-xs uppercase text-paper/60">
            Made with █ ink in Portugal
          </span>
        </div>
      </div>
    </footer>
  );
};
