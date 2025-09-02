import { Fade, Slide } from "react-awesome-reveal";
import { Zap, Gauge, ShieldCheck, Search, ArrowRight, Timer, Rocket, Wrench, BadgeCheck } from "lucide-react";

export default function Soluciones() {
  return (
    <section
      id="soluciones"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--background-color)" }}
    >
      {/* Decoración sutil */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/30 blur-3xl" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 lg:gap-16">
        {/* Columna texto */}
        <div>
          <Fade cascade duration={500} triggerOnce>
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300/40 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
              Soluciones a Medida
            </span>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-900">
              Soluciones Digitales a Medida.
            </h2>

            <p className="mt-4 text-sm text-slate-700">
              <span className="font-semibold">
                Potenciamos la presencia digital de emprendedores y marcas
              </span>{" "}
              con sitios modernos, optimizados para UX y SEO. Somos Martín y
              Agustín, desarrolladores y diseñadores full-stack en Argentina,
              listos para llevar tu proyecto al siguiente nivel.
            </p>

            <p className="mt-4 text-sm text-slate-700">
              Cada negocio tiene su esencia y tu sitio debe reflejarla. Creamos
              soluciones totalmente personalizadas, alineadas con tus objetivos,
              tu lógica de negocio y tu identidad de marca.
            </p>

            {/* Chips de propuesta */}
            <ul className="mt-5 flex flex-wrap gap-2">
              {[
                "Diseño UX/UI",
                "Performance & SEO técnico",
                "Accesibilidad",
                "Implementación ágil",
              ].map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-slate-300/60 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {t}
                </li>
              ))}
            </ul>

            {/* Features con íconos */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Feature
                icon={<Zap className="h-5 w-5" />}
                title="Interfaces que convierten"
                desc="Layout limpio, foco en mensajes clave y llamados a la acción claros."
              />
              <Feature
                icon={<Gauge className="h-5 w-5" />}
                title="Rendimiento real"
                desc="Optimizamos velocidad y estabilidad: imágenes comprimidas, carga diferida y buenas prácticas Core Web Vitals."
              />
              <Feature
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Base sólida"
                desc="Arquitectura mantenible, seguridad y escalabilidad desde el día uno."
              />
              <Feature
                icon={<Search className="h-5 w-5" />}
                title="SEO técnico"
                desc="Etiquetado semántico, metadatos y velocidad para mejor indexación."
              />
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Ver servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300/70 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Solicitar propuesta
              </a>
            </div>

            {/* Firma + redes */}
            <div className="mt-6 text-sm text-slate-800">
              <p className="font-bold">Creando tu Marca Digital</p>
              <p>Martín & Agustín | Web & UX.</p>

              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.instagram.com/pixelarweb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-300/60 bg-white p-2 transition hover:bg-slate-50"
                  aria-label="Instagram"
                >
                  <img
                    src="./instagram-icon.svg"
                    alt="Instagram"
                    className="h-5 w-5"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/pixelarweb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-300/60 bg-white p-2 transition hover:bg-slate-50"
                  aria-label="LinkedIn"
                >
                  <img
                    src="./linkedin-icon.svg"
                    alt="LinkedIn"
                    className="h-5 w-5"
                  />
                </a>
              </div>
            </div>
          </Fade>
        </div>

        {/* Columna imagen */}
        <div className="relative">
          <Slide direction="right" triggerOnce>
            <figure className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
              <img
                src="./soluciones.webp"
                alt="Vitrinas responsive de proyectos web"
                className="h-auto w-full"
              />
              {/* Vineta y caption */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <figcaption className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-slate-900 backdrop-blur">
                Responsive • SEO Ready
              </figcaption>
            </figure>
          </Slide>

          {/* Mini-contendedores compactos (reemplazan los 3 anteriores) */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <MiniPill icon={<Timer className="h-4 w-4" />} title="Tiempos ágiles" />
            <MiniPill icon={<Rocket className="h-4 w-4" />} title="Ready to launch" />
            <MiniPill icon={<Wrench className="h-4 w-4" />} title="Soporte" />
            <MiniPill icon={<BadgeCheck className="h-4 w-4" />} title="Buenas prácticas" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Subcomponente --- */
function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-4 transition-shadow hover:shadow-lg">
      <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

/** Pill compacto: solo icono + título */
function MiniPill({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-3">
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-slate-900 text-white">
        {icon}
      </span>
      <span className="text-xs font-semibold text-slate-900">{title}</span>
    </div>
  );
}
