export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-6 md:px-24 py-24 mt-32 border-t border-line">
      <span className="text-base">Tadeo Andrada</span>
      <div className="flex gap-8">
        <a
          href="mailto:andradatadeo98@gmail.com"
          className="text-sm text-muted hover:text-ink transition-colors"
        >
          Correo
        </a>
        <a
          href="https://www.instagram.com/tadeoandrada/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted hover:text-ink transition-colors"
        >
          Instagram
        </a>
        <a
          href="#"
          className="text-sm text-muted hover:text-ink transition-colors"
        >
          Portfolio PDF
        </a>
      </div>
    </footer>
  );
}
