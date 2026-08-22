"use client";

const GOOGLE_MAPS_URL =
  "https://www.google.com.br/maps/place/Espaco+Lumier/@-15.8021642,-48.1412005,11z/data=!4m6!3m5!1s0x935a32f61fec68cd:0xdb473c431db6d1cb!8m2!3d-15.8020342!4d-48.042887!16s%2Fg%2F11b6j772rg?hl=pt-BR&entry=ttu";

const WAZE_URL =
  "https://waze.com/ul?ll=-15.8020342%2C-48.042887&navigate=yes";

export default function EventLocation() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="relative mx-auto w-full max-w-4xl">
        {/* Ornamento superior */}
        <div className="mb-7 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#bdaecb]/70 sm:w-20" />

          <span className="h-2 w-2 rotate-45 border border-[#a98bbb]" />

          <span className="h-px w-12 bg-[#bdaecb]/70 sm:w-20" />
        </div>

        {/* Título */}
        <div className="text-center">
          <p
            className="text-xs font-medium uppercase tracking-[0.4em] text-[#75647f]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Reserve este momento
          </p>

          <h2
            className="mt-5 text-5xl font-light leading-tight text-[#514363] sm:text-6xl"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            O grande dia
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl text-xl italic leading-relaxed text-[#75647f] sm:text-2xl"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            Será uma alegria celebrar este momento especial ao lado de
            pessoas tão queridas.
          </p>
        </div>

        {/* Informações do evento */}
        <div className="mx-auto mt-14 max-w-3xl">
          {/* Data e horário */}
          <div className="grid border-y border-[#d9cfe0]/70 md:grid-cols-2">
            {/* Data */}
            <div className="py-10 text-center md:border-r md:border-[#d9cfe0]/70">
              <span
                className="text-xs font-medium uppercase tracking-[0.35em] text-[#8d7a99]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Data
              </span>

              <p
                className="mt-3 text-4xl font-light text-[#725d82] sm:text-5xl"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                24 de outubro
              </p>

              <p
                className="mt-1 text-sm uppercase tracking-[0.25em] text-[#8d7a99]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                2026
              </p>
            </div>

            {/* Horário */}
            <div className="border-t border-[#d9cfe0]/70 py-10 text-center md:border-t-0">
              <span
                className="text-xs font-medium uppercase tracking-[0.35em] text-[#8d7a99]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Horário
              </span>

              <p
                className="mt-3 text-4xl font-light text-[#725d82] sm:text-5xl"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                11:30
              </p>

              <p
                className="mt-1 text-sm text-[#8d7a99]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                da manhã
              </p>
            </div>
          </div>

          {/* Local */}
          <div className="py-12 text-center">
            <span
              className="text-xs font-medium uppercase tracking-[0.35em] text-[#8d7a99]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Local da celebração
            </span>

            <h3
              className="mt-4 text-4xl font-light text-[#514363] sm:text-5xl"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Espaço Lumier
            </h3>

            <p
              className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#75647f]"
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
          <div className="grid gap-4 border-t border-[#d9cfe0]/70 pt-8 sm:grid-cols-2">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#bdaecb] bg-white/25 px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[#755d83] backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/50 hover:shadow-lg"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <span className="text-lg">📍</span>
              <span>Google Maps</span>
            </a>

            <a
              href={WAZE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#a98bbb] to-[#c49ab3] px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white shadow-lg shadow-[#b89fc0]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <span className="text-lg">🚗</span>
              <span>Como chegar pelo Waze</span>
            </a>
          </div>
        </div>

        {/* Ornamento inferior */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-[#bdaecb]/70 sm:w-24" />

          <span className="h-2 w-2 rounded-full border border-[#a98bbb]" />

          <span className="h-px w-16 bg-[#bdaecb]/70 sm:w-24" />
        </div>
      </div>
    </section>
  );
}