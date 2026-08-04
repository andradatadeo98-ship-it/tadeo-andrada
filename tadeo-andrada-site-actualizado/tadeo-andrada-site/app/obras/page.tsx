import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ObrasMosaic from "@/components/ObrasMosaic";
import { getObras } from "@/lib/obras";

export const metadata = {
  title: "Obras — Tadeo Andrada",
};

export default function ObrasPage() {
  const obras = getObras();

  return (
    <>
      <Nav />
      <section className="pt-40 md:pt-48 px-6 md:px-24 pb-24">
        <Reveal className="mb-16 md:ml-[8.3%]">
          <p className="text-xs tracking-widest uppercase text-muted">
            Obras — {obras.length} pieza{obras.length !== 1 ? "s" : ""}
          </p>
        </Reveal>
        <ObrasMosaic obras={obras} />
      </section>
      <Footer />
    </>
  );
}
