"use client";

import { useState } from "react";
import Image from "next/image";
import type { Obra } from "@/lib/obras";

export default function ObraViewer({ obra }: { obra: Obra }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const activeImage = obra.imagenes[activeIndex];

  return (
    <div>
      <div
        className={`relative w-full rounded-sm overflow-hidden bg-[#E4DCCB] cursor-zoom-in ${
          zoomed ? "cursor-zoom-out" : ""
        }`}
        style={{ aspectRatio: obra.aspectRatio }}
        onClick={() => setZoomed((z) => !z)}
      >
        <Image
          src={activeImage}
          alt={`${obra.titulo}, ${obra.anio}`}
          fill
          className={`object-cover transition-transform duration-500 ${
            zoomed ? "scale-150" : "scale-100"
          }`}
          sizes="(max-width: 768px) 100vw, 66vw"
          priority
        />
      </div>

      {/*
        Nota de implementación: para un zoom de alta resolución real
        (acercarse a la textura de la pincelada sin cargar una imagen
        gigante), reemplazar este bloque por una librería de tiles
        como OpenSeadragon, sirviendo las imágenes en formato DZI.
      */}

      {obra.imagenes.length > 1 && (
        <div className="flex gap-3 mt-4">
          {obra.imagenes.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveIndex(i)}
              className={`relative w-16 h-16 rounded-sm overflow-hidden border transition-colors ${
                i === activeIndex ? "border-ink" : "border-line"
              }`}
              aria-label={`Ver fotografía ${i + 1}`}
            >
              <Image src={img} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
