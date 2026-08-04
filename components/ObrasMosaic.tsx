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
              <div
                className="relative overflow-hidden rounded-sm bg-[#E4DCCB] shadow-[0_20px_36px_-18px_rgba(47,42,37,0.35)] transition-transform duration-500 ease-reveal group-hover:-translate-y-1"
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
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
