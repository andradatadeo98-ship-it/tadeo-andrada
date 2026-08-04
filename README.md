# Tadeo Andrada — sitio del artista

Dirección creativa "Respiración": grilla asimétrica, ritmo pausado, la
interfaz nunca compite con la pintura. Ver especificación completa
acordada en el proceso de diseño (grilla, tipografía, paleta, scroll).

## Instalación

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Estructura

- `app/` — páginas (Next.js App Router): Home, Obras, ficha de obra,
  Práctica, CV, Contacto.
- `components/` — Nav, Footer, Reveal (scroll reveal), Hero (parallax),
  ObrasMosaic, ObraViewer.
- `data/obras.json` — el catálogo completo. Cargar una obra nueva NO
  requiere tocar ningún componente.
- `lib/obras.ts` — helpers tipados para leer `obras.json`.
- `public/images/` — imágenes de obra. Reemplazar los placeholders
  generados (`hero-detail.jpg`, `placeholder-1.jpg`, etc.) por
  fotografías reales en buena resolución.

## Cómo agregar una obra nueva

1. Subir la(s) foto(s) a `public/images/`.
2. Agregar una entrada en `data/obras.json`:

```json
{
  "slug": "identificador-unico-2026",
  "titulo": "Título de la obra",
  "anio": 2026,
  "tecnica": "Óleo sobre lienzo",
  "medidas": "100 × 80 cm",
  "serie": "Nombre de la serie",
  "disponibilidad": "Consultar",
  "imagenes": ["/images/mi-obra.jpg"],
  "aspectRatio": "4/3",
  "destacada": false
}
```

3. Listo — aparece automáticamente en `/obras` y genera su propia
   ficha en `/obras/[slug]`. `destacada: true` la suma también al
   teaser de la Home.

`aspectRatio` debe reflejar la proporción real de la obra (ej. "4/3",
"3/4", "1/1") — es lo que sostiene el mosaico irregular en vez de
recortes forzados.

## Pendiente

- Texto curatorial real para `/practica` (hoy hay un placeholder
  marcado con TODO en `app/practica/page.tsx`).
- Cronología real del CV (`app/cv/page.tsx`).
- Enlaces reales de Instagram y portfolio PDF (`components/Footer.tsx`
  y `app/contacto/page.tsx`).
- Reemplazar la fuente General Sans (vía Google Fonts) si ya tenés una
  tipografía con licencia definida.
- Para el zoom de alta resolución en la ficha de obra, la implementación
  actual es un escalado simple con CSS — está señalado en
  `components/ObraViewer.tsx` dónde integrar una librería de tiles
  (tipo OpenSeadragon) cuando haya fotos de muy alta resolución.
