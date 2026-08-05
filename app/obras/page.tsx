import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ObrasGrid from "@/components/ObrasGrid";
import { getObras } from "@/lib/obras";

export const metadata = {
  title: "Obras — Tadeo Andrada",
};

export default function ObrasPage() {
  const obras = getObras();

  return (
    <>
      <Nav />
      <section className="pt-48 md:pt-64 px-6 md:px-28 pb-48 md:pb-56">
        <Reveal className="mb-24 md:mb-32 text-center">
          <p className="text-[11px] tracking-[0.15em] uppercase text-muted">
            Obras — {obras.length} pieza{obras.length !== 1 ? "s" : ""}
          </p>
        </Reveal>
        <ObrasGrid obras={obras} />
      </section>
      <Footer />
    </>
  );
}
