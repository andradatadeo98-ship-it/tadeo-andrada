import obrasData from "@/data/obras.json";

export type Obra = {
  slug: string;
  titulo: string;
  anio: number;
  tecnica: string;
  medidas: string;
  serie: string;
  disponibilidad?: string;
  imagenes: string[];
  imagenMockup?: string;
  aspectRatio: string;
  destacada?: boolean;
};

export function getObras(): Obra[] {
  // Orden: más reciente primero. Para reordenar el catálogo,
  // basta con reordenar las entradas en data/obras.json.
  return [...(obrasData as Obra[])].sort((a, b) => b.anio - a.anio);
}

export function getObraBySlug(slug: string): Obra | undefined {
  return (obrasData as Obra[]).find((o) => o.slug === slug);
}

export function getObrasDestacadas(): Obra[] {
  return getObras().filter((o) => o.destacada);
}
