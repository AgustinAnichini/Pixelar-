// src/components/TechSlider.tsx
import 'devicon/devicon.min.css';

export default function TechSlider() {
  const techs = [
    { name: "iOS",        icon: "devicon-apple-original colored" },
    { name: "Android",    icon: "devicon-android-plain colored" },
    { name: "HTML",       icon: "devicon-html5-plain colored" },
    { name: "CSS",        icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "React",      icon: "devicon-react-original colored" },
    { name: "Angular",    icon: "devicon-angularjs-plain colored" },
    { name: "Java",       icon: "devicon-java-plain colored" },
    { name: "PHP",        icon: "devicon-php-plain colored" },
    { name: ".NET",       icon: "devicon-dotnetcore-plain colored" },
    { name: "Tailwind",   icon: "devicon-tailwindcss-plain colored" },
    { name: "SQL",        icon: "devicon-mysql-plain colored" },
    { name: "Postgres",   icon: "devicon-postgresql-plain colored" },
    { name: "Node",       icon: "devicon-nodejs-plain colored" },
    { name: "Docker",     icon: "devicon-docker-plain colored" },
  ];

  // duplicamos para que el loop sea continuo
  const loop = [...techs, ...techs];

  return (
    <section aria-labelledby="tech-slider" className="relative overflow-hidden py-14 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h3
          id="tech-slider"
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 text-center"
        >
          Tecnologías que usamos a diario
        </h3>

        {/* Contenedor claro */}
        <div className="relative mt-8 rounded-3xl border border-slate-200 bg-slate-100/80 px-6 py-8 shadow-lg overflow-hidden">
          {/* Fades laterales */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-100/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-100/80 to-transparent" />

          {/* Fila única con loop infinito */}
          <ul className="marquee flex min-w-max items-center gap-10 py-4">
            {loop.map((t, i) => (
              <li key={`${i}-${t.name}`} aria-label={t.name} title={t.name}>
                <i className={`${t.icon} text-6xl`} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* se mueve la mitad, y sigue con la otra mitad */
        }
        .marquee {
          display: flex;
          animation: marquee-left 40s linear infinite;
          will-change: transform;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
