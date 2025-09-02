import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll suave
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  const base = "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b";
  const transparent =
    "bg-transparent/40 backdrop-blur-sm border-transparent text-white";
  const solid =
    "bg-white/95 backdrop-blur-sm border-slate-200 text-slate-900 shadow-md";

  const linkBase = "relative py-2 px-3 text-sm font-medium transition-colors";
  const linkHover = "hover:text-primary-600";
  const underline =
    "after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[2px] after:rounded-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 " +
    (scrolled
      ? "after:bg-slate-900 group-hover:after:scale-x-100"
      : "after:bg-white group-hover:after:scale-x-100");

  return (
    <header className={`${base} ${scrolled ? solid : transparent}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-2">
          <span
            className={`text-2xl font-semibold tracking-tight ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            Pixelar
          </span>
          <span
            className={`h-2 w-2 rounded-full ${
              scrolled ? "bg-slate-900" : "bg-white"
            }`}
            aria-hidden
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center">
            {links.slice(0, -1).map((l) => (
              <li key={l.href} className="group">
                <a
                  href={l.href}
                  onClick={(e) => handleNav(e, l.href)}
                  className={`${linkBase} ${linkHover} ${underline} ${
                    scrolled
                      ? "text-slate-700 hover:text-slate-900"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Contacto */}
          <ContactCTA
            href="#contacto"
            onClick={(e) => handleNav(e, "#contacto")}
            variant={scrolled ? "dark" : "light"}
            className="ml-4"
          />
        </div>

        {/* Mobile button */}
        <button
          className={`md:hidden rounded-lg p-2 transition-colors ${
            scrolled
              ? "text-slate-900 hover:bg-slate-100"
              : "text-white/90 hover:bg-white/10"
          }`}
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        } ${scrolled ? "bg-white/95 border-t border-slate-200" : "bg-black/60 backdrop-blur-sm"}`}
      >
        <ul className="space-y-1 px-5 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                  scrolled
                    ? "text-slate-800 hover:bg-slate-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes sheen {
          0% { transform: translateX(-150%) skewX(-15deg); opacity: 0; }
          50% { opacity: .6; }
          100% { transform: translateX(150%) skewX(-15deg); opacity: 0; }
        }
        @keyframes pulseGlowWhite {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,.35); }
          50% { box-shadow: 0 0 0 10px rgba(255,255,255,0); }
        }
        @keyframes pulseGlowOrange {
          0%, 100% { box-shadow: 0 0 0 0 rgba(234,88,12,.55); }
          50% { box-shadow: 0 0 0 10px rgba(234,88,12,0); }
        }
      `}</style>
    </header>
  );
}

function ContactCTA({
  href,
  onClick,
  variant = "light",
  className = "",
}: {
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  variant?: "light" | "dark";
  className?: string;
}) {
  const isLight = variant === "light";
  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        "relative inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "hover:-translate-y-[1px] hover:shadow-lg active:translate-y-0",
        isLight
          ? "bg-white text-slate-900 focus-visible:ring-white/60 focus-visible:ring-offset-transparent"
          : "bg-slate-900 text-white focus-visible:ring-orange-600/60 focus-visible:ring-offset-white",
        className,
      ].join(" ")}
      style={{
        borderRadius: 12,
      }}
    >
      <span className="relative z-[1]">Contacto</span>

      <span
        className="anim-sheen pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
        aria-hidden="true"
      >
        <span
          className="absolute top-0 left-0 h-full w-1/3 opacity-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.55) 50%, rgba(255,255,255,0) 100%)",
            filter: "blur(6px)",
            animation: "sheen 2.6s linear infinite",
            animationDelay: "0.4s",
          }}
        />
      </span>

      {/* Halo dinámico */}
      <span
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          animation: `${isLight ? "pulseGlowWhite" : "pulseGlowOrange"} 2.4s ease-in-out infinite`,
          border: isLight
            ? "1px solid rgba(255,255,255,.4)"
            : "1px solid rgba(234,88,12,.6)",
        }}
      />
    </a>
  );
}
