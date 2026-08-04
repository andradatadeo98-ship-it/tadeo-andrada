import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Práctica — Tadeo Andrada",
};

// TODO: reemplazar por el texto curatorial real cuando esté listo.
// El párrafo de abajo es un placeholder para validar el layout editorial.
const textoCuratorialPlaceholder = `
Texto curatorial pendiente. Este bloque está pensado para un único
párrafo largo, sin subtítulos ni distracciones — columna angosta,
line-height generoso, tipografía de lectura. Cuando el texto real
esté listo, reemplazar esta constante en app/practica/page.tsx.
`;

export default function PracticaPage() {
  return (
    <>
      <Nav />
      <section className="pt-40 md:pt-48 px-6 md:px-24 pb-32">
        <Reveal className="max-w-[640px] md:ml-[16.6%]">
          <p className="text-xs tracking-widest uppercase text-muted mb-10">
            Práctica
          </p>
          <p className="text-lg leading-[1.8] whitespace-pre-line">
            {textoCuratorialPlaceholder.trim()}
          </p>
        </Reveal>
      </section>
      <Footer />
    </>
  );
}
