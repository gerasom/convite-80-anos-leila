"use client";

import Image from "next/image";
import { useState } from "react";

import Countdown from "@/components/countdown/Countdown";
import EventLocation from "@/components/event-location/EventLocation";
import RSVP from "@/components/rsvp/RSVP";
import BackgroundMusic from "@/components/background-music/BackgroundMusic";
import GiftSuggestions from "@/components/gift-suggestions/GiftSuggestions";
import FloralBackground from "@/components/floral-background/FloralBackground";

import { Lora, Montserrat } from "next/font/google";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function openInvitation() {
    setIsOpen(true);

    setTimeout(() => {
      document.getElementById("invitation-content")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 1600);
  }

  return (
     <main
       className={`${lora.variable} ${montserrat.variable} min-h-screen overflow-x-hidden text-[#514363]`}
     >
      {/* =========================================================
          CAPA DO CONVITE
      ========================================================= */}

      <FloralBackground className="min-h-screen">
  <section
    className={`relative flex min-h-screen items-center justify-center px-5 py-10 transition-all duration-[2200ms] sm:px-8 sm:py-16 ${
      isOpen
        ? "pointer-events-none scale-105 opacity-0"
        : "scale-100 opacity-100"
    }`}
  >
    {/* CONTEÚDO DIRETAMENTE SOBRE O FUNDO */}
    <div className="relative w-full max-w-4xl">

      {/* Brilho suave atrás do conteúdo */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#d9c8ec] via-[#f3dce8] to-[#c9dced] opacity-20 blur-xl" />

      <div className="relative px-6 py-12 sm:px-12 sm:py-20">

        {/* Ornamento superior */}

        <div className="mb-8 flex items-center justify-center">
          <span className="h-px w-12 bg-[#d8c6e6] sm:w-20" />

          <span className="mx-4 h-2.5 w-2.5 rotate-45 border border-[#b79acb]" />

          <span className="h-px w-12 bg-[#d8c6e6] sm:w-20" />
        </div>

        {/* Texto introdutório */}

        <p
          className="text-center text-xs font-medium uppercase tracking-[0.4em] text-[#927da2]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Uma celebração especial
        </p>

        {/* Nome */}

        <div className="mt-5 text-center">
          <p
            className="text-5xl font-light leading-none tracking-wide text-[#514363] sm:text-7xl"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            Leila
          </p>

          <p
            className="mt-1 text-3xl font-light tracking-[0.12em] text-[#6d587e] sm:text-5xl"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            Maria Araujo
          </p>
        </div>

        {/* Número 80 */}

        <div className="my-8 flex items-center justify-center gap-4 sm:my-10 sm:gap-6">
          <span className="h-px w-10 bg-[#e3c6d7] sm:w-24" />

          <div className="text-center">
            <span
              className="block text-7xl font-light leading-none text-[#9b7eaf] sm:text-9xl"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              80
            </span>

            <span
              className="mt-1 block text-[9px] font-medium uppercase tracking-[0.5em] text-[#a17e96] sm:text-xs"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              anos
            </span>
          </div>

          <span className="h-px w-10 bg-[#e3c6d7] sm:w-24" />
        </div>

        {/* Frase */}

        <p
          className="mx-auto max-w-xl text-center text-xl italic leading-relaxed text-[#75647f] sm:text-2xl"
          style={{ fontFamily: "var(--font-lora)" }}
        >
          Uma vida inteira de histórias, amor e momentos que continuam
          florescendo.
        </p>

        {/* Data e horário */}

        <div
          className="mt-9 flex flex-col items-center justify-center gap-3 text-center sm:mt-11 sm:flex-row sm:gap-8"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#9b849f] sm:text-sm">
            24 de outubro
          </p>

          <span className="h-1 w-1 rounded-full bg-[#c5a8c7]" />

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#9b849f] sm:text-sm">
            11:30
          </p>
        </div>

        {/* Botão */}

        <div className="mt-9 flex justify-center sm:mt-10">
          <button
            type="button"
            onClick={openInvitation}
            className="rounded-full bg-gradient-to-r from-[#a98bbb] to-[#c49ab3] px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white shadow-lg shadow-[#b89fc0]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Abrir convite
          </button>
        </div>

        {/* Ornamento inferior */}

        <div className="mt-10 flex items-center justify-center sm:mt-12">
          <span className="h-px w-16 bg-[#d8c6e6] sm:w-24" />

          <span className="mx-4 h-2 w-2 rounded-full border border-[#c3a9d0]" />

          <span className="h-px w-16 bg-[#d8c6e6] sm:w-24" />
        </div>

      </div>
    </div>
  </section>
</FloralBackground>

      {/* =========================================================
          SEÇÃO DE HOMENAGEM
      ========================================================= */}

      <FloralBackground className="min-h-screen">
        <section
          id="invitation-content"
          className={`relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 transition-all duration-[2200ms] ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-10 opacity-0"
          }`}
        >
          <div className="relative w-full max-w-5xl">
            <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
              {/* =================================================
                  FOTOGRAFIA
              ================================================= */}

              <div className="flex justify-center">
                <div className="relative">
                  {/* Brilho externo */}

                  <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-[#d9c8ec]/50 via-[#f3dce8]/40 to-[#c9dced]/40 blur-xl" />

                  {/* Moldura */}

                  <div className="relative rounded-[2.5rem] border border-white/80 bg-white/80 p-3 shadow-[0_25px_70px_rgba(100,80,120,0.15)] backdrop-blur-sm">
                    <div className="relative h-[400px] w-[275px] overflow-hidden rounded-[2rem] sm:h-[560px] sm:w-[385px]">
                      <Image
                        src="/images/leila.png"
                        alt="Leila Maria Araujo"
                        fill
                        priority
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 275px, 385px"
                      />

                      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#514363]/20 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  TEXTO DA HOMENAGEM
              ================================================= */}

              <div className="rounded-[2rem] bg-white/35 p-6 text-center backdrop-blur-[2px] md:bg-transparent md:p-0 md:text-left">
                {/* Ornamento */}

                <div className="mb-7 flex items-center justify-center gap-3 md:justify-start">
                  <span className="h-px w-12 bg-[#d8c6e6]" />

                  <span className="h-2 w-2 rotate-45 border border-[#b79acb]" />

                  <span className="h-px w-12 bg-[#d8c6e6]" />
                </div>

                {/* Subtítulo */}

                <p
                  className="text-xs font-medium uppercase tracking-[0.4em] text-[#927da2]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Uma vida que continua florescendo
                </p>

                {/* Título */}

                <h2
                  className="mt-5 text-5xl font-light leading-tight text-[#514363] sm:text-6xl"
                  style={{ fontFamily: "var(--font-lora)" }}
                >
                  80 anos de
                  <br />
                  histórias
                </h2>

                {/* Divisor */}

                <div className="mx-auto my-7 h-px w-20 bg-[#e3c6d7] md:mx-0" />

                {/* Texto principal */}

                <p
                  className="mx-auto max-w-lg text-xl italic leading-relaxed text-[#75647f] sm:text-2xl md:mx-0"
                  style={{ fontFamily: "var(--font-lora)" }}
                >
                  Uma vida construída com amor, família, encontros e memórias
                  preciosas que, ao longo dos anos, fizeram florescer uma
                  história única.
                </p>

                {/* Texto secundário */}

                <p
                  className="mx-auto mt-6 max-w-lg text-base leading-8 text-[#75647f] md:mx-0"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Hoje é dia de celebrar cada capítulo dessa história e
                  agradecer por todos aqueles que fizeram e continuam fazendo
                  parte dela.
                </p>

                {/* Ornamento inferior */}

                <div className="mt-9 flex items-center justify-center gap-3 md:justify-start">
                  <span className="h-px w-10 bg-[#d8c6e6]" />

                  <span className="h-2 w-2 rounded-full border border-[#c3a9d0]" />

                  <span className="h-px w-10 bg-[#d8c6e6]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FloralBackground>

      {/* =========================================================
          CONTAGEM REGRESSIVA
      ========================================================= */}

      <FloralBackground>
        <Countdown />
      </FloralBackground>

      {/* =========================================================
          LOCAL DO EVENTO
      ========================================================= */}

      <FloralBackground>
        <EventLocation />
      </FloralBackground>

      {/* =========================================================
          CONFIRMAÇÃO DE PRESENÇA
      ========================================================= */}

      <FloralBackground>
        <RSVP />
      </FloralBackground>

      {/* =========================================================
          SUGESTÕES DE PRESENTES
      ========================================================= */}

      <FloralBackground>
        <GiftSuggestions />
      </FloralBackground>

      {/* MÚSICA */}

      <BackgroundMusic startMusic={isOpen} />
    </main>
  );
}