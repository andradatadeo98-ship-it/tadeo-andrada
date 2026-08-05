import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/obras", label: "Obras" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contacto", label: "Contacto" },
];

// Encabezado único y permanente del sitio: el nombre funciona como
// logotipo, en la misma línea que la navegación, separada por puntos
// medios — un renglón, discreto, que nunca se impone sobre las obras.
export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/70 backdrop-blur-sm px-6 md:px-10 py-6 md:py-7">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <Link href="/" className="font-serif text-[17px] md:text-[19px] text-ink">
          Tadeo Andrada
        </Link>
        <ul className="flex items-baseline gap-x-2.5 text-[11px] tracking-[0.15em] uppercase text-ink/50">
          {links.map((link, i) => (
            <li key={link.href} className="flex items-baseline gap-x-2.5">
              {i > 0 && <span aria-hidden="true">·</span>}
              <Link
                href={link.href}
                className="hover:text-ink/90 transition-colors duration-500"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
