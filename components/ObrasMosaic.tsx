import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import type { Obra } from "@/lib/obras";

// Patrón de columnas/desfasajes que genera la asimetría del mosaico.
// Se repite cíclicamente si hay más obras que posiciones definidas.
const layoutPattern = [
  { colSpan: "md:col-span-6", offset: "" },
  { colSpan: "md:col-span-3", offset: "md:mt-16" },
  { colSpan: "md:col-span-3", offset: "" },
  { colSpan: "md:col-span-4", offset: "md:mt-8" },
  { colSpan: "md:col-span-5", offset: "" },
  { colSpan: "md:col-span-3", offset: "md:mt-24" },
];

export default function ObrasMosaic({ obras }: { obras: Obra[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      {obras.map((obra, i) => {
        const layout = layoutPattern[i % layoutPattern.length];
        return (
          <Reveal
            key={obra.slug}
            className={`col-span-1 ${layout.colSpan} ${layout.offset}`}
          >
            <Link href={`/obras/${obra.slug}`} className="group block">
              {/* Paspartú + sombra proyectada: da la sensación de una
                  obra montada en la pared, no una foto plana. */}
              <div
                className="relative bg-cream p-3 md:p-4 shadow-[0_24px_40px_-20px_rgba(47,42,37,0.4)] transition-transform duration-500 ease-reveal group-hover:-translate-y-1"
              >
                <div
                  className="relative overflow-hidden bg-[#E4DCCB]"
                  style={{ aspectRatio: obra.aspectRatio }}
                >
                  {obra.imagenes[0] && (
                    <Image
                      src={obra.imagenes[0]}
                      alt={`${obra.titulo}, ${obra.anio}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                </div>
                <span className="block mt-2 text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {obra.titulo}, {obra.anio}
                </span>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
