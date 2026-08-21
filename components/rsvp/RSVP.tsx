"use client";

const WHATSAPP_NUMBER = "556181247985";

const MESSAGE =
  "Olá! Gostaria de confirmar minha presença na celebração dos 80 anos da Leila Maria Araujo, no dia 24 de outubro.\nMeu nome é:";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  MESSAGE
)}`;

export default function RSVP() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      {/* Atmosfera floral */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#e8dff5]/35 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#f6dce8]/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-3xl text-center">

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
          Sua presença é especial
        </p>

        {/* Título */}
        <h2
          className="mt-5 text-5xl font-light leading-tight text-[#514363] sm:text-6xl"
          style={{ fontFamily: "var(--font-lora)" }}
        >
          Confirme sua presença
        </h2>

        {/* Texto */}
        <p
          className="mx-auto mt-6 max-w-xl text-xl italic leading-relaxed text-[#75647f] sm:text-2xl"
          style={{ fontFamily: "var(--font-lora)" }}
        >
          Para nós, será uma alegria ter você neste dia tão especial.
        </p>

        {/* Cartão */}
        <div className="mx-auto mt-12 max-w-xl rounded-[2rem] border border-[#e5d9e8] bg-white/80 px-6 py-10 shadow-[0_25px_70px_rgba(100,80,120,0.10)] backdrop-blur-sm sm:px-10 sm:py-12">

          {/* Pequeno detalhe floral */}
          <div className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-[#dfcee6] bg-white/80">
            <div className="relative h-7 w-7">
              <span className="absolute left-1/2 top-0 h-3.5 w-2.5 -translate-x-1/2 rounded-full bg-[#d7c2e3]" />

              <span className="absolute bottom-0 left-1/2 h-3.5 w-2.5 -translate-x-1/2 rounded-full bg-[#e5c4d3]" />

              <span className="absolute left-0 top-1/2 h-2.5 w-3.5 -translate-y-1/2 rounded-full bg-[#c8d7e8]" />

              <span className="absolute right-0 top-1/2 h-2.5 w-3.5 -translate-y-1/2 rounded-full bg-[#d9b8cb]" />

              <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b49acb]" />
            </div>
          </div>

          <p
            className="text-sm leading-7 text-[#8b7b91]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Sua confirmação nos ajudará a preparar tudo com muito carinho
            para receber cada convidado.
          </p>

          {/* Botão WhatsApp */}
          <div className="mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#a98bbb] to-[#c49ab3] px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white shadow-lg shadow-[#b89fc0]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <span className="text-lg">💬</span>
              <span>Confirmar presença pelo WhatsApp</span>
            </a>
          </div>

          <p
            className="mt-5 text-xs text-[#a18da7]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Ao clicar, o WhatsApp será aberto com uma mensagem pronta para
            você completar com seu nome.
          </p>
        </div>

        {/* Mensagem final */}
        <p
          className="mt-10 text-2xl italic text-[#75647f] sm:text-3xl"
          style={{ fontFamily: "var(--font-lora)" }}
        >
          Esperamos você! ♡
        </p>

        {/* Ornamento inferior */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-[#d8c6e6] sm:w-24" />

          <span className="h-2 w-2 rounded-full border border-[#c3a9d0]" />

          <span className="h-px w-16 bg-[#d8c6e6] sm:w-24" />
        </div>

      </div>
    </section>
  );
}