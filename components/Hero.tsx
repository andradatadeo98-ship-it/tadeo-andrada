import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute left-[28%] top-[8vh] w-[62%] h-[68vh] md:left-[28%] max-md:left-[8%] max-md:w-[84%] max-md:h-[50vh]">
        <div className="relative w-full h-full overflow-hidden bg-[#E4DCCB]">
          {/* Reemplazar por <Image src="/images/hero-detail.jpg" fill .../> con la obra real */}
          <Image
            src="/images/hero-detail.jpg"
            alt="Detalle de pintura de Tadeo Andrada"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div
        className="absolute bottom-[10vh] left-6 md:left-28 opacity-0 animate-[revealIn_1.4s_cubic-bezier(0.16,1,0.3,1)_0.9s_forwards]"
        style={{ transform: "translateY(16px)" }}
      >
        <h1 className="font-serif text-[30px] md:text-[44px] leading-tight font-normal mb-2">
          Tadeo Andrada
        </h1>
        <p className="text-[13px] tracking-wide text-muted">
          Artista visual
        </p>
      </div>

      <style>{`
        @keyframes revealIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
