import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ObraViewer from "@/components/ObraViewer";
import { getObraBySlug, getObras } from "@/lib/obras";

export function generateStaticParams() {
  return getObras().map((obra) => ({ slug: obra.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const obra = getObraBySlug(params.slug);
  if (!obra) return {};
  return {
    title: `${obra.titulo}, ${obra.anio} — Tadeo Andrada`,
  };
}

export default function ObraPage({ params }: { params: { slug: string } }) {
  const obra = getObraBySlug(params.slug);
  if (!obra) return notFound();

  return (
    <>
      <Nav />
      <section className="min-h-screen flex items-center px-6 md:px-28 py-40">
        <Reveal className="max-w-[760px] mx-auto w-full">
          <ObraViewer obra={obra} />

          {/* Caption debajo de la foto: título, técnica y medidas —
              lo que define a la obra a simple vista, sin ir a buscarlo
              a un costado. Deliberadamente callado frente a la imagen. */}
          <div className="mt-10 pb-10 border-b border-line">
            <h1 className="font-serif text-lg text-ink/80">
              {obra.titulo}
              {obra.serie ? `, ${obra.serie}` : ""}, {obra.anio}
            </h1>
            <p className="text-sm text-muted mt-2">
              {obra.tecnica} · {obra.medidas}
            </p>
          </div>

          {obra.disponibilidad && (
            <div className="mt-10">
              <dt className="text-[11px] uppercase tracking-[0.15em] text-muted mb-1">
                Disponibilidad
              </dt>
              <dd className="text-base">{obra.disponibilidad}</dd>
            </div>
          )}
        </Reveal>
      </section>
      <Footer />
    </>
  );
}
