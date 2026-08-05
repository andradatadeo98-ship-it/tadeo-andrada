"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import type { Obra } from "@/lib/obras";

// Presentación de la Home: cada obra es su propia sala, casi a pantalla
// completa, con una única pausa visual entre una y la siguiente. Si la
// obra tiene una foto de instalación (imagenMockup), esa es la imagen
// por defecto; al pasar el cursor (sin hacer click) se revela
// suavemente la fotografía directa de la pintura. El texto queda
// deliberadamente chico y callado — la obra es lo único que debe
// llamar la atención. Este comportamiento es exclusivo de la Home.
export default function ObrasMosaic({ obras }: { obras: Obra[] }) {
  return (
    <div>
      {obras.map((obra) => {
        const tieneMockup = Boolean(obra.imagenMockup);
        return (
          <section
            key={obra.slug}
            className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24"
          >
            <Reveal className="w-full flex flex-col items-center">
              <Link
                href={`/obras/${obra.slug}`}
                className="group block w-[86vw] md:w-[82%] max-w-[1400px]"
              >
                <div
                  className="relative overflow-hidden bg-[#E4DCCB]"
                  style={{
                    aspectRatio: tieneMockup ? "1/1" : obra.aspectRatio,
                  }}
                >
                  {tieneMockup && (
                    <Image
                      src={obra.imagenMockup!}
                      alt={`${obra.titulo} instalada en sala`}
                      fill
                      className="object-cover transition-opacity duration-[1200ms] ease-reveal group-hover:opacity-0"
                      sizes="86vw"
                    />
                  )}
                  {obra.imagenes[0] && (
                    <Image
                      src={obra.imagenes[0]}
                      alt={`${obra.titulo}, ${obra.anio}`}
                      fill
                      className={`object-cover transition-opacity duration-[1200ms] ease-reveal ${
                        tieneMockup
                          ? "opacity-0 group-hover:opacity-100"
                          : "opacity-100"
                      }`}
                      sizes="86vw"
                    />
                  )}
                </div>
                <div className="mt-8 text-center">
                  <p className="font-serif text-base text-ink/80">
                    {obra.titulo}, {obra.anio}
                  </p>
                  <p className="text-xs text-muted mt-1">{obra.medidas}</p>
                </div>
              </Link>
            </Reveal>
          </section>
        );
      })}
    </div>
  );
}
