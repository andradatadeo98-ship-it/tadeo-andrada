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

      <Hero />

      <div className="h-[34vh]" />

      <Reveal className="max-w-[520px] md:ml-[28%] px-6 md:pr-24">
        <p className="text-lg leading-relaxed">
          Una práctica sostenida en la tensión entre el orden y el gesto —
          entre lo que se planifica y lo que sucede en el momento del
          pincel.
        </p>
      </Reveal>

      <div className="h-[16vh]" />

      <section className="px-6 md:px-24" id="obras">
        <Reveal className="mb-10 md:ml-[8.3%]">
          <p className="text-xs tracking-widest uppercase text-muted">
            Obras recientes
          </p>
        </Reveal>
        <ObrasMosaic obras={destacadas} />
      </section>

      <div className="h-[24vh]" />

      <Footer />
    </>
  );
}
