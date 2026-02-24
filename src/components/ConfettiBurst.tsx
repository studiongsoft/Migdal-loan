"use client";

/**
 * אנימציית קונפטי – חלקיקים צבעוניים מתפוצצים מהמרכז.
 * משתמש בצבעי העיצוב של הפרויקט.
 */

const COLORS = [
  "rgba(162, 235, 154, 0.7)",
  "rgba(184, 211, 238, 0.8)",
  "rgba(212, 229, 245, 0.9)",
  "rgba(60, 101, 227, 0.4)",
  "rgba(2, 1, 64, 0.25)",
  "rgba(220, 180, 200, 0.5)",
];

const PIECES = 14;
const BURST_RADIUS = 55;

export function ConfettiBurst() {
  const pieces = Array.from({ length: PIECES }, (_, i) => {
    const angle = (i / PIECES) * 360 + (i % 2) * 8;
    const distance = BURST_RADIUS + (i % 4) * 5;
    const color = COLORS[i % COLORS.length];
    const delay = (i % 5) * 0.04; // seconds
    const size = 4 + (i % 3);
    const spin = (i % 4) * 25;
    const isRect = i % 3 !== 0;
    return { angle, distance, color, delay, size, spin, isRect };
  });

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
      {pieces.map((p, i) => (
        <div
          key={i}
          className="confetti-piece absolute"
          style={
            {
              "--confetti-angle": `${p.angle}deg`,
              "--confetti-distance": `${p.distance}px`,
              "--confetti-spin": `${p.spin}deg`,
              width: p.size,
              height: p.isRect ? p.size * 1.5 : p.size,
              borderRadius: p.isRect ? "2px" : "50%",
              backgroundColor: p.color,
              animationDelay: `${p.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}