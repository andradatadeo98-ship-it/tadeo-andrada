"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import type { Obra } from "@/lib/obras";

// Presentación de la Home: cada obra ocupa casi todo el ancho, como
// recorrer una muestra. Si la obra tiene una foto de instalación
// (imagenMockup), esa es la imagen por defecto; al pasar el cursor
// (sin hacer click) se revela suavemente la fotografía directa de
// la pintura. Este comportamiento es exclusivo de la Home.
export default function ObrasMosaic({ obras }: { obras: Obra[] }) {
  return (
    <div className="flex flex-col gap-32 md:gap-48">
      {obras.map((obra) => {
        const tieneMockup = Boolean(obra.imagenMockup);
        return (
          <Reveal key={obra.slug} className="mx-auto w-full max-w-[920px]">
            <Link href={`/obras/${obra.slug}`} className="group block">
              <div
                className="relative overflow-hidden bg-[#E4DCCB]"
                style={{ aspectRatio: tieneMockup ? "1/1" : obra.aspectRatio }}
              >
                {tieneMockup && (
                  <Image
                    src={obra.imagenMockup!}
                    alt={`${obra.titulo} instalada en sala`}
                    fill
                    className="object-cover transition-opacity duration-[1100ms] ease-reveal group-hover:opacity-0"
                    sizes="(max-width: 768px) 100vw, 920px"
                  />
                )}
                {obra.imagenes[0] && (
                  <Image
                    src={obra.imagenes[0]}
                    alt={`${obra.titulo}, ${obra.anio}`}
                    fill
                    className={`object-cover transition-opacity duration-[1100ms] ease-reveal ${
                      tieneMockup
                        ? "opacity-0 group-hover:opacity-100"
                        : "opacity-100"
                    }`}
                    sizes="(max-width: 768px) 100vw, 920px"
                  />
                )}
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <p className="font-serif text-lg md:text-xl">
                  {obra.titulo}, {obra.anio}
                </p>
                <p className="text-xs tracking-wide text-muted shrink-0">
                  {obra.medidas}
                </p>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
