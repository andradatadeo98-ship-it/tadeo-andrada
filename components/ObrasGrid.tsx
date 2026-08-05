import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import type { Obra } from "@/lib/obras";

// Grilla del catálogo completo: todas las celdas comparten el mismo
// tamaño y proporción (a diferencia del showcase de la Home). Sin
// marcos, sombras ni asimetría — el orden es lo que transmite
// sobriedad acá. La información (título, año, medidas) está siempre
// visible debajo de cada imagen, nunca solo al pasar el cursor.
export default function ObrasGrid({ obras }: { obras: Obra[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 md:gap-x-24 gap-y-28 md:gap-y-40">
      {obras.map((obra) => (
        <Reveal key={obra.slug}>
          <Link href={`/obras/${obra.slug}`} className="group block">
            <div
              className="relative overflow-hidden bg-[#E4DCCB]"
              style={{ aspectRatio: "4/5" }}
            >
              {obra.imagenes[0] && (
                <Image
                  src={obra.imagenes[0]}
                  alt={`${obra.titulo}, ${obra.anio}`}
                  fill
                  className="object-cover transition-opacity duration-700 ease-reveal group-hover:opacity-90"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
            </div>
            <div className="mt-6">
              <p className="font-serif text-sm text-ink/80">
                {obra.titulo}, {obra.anio}
              </p>
              <p className="text-xs tracking-wide text-muted mt-1">
                {obra.medidas}
              </p>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
