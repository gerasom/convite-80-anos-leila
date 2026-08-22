import { ReactNode } from "react";

type FloralBackgroundProps = {
  children: ReactNode;
  className?: string;
};

export default function FloralBackground({
  children,
  className = "",
}: FloralBackgroundProps) {
  return (
    <section
      className={`relative isolate min-h-screen w-full overflow-hidden ${className}`}
    >
      {/* Fundo floral */}
      <img
        src="/images/floral-background.png"
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        draggable={false}
      />

      {/* Conteúdo */}
      <div className="relative z-10 min-h-screen w-full">
        {children}
      </div>
    </section>
  );
}