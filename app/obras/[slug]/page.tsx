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
      <section className="pt-40 md:pt-56 px-6 md:px-24 pb-32">
        <Reveal className="max-w-[720px] md:ml-[16.6%]">
          <ObraViewer obra={obra} />

          {/* Caption debajo de la foto: título, técnica y medidas —
              lo que define a la obra a simple vista, sin ir a buscarlo
              a un costado. */}
          <div className="mt-8 pb-8 border-b border-line">
            <h1 className="font-serif text-xl">
              {obra.titulo}
              {obra.serie ? `, ${obra.serie}` : ""}, {obra.anio}
            </h1>
            <p className="text-sm text-muted mt-2">
              {obra.tecnica} · {obra.medidas}
            </p>
          </div>

          {obra.disponibilidad && (
            <div className="mt-8">
              <dt className="text-xs uppercase tracking-widest text-muted mb-1">
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
