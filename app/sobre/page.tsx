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

      {/* Sala 1: el texto curatorial, solo. Columna angosta para una
          lectura cómoda, centrado como una pausa contemplativa. */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <Reveal className="max-w-[560px] text-center">
          <p className="text-[11px] tracking-[0.15em] uppercase text-muted mb-14">
            Sobre
          </p>
          <p className="font-serif text-xl leading-[1.85] whitespace-pre-line text-left">
            {textoCuratorialPlaceholder.trim()}
          </p>
        </Reveal>
      </section>

      {/* Sala 2: la cronología, separada por completo de la anterior. */}
      <section className="px-6 md:px-28 pb-48 md:pb-56">
        <Reveal className="max-w-[560px] mx-auto">
          <p className="text-[11px] tracking-[0.15em] uppercase text-muted mb-14">
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
