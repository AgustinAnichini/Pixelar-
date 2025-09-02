import { Fade } from "react-awesome-reveal";
import { PenTool, MonitorSmartphone, Component, SearchCheck, CheckCircle2 } from "lucide-react";

export default function Servicios() {
    return (
        <section id="servicios" className="flex flex-col md:flex-row min-h-[90vh]">
            <div className="relative md:w-1/2 h-[48vh] md:h-auto">
                <img
                    src="/servicios.avif"
                    alt="Servicios Pixelar — laptop con dashboard"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black/20 to-transparent" />
            </div>

            {/* Columna contenido */}
            <div
                className="md:w-1/2 px-8 py-12 md:px-16 md:py-16 text-white flex items-center"
                style={{ backgroundColor: "var(--primary-color)" }}
            >
                <div className="w-full max-w-xl">
                    <Fade cascade triggerOnce duration={900}>
                        {/* Eyebrow */}
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                            Nuestros servicios
                        </span>

                        <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                            Nuestros servicios.
                        </h2>

                        <p className="mt-3 text-sm text-white/85">
                            Diseñamos y desarrollamos sitios rápidos, accesibles y listos para posicionar.
                            Acompañamos cada etapa, de la identidad al lanzamiento.
                        </p>

                        {/* Lista de servicios */}
                        <ul className="mt-8 space-y-6">
                            <ServicioItem
                                icon={<PenTool className="h-5 w-5" />}
                                title="Diseño integral"
                                desc="Construcción de identidad y sistema visual aplicado a piezas digitales."
                            />
                            <ServicioItem
                                icon={<MonitorSmartphone className="h-5 w-5" />}
                                title="Diseño web"
                                desc="Webs a medida, landings e institucionales con foco en performance."
                            />
                            <ServicioItem
                                icon={<Component className="h-5 w-5" />}
                                title="Diseño UX"
                                desc="Arquitectura de información, prototipos y pruebas para maximizar conversión."
                            />
                            <ServicioItem
                                icon={<SearchCheck className="h-5 w-5" />}
                                title="SEO"
                                desc="SEO técnico, metadatos y buenas prácticas para una indexación limpia."
                                last
                            />
                        </ul>

                        {/* Checklist breve */}
                        <div className="mt-8 grid grid-cols-1 gap-2 text-sm text-white/90 sm:grid-cols-2">
                            {[
                                "Proceso transparente",
                                "Core Web Vitals en verde",
                                "Accesibilidad AA",
                                "Soporte y evolutivos opcionales",
                            ].map((t) => (
                                <div key={t} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4" />
                                    <span>{t}</span>
                                </div>
                            ))}
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}

/* ---- Subcomponente ---- */
function ServicioItem({
    icon,
    title,
    desc,
    last = false,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
    last?: boolean;
}) {
    return (
        <li
            className={`group relative grid grid-cols-[auto,1fr] gap-4 pb-6 ${last ? "" : "border-b border-white/15"
                }`}
        >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/15 backdrop-blur text-white">
                {icon}
            </span>
            <div className="transition-transform group-hover:translate-x-0.5">
                <p className="text-lg font-semibold">{title}</p>
                <p className="mt-1 text-sm text-white/80">{desc}</p>
            </div>
            <span className="pointer-events-none absolute -bottom-[1px] left-0 right-0 h-px origin-left scale-x-0 bg-white/50 transition-transform duration-300 group-hover:scale-x-100" />
        </li>
    );
}
