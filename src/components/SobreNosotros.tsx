export default function SobreNosotros() {
  return (
    <section className="w-full" id="nosotros">
      {/* Grid full width */}
      <div className="grid w-full overflow-hidden shadow-xl ring-1 ring-black/10 md:grid-cols-2">
        {/* Columna izquierda - Texto */}
        <div className="relative bg-orange-600 text-white flex items-center">
          {/* Decoración difusa */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rotate-12 rounded-3xl bg-white/10 blur-2xl"
          />
          <div className="relative px-8 md:px-16 lg:px-24 py-16 max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-white/80">
              Sobre nosotros
            </p>
            <h2 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl">
              Creamos soluciones digitales con foco en resultados.
            </h2>

            <p className="mt-6 font-semibold mb-4">
              Somos Martín y Agustín, dos desarrolladores web unidos por la
              pasión de crear soluciones digitales que impulsan a los
              emprendedores.
            </p>

            <div className="space-y-4 text-white/95">
              <p>
                Nos conocimos mientras estudiábamos desarrollo web en la UNLaM y
                desde entonces colaboramos en diversos proyectos que pusieron a
                prueba nuestra creatividad y habilidades. Nuestra formación
                académica, combinada con un aprendizaje constante, nos permite
                dominar las últimas tecnologías para ofrecer soluciones
                innovadoras.
              </p>
              <p>
                Nos especializamos en trabajar con pequeñas y medianas empresas,
                creando sitios web a medida que reflejan la identidad de cada
                marca.
              </p>
              <p>
                Actualmente, ofrecemos nuestros servicios como Diseñadores Web
                Freelance desde Argentina, apoyando la transformación digital de
                pymes y emprendedores y ayudándoles a potenciar sus negocios en
                internet.
              </p>
            </div>

            {/* Chips de áreas */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Frontend", "Backend", "Diseño", "SEO técnico"].map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white/15 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Columna derecha - Imagen */}
        <div className="relative bg-blue-900">
          <img
            src="/extras.jpg" // 👉 cambia por tu imagen real en /public
            alt="Sobre nosotros"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
          <div className="invisible h-[320px] md:visible md:h-full" />
        </div>
      </div>
    </section>
  );
}
