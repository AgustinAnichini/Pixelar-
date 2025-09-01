import { User } from "lucide-react";
import { Fade } from "react-awesome-reveal";

type Step = {
  id: number;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  {
    id: 1,
    title: "Análisis y Estrategia",
    desc:
      "Nos sumergimos en la lógica de tu negocio, tu mercado y tus objetivos. Mediante una reunión, analizamos tus requerimientos y sugerimos las mejores estrategias para que tu sitio web atraiga y convierta usuarios.",
  },
  {
    id: 2,
    title: "Diseño y Propuesta",
    desc:
      "En esta etapa, te entregamos una propuesta de un prototipo o mockup que muestra el estilo, las secciones y la experiencia de usuario de tu sitio final. Trabajamos contigo, aceptando todas tus revisiones y sugerencias, hasta que el diseño sea exactamente lo que imaginaste.",
  },
  {
    id: 3,
    title: "Puesta en Marcha",
    desc:
      "Una vez que el diseño es aprobado, comenzamos la programación. Definimos un cronograma de entregas o pre-entregas para que veas el avance en tiempo real. Finalmente, nos encargamos de la gestión de dominio y hosting para que tu sitio esté listo para el mundo.",
  },
  {
    id: 4,
    title: "Soporte y Mantenimiento",
    desc:
      "Nuestro trabajo no termina en la entrega. Ofrecemos servicio de mantenimiento para asegurar que tu sitio funcione sin problemas, se mantenga actualizado y esté listo para futuras mejoras.",
  },
];

export default function NuestraMetodologia() {
  return (
    <section className="w-full bg-orange-50 py-16 sm:py-20" id="metodologia">
      {/* Header */}
      <Fade triggerOnce>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Nuestra metodología
          </h2>
          <p className="mt-2 text-gray-600">
            Cuatro Fases para el Éxito de tu Proyecto
          </p>
        </div>
      </Fade>
      {/* Grid */}
      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
         <Fade cascade triggerOnce>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => {
              const isAlt = i % 2 === 1; // 2da y 4ta tarjeta
              return (
                <article
                  key={s.id}
                  className={[
                    "relative flex h-full flex-col items-center rounded-2xl border",
                    "px-6 py-10 text-center shadow-sm transition-all",
                    "hover:-translate-y-0.5 hover:shadow-md",
                    isAlt
                      ? "bg-blue-900 text-white border-blue-800"
                      : "bg-white text-slate-900 border-slate-200",
                  ].join(" ")}
                >
                  {/* icono + número */}
                  <div className="mb-5 flex items-center gap-3">
                    <span
                      className={[
                        "inline-flex h-10 w-10 items-center justify-center rounded-full",
                        "ring-2 ring-orange-500",
                        isAlt ? "bg-white/10" : "bg-orange-50",
                      ].join(" ")}
                    >
                      <User className={isAlt ? "text-white" : "text-slate-800"} />
                    </span>
                    <span className="text-sm font-semibold text-orange-600">
                      {String(s.id).padStart(2, "0")}
                    </span>
                  </div>

                  <h3
                    className={[
                      "text-lg font-semibold",
                      isAlt ? "text-white" : "text-slate-900",
                    ].join(" ")}
                  >
                    {s.title}
                  </h3>

                  <p
                    className={[
                      "mt-3 text-sm leading-relaxed",
                      isAlt ? "text-white/85" : "text-slate-600",
                    ].join(" ")}
                  >
                    {s.desc}
                  </p>
                  
                </article>
              );
            })}
          </div>
        </Fade>
      </div>
    </section>
  );
}
