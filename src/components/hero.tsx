import { useCallback } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section className="relative isolate h-[100vh] min-h-[560px] w-full">

      <img
        src="/pcManos.jpg"
        alt="Diseño digital en laptop sobre escritorio"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">

        <h1 className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
          Diseño, Sitios Web y Apps <span className="whitespace-nowrap">(iOS &amp; Android)</span> que impulsan tu marca.
        </h1>

        <p
          className="mt-6 max-w-3xl text-sm md:text-base font-medium text-white leading-relaxed
                     drop-shadow-[0_0_14px_rgba(234,88,12,0.85)]"
        >
          Creamos identidades y productos digitales de alto rendimiento:{" "}
          <span className="font-semibold">websites a medida, e-commerce y aplicaciones móviles nativas/híbridas.</span>{" "}
          Enfocados en <span className="font-semibold">UX, velocidad y conversión</span> para hacer crecer tu negocio.
        </p>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("#soluciones")}
            className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.28)] active:scale-[0.98]"
          >
            Conocé más
          </button>

          <button
            onClick={() => scrollTo("#contacto")}
            className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            Hablemos
          </button>
        </div>
      </div>

      <ul className="absolute bottom-36 left-1/2 z-10 -translate-x-1/2 flex flex-wrap items-center justify-center gap-3 text-xs text-white/80 px-6">
        {[
          "Performance & SEO técnico",
          "UX/UI moderno",
          "Implementación ágil",
          "Apps iOS & Android",
        ].map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-white/10"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <button
          aria-label="Ir a la siguiente sección"
          onClick={() => scrollTo("#soluciones")}
          className="group relative grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition hover:bg-white/20"
        >
          <ChevronDown className="h-6 w-6 text-white transition-transform group-hover:translate-y-0.5" />
          <span className="absolute inset-0 rounded-full ring-2 ring-white/25 animate-ping" />
        </button>
      </div>
    </section>
  );
}
