import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, input, textarea, select, label, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        className="pointer-events-none fixed z-[10000] hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hover ? 2.2 : 1})`,
          transition: "transform 0.18s ease-out, background 0.15s",
          width: 28,
          height: 28,
          border: "3px solid #000",
          background: hover ? "hsl(var(--magenta))" : "hsl(var(--yellow))",
          mixBlendMode: "difference",
        }}
      />
      {/* Inner dot */}
      <div
        className="pointer-events-none fixed z-[10000] hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          width: 6,
          height: 6,
          background: "#000",
        }}
      />
    </>
  );
};
