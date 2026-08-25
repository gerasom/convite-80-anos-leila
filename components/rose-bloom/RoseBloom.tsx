"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const roses = [
  "/images/rosa-01.png",
  "/images/rosa-02.png",
  "/images/rosa-03.png",
  "/images/rosa-desabrochando.png",
];

export default function RoseBloom() {
  const [currentRose, setCurrentRose] = useState(0);

  useEffect(() => {
    const isLastRose = currentRose === roses.length - 1;

    const timer = setTimeout(() => {
      setCurrentRose((current) => {
        // Se chegou à última rosa, volta para a primeira
        if (current === roses.length - 1) {
          return 0;
        }

        return current + 1;
      });
    }, isLastRose ? 5000 : 3000);

    return () => clearTimeout(timer);
  }, [currentRose]);

  return (
    <div className="relative mx-auto mt-16 flex h-[180px] w-full max-w-[180px] items-center justify-center md:mx-0 md:h-[220px] md:max-w-[220px]">
      {/* Brilho suave ao redor da rosa */}
      <div className="absolute inset-0 scale-75 rounded-full bg-[#e8d7df]/40 blur-3xl" />

      {/* Imagens da sequência */}
      <div className="relative h-full w-full">
        {roses.map((rose, index) => (
          <Image
            key={rose}
            src={rose}
            alt={
              index === roses.length - 1
                ? "Rosa completamente desabrochada"
                : "Rosa desabrochando"
            }
            fill
            priority={index === 0}
            sizes="(max-width: 768px) 180px, 220px"
            className={`object-contain transition-all duration-[1500ms] ease-in-out ${
              index === currentRose
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}