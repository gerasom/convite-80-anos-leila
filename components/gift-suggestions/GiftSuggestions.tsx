"use client";

import { useState } from "react";

const gifts = [
  {
    icon: "👗",
    name: "Roupas",
    detail: "Tamanho P",
  },
  {
    icon: "👖",
    name: "Calça",
    detail: "Tamanho 36",
  },
  {
    icon: "👠",
    name: "Sapato",
    detail: "Tamanho 34",
  },
  {
    icon: "📿",
    name: "Colar",
    detail: "",
  },
  {
    icon: "✨",
    name: "Brinco",
    detail: "",
  },
  {
    icon: "🧖‍♀️",
    name: "Roupão",
    detail: "",
  },
  {
    icon: "🌙",
    name: "Camisola",
    detail: "",
  },
  {
    icon: "🎀",
    name: "Cinto",
    detail: "",
  },
  {
    icon: "👜",
    name: "Bolsa social",
    detail: "",
  },
  {
    icon: "🛏️",
    name: "Pijama",
    detail: "Com botão, mangas e calça comprida",
  },
  {
    icon: "🥿",
    name: "Pantufa",
    detail: "Tamanho 34",
  },
];

export default function GiftSuggestions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      {/* Atmosfera */}
      <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-[#dce9f7]/25 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#f6dce8]/30 blur-3xl" />

      <div className="relative mx-auto w-full max-w-4xl">
        {/* Ornamento superior */}
        <div className="mb-7 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#d8c6e6] sm:w-20" />

          <span className="h-2 w-2 rotate-45 border border-[#b79acb]" />

          <span className="h-px w-12 bg-[#d8c6e6] sm:w-20" />
        </div>

        {/* Cabeçalho */}
        <div className="text-center">
          <p
            className="text-xs font-medium uppercase tracking-[0.4em] text-[#927da2] sm:text-xs"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Com carinho
          </p>

          <h2
            className="mt-5 text-5xl font-light leading-tight text-[#514363] sm:text-6xl"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            Sugestões de presentes
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl text-xl italic leading-relaxed text-[#75647f] sm:text-2xl"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            Sua presença é o presente mais especial. Mas, se desejar
            presentear a Leila, estas sugestões podem ajudar na escolha.
          </p>
        </div>

        {/* Botão para abrir a lista */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            className="flex min-h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#a98bbb] to-[#c49ab3] px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white shadow-lg shadow-[#b89fc0]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <span className="text-lg">🎁</span>

            <span>
              {isOpen
                ? "Ocultar sugestões"
                : "Ver sugestões de presentes"}
            </span>
          </button>
        </div>

        {/* Lista */}
        <div
          className={`grid transition-all duration-700 ease-in-out ${
            isOpen
              ? "mt-10 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="rounded-[2rem] border border-[#e5d9e8] bg-white/80 p-5 shadow-[0_25px_70px_rgba(100,80,120,0.10)] backdrop-blur-sm sm:p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {gifts.map((gift, index) => (
                  <div
                    key={gift.name}
                    className="flex items-center gap-4 rounded-2xl border border-[#eee5f0] bg-white/70 px-5 py-4 transition-all duration-300 hover:border-[#d8c6e6] hover:bg-[#fcf9fd]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#dfcee6] bg-white text-xl">
                      {gift.icon}
                    </div>

                    <div className="min-w-0 text-left">
                      <p
                        className="text-lg text-[#514363]"
                        style={{
                          fontFamily: "var(--font-lora)",
                        }}
                      >
                        {index + 1}. {gift.name}
                      </p>

                      {gift.detail && (
                        <p
                          className="mt-0.5 text-xs font-medium uppercase tracking-[0.16em] text-[#9b849f]"
                          style={{
                            fontFamily: "var(--font-montserrat)",
                          }}
                        >
                          {gift.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <p
                className="mx-auto mt-7 max-w-xl text-center text-xs leading-6 text-[#a18da7]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Estas são apenas sugestões e não representam uma lista de
                presentes com reserva ou compra. O mais importante é ter você
                conosco neste dia especial.
              </p>
            </div>
          </div>
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