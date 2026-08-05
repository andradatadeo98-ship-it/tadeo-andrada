import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Sobre — Tadeo Andrada",
};

// TODO: reemplazar por el texto curatorial real cuando esté listo.
// Pensado para un único párrafo largo, sin subtítulos ni distracciones —
// columna angosta, line-height generoso, tipografía de lectura.
const textoCuratorialPlaceholder = `
Texto curatorial pendiente. Cuando el texto real esté listo,
reemplazar esta constante en app/sobre/page.tsx.
`;

// Cronología de ejemplo — reemplazar y ampliar con los datos reales.
// Al ser un array simple, agregar una fila nueva no requiere tocar el layout.
const cronologia = [
  { anio: "2026", detalle: "Exhibición individual, [nombre de galería]" },
  { anio: "2025", detalle: "Muestra colectiva, [nombre de espacio]" },
  { anio: "2024", detalle: "Residencia artística, [lugar]" },
];

export default function SobrePage() {
  return (
    <>
      <Nav />
      <section className="pt-40 md:pt-56 px-6 md:px-24 pb-40">
        <Reveal className="max-w-[640px] md:ml-[16.6%]">
          <p className="text-xs tracking-widest uppercase text-muted mb-12">
            Sobre
          </p>
          <p className="font-serif text-xl leading-[1.85] whitespace-pre-line mb-28">
            {textoCuratorialPlaceholder.trim()}
          </p>

          <p className="text-xs tracking-widest uppercase text-muted mb-12">
            Cronología
          </p>
          <ul className="space-y-8">
            {cronologia.map((item) => (
              <li
                key={`${item.anio}-${item.detalle}`}
                className="flex gap-8 border-b border-line pb-8"
              >
                <span className="text-sm text-muted w-16 shrink-0">
                  {item.anio}
                </span>
                <span className="font-serif text-base">{item.detalle}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
      <Footer />
    </>
  );
}
