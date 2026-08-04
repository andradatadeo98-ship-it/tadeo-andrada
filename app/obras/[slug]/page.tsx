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
      <section className="pt-40 md:pt-48 px-6 md:px-24 pb-24 grid grid-cols-1 md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-8">
          <ObraViewer obra={obra} />
        </Reveal>

        <Reveal className="md:col-span-4 border-t md:border-t-0 md:border-l border-line pt-8 md:pt-0 md:pl-12">
          <dl className="space-y-6">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted mb-1">
                Título
              </dt>
              <dd className="text-base">{obra.titulo}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted mb-1">
                Año
              </dt>
              <dd className="text-base">{obra.anio}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted mb-1">
                Técnica
              </dt>
              <dd className="text-base">{obra.tecnica}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted mb-1">
                Medidas
              </dt>
              <dd className="text-base">{obra.medidas}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted mb-1">
                Serie
              </dt>
              <dd className="text-base">{obra.serie}</dd>
            </div>
            {obra.disponibilidad && (
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted mb-1">
                  Disponibilidad
                </dt>
                <dd className="text-base">{obra.disponibilidad}</dd>
              </div>
            )}
          </dl>
        </Reveal>
      </section>
      <Footer />
    </>
  );
}
