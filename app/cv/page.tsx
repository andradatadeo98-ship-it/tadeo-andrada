import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "CV — Tadeo Andrada",
};

// Cronología de ejemplo — reemplazar y ampliar con los datos reales.
// Al ser un array simple, agregar una fila nueva no requiere tocar el layout.
const cronologia = [
  { anio: "2026", detalle: "Exhibición individual, [nombre de galería]" },
  { anio: "2025", detalle: "Muestra colectiva, [nombre de espacio]" },
  { anio: "2024", detalle: "Residencia artística, [lugar]" },
];

export default function CVPage() {
  return (
    <>
      <Nav />
      <section className="pt-40 md:pt-48 px-6 md:px-24 pb-32">
        <Reveal className="max-w-[640px] md:ml-[16.6%]">
          <p className="text-xs tracking-widest uppercase text-muted mb-10">
            CV
          </p>
          <ul className="space-y-6">
            {cronologia.map((item) => (
              <li
                key={`${item.anio}-${item.detalle}`}
                className="flex gap-8 border-b border-line pb-6"
              >
                <span className="text-sm text-muted w-16 shrink-0">
                  {item.anio}
                </span>
                <span className="text-base">{item.detalle}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
      <Footer />
    </>
  );
}
