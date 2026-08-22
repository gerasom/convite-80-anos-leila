"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const EVENT_DATE = new Date("2026-10-24T11:30:00-03:00").getTime();

function calculateTimeLeft(): TimeLeft {
  const difference = EVENT_DATE - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

function TimeBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center">
      <div className="flex aspect-square w-full max-w-[72px] items-center justify-center rounded-2xl border border-[#e4d7e8] bg-white/80 shadow-[0_10px_30px_rgba(100,80,120,0.08)] sm:max-w-[90px]">
        <span
          className="text-3xl font-light text-[#8f74a4] sm:text-5xl"
          style={{ fontFamily: "var(--font-lora)" }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>

      <span
        className="mt-2 text-[7px] font-medium uppercase tracking-[0.18em] text-[#9b849f] sm:mt-3 sm:text-[9px] sm:tracking-[0.3em]"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  /*
   * Começamos com null para que o servidor e o primeiro
   * render do navegador produzam exatamente o mesmo HTML.
   */
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Primeiro cálculo somente no navegador.
    setTimeLeft(calculateTimeLeft());

    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  /*
   * Enquanto o navegador ainda não calculou o tempo,
   * mostramos os mesmos valores nos dois lados.
   */
  const displayTime: TimeLeft = timeLeft ?? {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto w-full max-w-4xl text-center">

        {/* Ornamento superior */}
        <div className="mb-7 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#d8c6e6] sm:w-20" />

          <span className="h-2 w-2 rotate-45 border border-[#b79acb]" />

          <span className="h-px w-12 bg-[#d8c6e6] sm:w-20" />
        </div>

        {/* Subtítulo */}
        <p
          className="text-xs font-medium uppercase tracking-[0.4em] text-[#927da2] sm:text-xs"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Estamos contando os dias
        </p>

        {/* Título */}
        <h2
          className="mt-5 text-5xl font-light text-[#514363] sm:text-6xl"
          style={{ fontFamily: "var(--font-lora)" }}
        >
          Até a nossa celebração
        </h2>

        {/* Data */}
        <p
          className="mx-auto mt-4 max-w-xl text-lg italic text-[#75647f] sm:text-xl"
          style={{ fontFamily: "var(--font-lora)" }}
        >
          24 de outubro de 2026 · 11:30
        </p>

        {/* Contador */}
        <div className="mx-auto mt-10 grid w-full max-w-[380px] grid-cols-4 gap-2 sm:max-w-2xl sm:gap-6">
          <TimeBox
            value={displayTime.days}
            label="dias"
          />

          <TimeBox
            value={displayTime.hours}
            label="horas"
          />

          <TimeBox
            value={displayTime.minutes}
            label="minutos"
          />

          <TimeBox
            value={displayTime.seconds}
            label="segundos"
          />
        </div>

        {/* Ornamento inferior */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-[#d8c6e6] sm:w-24" />

          <span className="h-2 w-2 rounded-full border border-[#c3a9d0]" />

          <span className="h-px w-16 bg-[#d8c6e6] sm:w-24" />
        </div>

      </div>
    </section>
  );
}