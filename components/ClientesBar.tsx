"use client";
// Faixa de logomarcas de clientes atendidos
import { useEffect, useRef } from "react";

const logos = [
  "/cocriando.jpg",
  "/diegomartinsconsultoria.jpg",
  "/perfor.png",
  "/unika.png",
  "/workegestao.png",
  "/logo_innova_new.png",
  "/Armando.jpg",
  "/selfiter.jpg",
];

export default function ClientesBar() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animationId: number;
    let start: number | null = null;
    let left = 0;
    const speed = 0.5; // px por frame

    function step(ts: number) {
      if (start === null) start = ts;
      left -= speed;
      if (Math.abs(left) >= track.scrollWidth / 2) {
        left = 0;
      }
      track.style.transform = `translateX(${left}px)`;
      animationId = requestAnimationFrame(step);
    }
    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="bg-white py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-xl md:text-2xl font-bold text-gray-700 mb-6">Clientes que confiam na Mysst</h3>
        <div className="relative w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-center gap-12 animate-none whitespace-nowrap will-change-transform"
            style={{ width: 'max-content' }}
          >
            {/* Duplicar as logos para efeito infinito */}
            {logos.concat(logos).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Logo cliente ${i + 1}`}
                className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition duration-300 bg-white rounded shadow"
                style={{ maxWidth: 160 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
