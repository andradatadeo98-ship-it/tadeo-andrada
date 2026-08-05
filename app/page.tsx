import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ObrasMosaic from "@/components/ObrasMosaic";
import { getObrasDestacadas } from "@/lib/obras";

export default function Home() {
  const destacadas = getObrasDestacadas();

  return (
    <>
      <Nav />

      {/* Sin frase introductoria ni título de sección: la primera
          obra funciona como portada. Lo primero que se ve es la
          pintura, a escala monumental — no el comienzo de una lista. */}
      <ObrasMosaic obras={destacadas} />

      <Footer />
    </>
  );
}
