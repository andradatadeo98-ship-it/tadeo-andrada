"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/obras", label: "Obras" },
  { href: "/practica", label: "Práctica" },
  { href: "/cv", label: "CV" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-end items-center px-6 md:px-24 py-8 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <ul className="flex gap-10">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-xs tracking-widest uppercase text-ink/75 hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
