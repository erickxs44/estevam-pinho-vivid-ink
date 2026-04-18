import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Upload } from "lucide-react";
import { toast } from "sonner";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Nome demasiado curto").max(100),
  contact: z.string().trim().min(3, "Contacto inválido").max(100),
  idea: z.string().trim().min(10, "Descreve a tua ideia (mín. 10 caracteres)").max(1000),
  location: z.string().trim().min(2).max(100),
  size: z.string().trim().min(1).max(20),
  style: z.enum(["color", "blackwork", "ambos"]),
});

export const Booking = () => {
  const [style, setStyle] = useState<"color" | "blackwork" | "ambos">("color");
  const [fileName, setFileName] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const result = bookingSchema.safeParse({
      name: data.get("name"),
      contact: data.get("contact"),
      idea: data.get("idea"),
      location: data.get("location"),
      size: data.get("size"),
      style,
    });
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Verifica os campos.");
      return;
    }
    toast.success("Pedido enviado! Resposta em 24-48h.", {
      style: { background: "hsl(var(--secondary))", color: "hsl(var(--paper))", border: "3px solid #000" },
    });
    (e.target as HTMLFormElement).reset();
    setFileName("");
  };

  const inputClass =
    "w-full border-brutal bg-paper px-4 py-3 font-mono-brutal text-base text-ink placeholder:text-ink/40 focus:bg-yellow focus:outline-none focus:shadow-brutal transition-shadow";
  const labelClass = "mb-2 block font-mono-brutal text-xs font-bold uppercase text-ink";

  return (
    <section id="booking" className="relative overflow-hidden border-b-4 border-ink py-20 md:py-32 noisy-gradient-cmy">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block border-brutal-2 bg-yellow px-3 py-1 font-mono-brutal text-xs font-bold uppercase">
            [04] Booking
          </span>
          <h2 className="mt-4 font-display text-[11.5vw] sm:text-5xl text-paper md:text-8xl leading-tight">
            ORÇAMENTO<br />
            <span className="bg-accent px-3 text-paper">PERSONALIZADO</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-mono-brutal text-sm text-paper">
            ▸ Preenche todos os campos. Resposta em 24-48h via Instagram ou WhatsApp.
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl border-brutal bg-paper p-6 shadow-brutal-yellow md:p-10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <label className={labelClass} htmlFor="name">Nome Completo *</label>
              <input id="name" name="name" required maxLength={100} className={inputClass} placeholder="João Silva" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <label className={labelClass} htmlFor="contact">Instagram / WhatsApp *</label>
              <input id="contact" name="contact" required maxLength={100} className={inputClass} placeholder="@username / +351 ..." />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5"
          >
            <label className={labelClass} htmlFor="idea">Ideia da Tatuagem *</label>
            <textarea
              id="idea"
              name="idea"
              required
              maxLength={1000}
              rows={5}
              className={inputClass}
              placeholder="Descreve em detalhe a tua ideia, referências, simbolismo..."
            />
          </motion.div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <label className={labelClass} htmlFor="location">Local do Corpo *</label>
              <input id="location" name="location" required maxLength={100} className={inputClass} placeholder="Antebraço, costas..." />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <label className={labelClass} htmlFor="size">Tamanho aproximado (cm) *</label>
              <input id="size" name="size" required maxLength={20} className={inputClass} placeholder="ex: 15x20" />
            </motion.div>
          </div>

          {/* Style toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5"
          >
            <label className={labelClass}>Preferência de cores *</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {([
                { v: "color", l: "COLORIDO", c: "bg-accent text-paper" },
                { v: "blackwork", l: "BLACKWORK", c: "bg-ink text-yellow" },
                { v: "ambos", l: "AMBOS", c: "bg-secondary text-paper" },
              ] as const).map((opt) => (
                <button
                  key={opt.v}
                  type="button"
                  onClick={() => setStyle(opt.v)}
                  className={`border-brutal px-3 py-3 font-display text-base uppercase transition-transform hover:-translate-y-1 ${
                    style === opt.v ? `${opt.c} shadow-brutal` : "bg-paper text-ink"
                  }`}
                >
                  {opt.l}
                </button>
              ))}
            </div>
          </motion.div>

          {/* File upload */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5"
          >
            <label className={labelClass} htmlFor="inspiration">Imagens de Inspiração</label>
            <label
              htmlFor="inspiration"
              className="flex cursor-pointer items-center justify-center gap-3 border-4 border-dashed border-ink bg-secondary/20 px-4 py-6 font-mono-brutal text-sm font-bold uppercase text-ink transition-colors hover:bg-secondary hover:text-paper"
            >
              <Upload className="h-5 w-5" strokeWidth={3} />
              {fileName || "Carregar ficheiros (jpg, png, pdf)"}
            </label>
            <input
              id="inspiration"
              name="inspiration"
              type="file"
              multiple
              accept="image/*,application/pdf"
              className="hidden"
              onChange={(e) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  setFileName(`✓ ${files.length} ficheiro(s) selecionado(s)`);
                }
              }}
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            className="btn-tactile mt-8 w-full border-brutal bg-accent px-6 py-5 font-display text-2xl uppercase text-paper shadow-brutal md:text-3xl"
          >
            ENVIAR PEDIDO →
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};
