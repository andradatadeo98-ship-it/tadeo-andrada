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
      <section className="pt-40 md:pt-56 px-6 md:px-24 pb-40">
        <Reveal className="mb-20 md:mb-28 md:ml-[8.3%]">
          <p className="text-xs tracking-widest uppercase text-muted">
            Obras — {obras.length} pieza{obras.length !== 1 ? "s" : ""}
          </p>
        </Reveal>
        <ObrasGrid obras={obras} />
      </section>
      <Footer />
    </>
  );
}
