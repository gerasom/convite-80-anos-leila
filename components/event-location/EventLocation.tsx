"use client";

const GOOGLE_MAPS_URL =
  "https://www.google.com.br/maps/place/Espaco+Lumier/@-15.8021642,-48.1412005,11z/data=!4m6!3m5!1s0x935a32f61fec68cd:0xdb473c431db6d1cb!8m2!3d-15.8020342!4d-48.042887!16s%2Fg%2F11b6j772rg?hl=pt-BR&entry=ttu";

const WAZE_URL =
  "https://waze.com/ul?ll=-15.8020342%2C-48.042887&navigate=yes";

export default function EventLocation() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      {/* Atmosfera */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#dce9f7]/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#f6dce8]/35 blur-3xl" />

      <div className="relative mx-auto w-full max-w-4xl">
        {/* Ornamento */}
        <div className="mb-7 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#d8c6e6] sm:w-20" />

          <span className="h-2 w-2 rotate-45 border border-[#b79acb]" />

          <span className="h-px w-12 bg-[#d8c6e6] sm:w-20" />
        </div>

        {/* Título */}
        <div className="text-center">
          <p
            className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#927da2] sm:text-xs"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Reserve este momento
          </p>

          <h2
            className="mt-5 text-5xl font-light leading-tight text-[#514363] sm:text-6xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            O grande dia
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl text-xl italic leading-relaxed text-[#75647f] sm:text-2xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Será uma alegria celebrar este momento especial ao lado de
            pessoas tão queridas.
          </p>
        </div>

        {/* Cartão de informações */}
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#e5d9e8] bg-white/80 shadow-[0_25px_70px_rgba(100,80,120,0.10)] backdrop-blur-sm">
          <div className="grid md:grid-cols-2">

            {/* Data */}
            <div className="border-b border-[#eee5f0] p-8 text-center md:border-b-0 md:border-r sm:p-10">
              <span
                className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#9b849f]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Data
              </span>

              <p
                className="mt-3 text-4xl font-light text-[#8f74a4] sm:text-5xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                24 de outubro
              </p>

              <p
                className="mt-1 text-sm uppercase tracking-[0.25em] text-[#9b849f]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                2026
              </p>
            </div>

            {/* Horário */}
            <div className="p-8 text-center sm:p-10">
              <span
                className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#9b849f]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Horário
              </span>

              <p
                className="mt-3 text-4xl font-light text-[#8f74a4] sm:text-5xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                11 horas
              </p>

              <p
                className="mt-1 text-sm text-[#9b849f]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                da manhã
              </p>
            </div>
          </div>

          {/* Local */}
          <div className="border-t border-[#eee5f0] px-7 py-9 text-center sm:px-10 sm:py-10">
            <span
              className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#9b849f]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Local da celebração
            </span>

            <h3
              className="mt-3 text-4xl font-light text-[#514363] sm:text-5xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Espaço Lumier
            </h3>

            <p
              className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#8b7b91]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Rua 07, Chácara 330, Lote 08
              <br />
              Setor Habitacional Vicente Pires
              <br />
              Brasília – DF
            </p>
          </div>

          {/* Navegação */}
          <div className="grid gap-3 border-t border-[#eee5f0] p-6 sm:grid-cols-2 sm:p-8">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#cdb8d8] bg-white px-6 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#755d83] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b69bc3] hover:bg-[#faf6fc] hover:shadow-lg"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <span className="text-lg">📍</span>
              <span>Google Maps</span>
            </a>

            <a
              href={WAZE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#a98bbb] to-[#c49ab3] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white shadow-lg shadow-[#b89fc0]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <span className="text-lg">🚗</span>
              <span>Como chegar pelo Waze</span>
            </a>
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