"use client";

import Image from "next/image";
import { useState } from "react";
import Countdown from "@/components/countdown/Countdown";
import EventLocation from "@/components/event-location/EventLocation";
import RSVP from "@/components/rsvp/RSVP";
import BackgroundMusic from "@/components/background-music/BackgroundMusic";

import { Cormorant_Garamond, Montserrat } from "next/font/google";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
      className={`${cormorant.variable} ${montserrat.variable} min-h-screen overflow-x-hidden bg-[#fffdfd] text-[#514363]`}
    >
      {/* =========================================================
          CAPA DO CONVITE
      ========================================================= */}
      <section
        className={`relative flex min-h-screen items-center justify-center px-5 py-10 transition-all duration-[2200ms] sm:px-8 sm:py-16 ${
          isOpen
            ? "pointer-events-none scale-105 opacity-0"
            : "scale-100 opacity-100"
        }`}
      >
        {/* Atmosfera de fundo */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-32 h-96 w-96 rounded-full bg-[#e8dff5]/60 blur-3xl" />

          <div className="absolute -bottom-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-[#f6dce8]/60 blur-3xl" />

          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dce9f7]/30 blur-3xl" />
        </div>

        {/* =====================================================
            ELEMENTO FLORAL — SUPERIOR ESQUERDO
        ===================================================== */}
        <div className="pointer-events-none absolute -left-4 top-8 h-24 w-24 rounded-full border border-[#d7c4e6]/40 sm:left-8 sm:top-12 sm:h-32 sm:w-32">
          <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b49acb]/70" />

          <div className="absolute left-1/2 top-1 h-8 w-4 -translate-x-1/2 rounded-full bg-[#c9b4da]/60" />

          <div className="absolute bottom-1 left-1/2 h-8 w-4 -translate-x-1/2 rounded-full bg-[#c9b4da]/60" />

          <div className="absolute left-1 top-1/2 h-4 w-8 -translate-y-1/2 rounded-full bg-[#c9b4da]/60" />

          <div className="absolute right-1 top-1/2 h-4 w-8 -translate-y-1/2 rounded-full bg-[#c9b4da]/60" />
        </div>

        {/* =====================================================
            ELEMENTO FLORAL — SUPERIOR DIREITO
        ===================================================== */}
        <div className="pointer-events-none absolute -right-8 top-16 h-28 w-28 rotate-12 rounded-full border border-[#e3c1d3]/50 sm:right-10 sm:top-20 sm:h-36 sm:w-36">
          <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d5a8bd]/70" />

          <div className="absolute left-1/2 top-1 h-9 w-4 -translate-x-1/2 rounded-full bg-[#e5c4d3]/70" />

          <div className="absolute bottom-1 left-1/2 h-9 w-4 -translate-x-1/2 rounded-full bg-[#e5c4d3]/70" />

          <div className="absolute left-1 top-1/2 h-4 w-9 -translate-y-1/2 rounded-full bg-[#e5c4d3]/70" />

          <div className="absolute right-1 top-1/2 h-4 w-9 -translate-y-1/2 rounded-full bg-[#e5c4d3]/70" />
        </div>

        {/* =====================================================
            CARTÃO PRINCIPAL
        ===================================================== */}
        <div className="relative w-full max-w-4xl">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#d9c8ec] via-[#f3dce8] to-[#c9dced] opacity-50 blur-xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-[#e5d9e8] bg-white/90 px-6 py-12 shadow-[0_25px_80px_rgba(100,80,120,0.12)] backdrop-blur-sm sm:px-12 sm:py-20">

            {/* Ornamento superior */}
            <div className="mb-8 flex items-center justify-center">
              <span className="h-px w-12 bg-[#d8c6e6] sm:w-20" />

              <span className="mx-4 h-2.5 w-2.5 rotate-45 border border-[#b79acb] bg-white" />

              <span className="h-px w-12 bg-[#d8c6e6] sm:w-20" />
            </div>

            {/* Texto introdutório */}
            <p
              className="text-center text-[10px] font-medium uppercase tracking-[0.4em] text-[#927da2] sm:text-xs"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Uma celebração especial
            </p>

            {/* Nome */}
            <div className="mt-5 text-center">
              <p
                className="text-5xl font-light leading-none tracking-wide text-[#514363] sm:text-7xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Leila
              </p>

              <p
                className="mt-1 text-3xl font-light tracking-[0.12em] text-[#6d587e] sm:text-5xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
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
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  80
                </span>

                <span
                  className="mt-1 block text-[9px] font-medium uppercase tracking-[0.5em] text-[#a17e96] sm:text-[10px]"
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
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Uma vida inteira de histórias, amor e momentos que continuam
              florescendo.
            </p>

            {/* Data e horário */}
            <div
              className="mt-9 flex flex-col items-center justify-center gap-3 text-center sm:mt-11 sm:flex-row sm:gap-8"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#9b849f] sm:text-xs">
                24 de outubro
              </p>

              <span className="h-1 w-1 rounded-full bg-[#c5a8c7]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#9b849f] sm:text-xs">
                11 horas
              </p>
            </div>

            {/* Botão */}
            <div className="mt-9 flex justify-center sm:mt-10">
              <button
                type="button"
                onClick={openInvitation}
                className="rounded-full bg-gradient-to-r from-[#a98bbb] to-[#c49ab3] px-8 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white shadow-lg shadow-[#b89fc0]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
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

      {/* =========================================================
          SEÇÃO DE HOMENAGEM
      ========================================================= */}
      <section
        id="invitation-content"
        className={`relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 transition-all duration-[2200ms] ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-10 opacity-0"
        }`}
      >
        {/* Atmosfera de fundo */}
        <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#e8dff5]/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-[#f6dce8]/30 blur-3xl" />

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
                <div className="relative rounded-[2.5rem] border border-[#dfcee6] bg-white p-3 shadow-[0_25px_70px_rgba(100,80,120,0.15)]">

                  <div className="relative h-[400px] w-[275px] overflow-hidden rounded-[2rem] sm:h-[560px] sm:w-[385px]">

                    <Image
                      src="/images/leila.png"
                      alt="Leila Maria Araujo"
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 275px, 385px"
                    />

                    {/* Véu inferior */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#514363]/20 to-transparent" />
                  </div>
                </div>

                {/* =================================================
                    DETALHE FLORAL
                ================================================= */}
                <div className="absolute -bottom-4 -left-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#dfcee6] bg-white/90 shadow-sm backdrop-blur-sm">
                  <div className="relative h-8 w-8">

                    <span className="absolute left-1/2 top-0 h-4 w-3 -translate-x-1/2 rounded-full bg-[#d7c2e3]" />

                    <span className="absolute bottom-0 left-1/2 h-4 w-3 -translate-x-1/2 rounded-full bg-[#e5c4d3]" />

                    <span className="absolute left-0 top-1/2 h-3 w-4 -translate-y-1/2 rounded-full bg-[#c8d7e8]" />

                    <span className="absolute right-0 top-1/2 h-3 w-4 -translate-y-1/2 rounded-full bg-[#d9b8cb]" />

                    <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b49acb]" />
                  </div>
                </div>

              </div>
            </div>

            {/* =================================================
                TEXTO DA HOMENAGEM
            ================================================= */}
            <div className="text-center md:text-left">

              {/* Ornamento */}
              <div className="mb-7 flex items-center justify-center gap-3 md:justify-start">
                <span className="h-px w-12 bg-[#d8c6e6]" />

                <span className="h-2 w-2 rotate-45 border border-[#b79acb]" />

                <span className="h-px w-12 bg-[#d8c6e6]" />
              </div>

              {/* Subtítulo */}
              <p
                className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#927da2] sm:text-xs"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Uma vida que continua florescendo
              </p>

              {/* Título */}
              <h2
                className="mt-5 text-5xl font-light leading-tight text-[#514363] sm:text-6xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
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
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Uma vida construída com amor, família, encontros e memórias
                preciosas que, ao longo dos anos, fizeram florescer uma
                história única.
              </p>

              {/* Texto secundário */}
              <p
                className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#8b7b91] md:mx-0"
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

      {/* =========================================================
          CONTAGEM REGRESSIVA
      ========================================================= */}
      <Countdown />

      <EventLocation />

      <RSVP />

      <BackgroundMusic startMusic={isOpen} />

    </main>
  );
}