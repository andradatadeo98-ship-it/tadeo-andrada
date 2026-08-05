import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ObrasMosaic from "@/components/ObrasMosaic";
import Hero from "@/components/Hero";
import { getObrasDestacadas } from "@/lib/obras";

export default function Home() {
  const destacadas = getObrasDestacadas();

  return (
    <>
      <Nav />

      {/* Sala 1: el nombre. Una sola imagen, el nombre aparece después,
          subordinado. */}
      <Hero />

      {/* Sala 2: una pausa contemplativa, solo texto, centrado y
          angosto — no compite con nada más en pantalla. */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <Reveal className="max-w-[440px] text-center">
          <p className="font-serif text-xl md:text-2xl leading-[1.7]">
            Una práctica sostenida en la tensión entre el orden y el gesto —
            entre lo que se planifica y lo que sucede en el momento del
            pincel.
          </p>
        </Reveal>
      </section>

      {/* Sala 3 en adelante: cada obra destacada es su propia sala,
          ver ObrasMosaic. Un único cartel de entrada, discreto, antes
          de la primera. */}
      <section id="obras">
        <Reveal className="text-center pb-24 md:pb-32">
          <p className="text-[11px] tracking-[0.15em] uppercase text-muted">
            Obras recientes
          </p>
        </Reveal>
        <ObrasMosaic obras={destacadas} />
      </section>

      <Footer />
    </>
  );
}
