import {
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Github,
} from "lucide-react";

type LinkItem = { label: string; href: string };

const sitio: LinkItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const useCases: LinkItem[] = [
  { label: "UI design", href: "#" },
  { label: "UX design", href: "#" },
  { label: "Wireframing", href: "#" },
  { label: "Diagramming", href: "#" },
  { label: "Brainstorming", href: "#" },
  { label: "Team collaboration", href: "#" },
];

const explore: LinkItem[] = [
  { label: "Design", href: "#" },
  { label: "Prototyping", href: "#" },
  { label: "Design systems", href: "#" },
  { label: "Collaboration", href: "#" },
  { label: "Design process", href: "#" },
  { label: "FigJam", href: "#" },
];

const resources: LinkItem[] = [
  { label: "Blog", href: "#" },
  { label: "Best practices", href: "#" },
  { label: "Colors", href: "#" },
  { label: "Support", href: "#" },
  { label: "Developers", href: "#" },
  { label: "Resource library", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-blue-50 text-slate-800">
      {/* acento superior */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* marca + redes */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2">
              {/* logo simple (puedes reemplazar por <img src="/logo.svg" />) */}
              <img
                src="/logo7.png"
                alt="Pixelar Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="text-xl font-semibold tracking-tight">Pixelar</span>
            </div>

            <p className="mt-4 text-sm text-slate-600">
              Diseñamos y desarrollamos experiencias digitales con foco en
              resultados.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a aria-label="Twitter / X" href="#" className="rounded-full p-2 ring-1 ring-slate-300 hover:ring-orange-500 hover:text-orange-600 transition">
                <Twitter size={18} />
              </a>
              <a aria-label="Instagram" href="#" className="rounded-full p-2 ring-1 ring-slate-300 hover:ring-orange-500 hover:text-orange-600 transition">
                <Instagram size={18} />
              </a>
              <a aria-label="YouTube" href="#" className="rounded-full p-2 ring-1 ring-slate-300 hover:ring-orange-500 hover:text-orange-600 transition">
                <Youtube size={18} />
              </a>
              <a aria-label="LinkedIn" href="#" className="rounded-full p-2 ring-1 ring-slate-300 hover:ring-orange-500 hover:text-orange-600 transition">
                <Linkedin size={18} />
              </a>
              <a aria-label="GitHub" href="#" className="rounded-full p-2 ring-1 ring-slate-300 hover:ring-orange-500 hover:text-orange-600 transition">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* columnas de links */}
          <div className="md:col-span-9 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            <NavColumn title="Sitio" items={sitio} />
            <NavColumn title="Use cases" items={useCases} />
            <NavColumn title="Explore" items={explore} />
            <NavColumn title="Resources" items={resources} />
          </div>
        </div>

        {/* separador */}
        <div className="my-8 h-px w-full bg-slate-200" />

        {/* bottom bar */}
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row">
          <p className="text-sm text-slate-600">
            © {year} Pixelar. Todos los derechos reservados.
          </p>
          <div className="flex gap-5 text-sm">
            <a href="#" className="hover:text-orange-600">Privacidad</a>
            <a href="#" className="hover:text-orange-600">Términos</a>
            <a href="#" className="hover:text-orange-600">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NavColumn({ title, items }: { title: string; items: LinkItem[] }) {
  return (
    <nav>
      <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              className="text-sm text-slate-700 hover:text-orange-600 transition"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
