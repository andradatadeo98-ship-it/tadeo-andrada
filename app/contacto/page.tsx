import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contacto — Tadeo Andrada",
};

export default function ContactoPage() {
  return (
    <>
      <Nav />
      <section className="pt-40 md:pt-48 px-6 md:px-24 pb-32 min-h-[60vh]">
        <Reveal className="max-w-[480px] md:ml-[16.6%]">
          <p className="text-xs tracking-widest uppercase text-muted mb-10">
            Contacto
          </p>
          <div className="space-y-6">
            <a
              href="mailto:andradatadeo98@gmail.com"
              className="block text-lg hover:text-muted transition-colors"
            >
              andradatadeo98@gmail.com
            </a>
            <a
              href="https://www.instagram.com/tadeoandrada/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg hover:text-muted transition-colors"
            >
              Instagram ↗
            </a>
            <a
              href="#"
              className="block text-lg hover:text-muted transition-colors"
            >
              Descargar portfolio (PDF) ↗
            </a>
          </div>
        </Reveal>
      </section>
      <Footer />
    </>
  );
}
