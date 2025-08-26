import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  image: string;
  url?: string;
  description?: string;
  tags?: string[];
};

function ProjectCard({ project }: { project: Project }) {
  const CardInner = (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md"
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="h-44 w-full object-cover sm:h-52 md:h-56"
          loading="lazy"
        />
        <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10 bg-black" />
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-6 text-gray-900 line-clamp-1">
            {project.title}
          </h3>
          {project.url && (
            <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 group-hover:bg-gray-200">
              Ver
              <ExternalLink size={14} />
            </span>
          )}
        </div>

        {project.description && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {project.description}
          </p>
        )}

        {project.tags && project.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="block focus:outline-none"
      >
        {CardInner}
      </a>
    );
  }

  return CardInner;
}

export default function PortfolioGrid() {
  const projects: Project[] = [
    {
      id: "1",
      title: "Gestión de Gastos",
      image: "https://picsum.photos/600/400?random=1",
      url: "https://ejemplo.com/gastos",
      description: "App para gestionar gastos en tiempo real.",
      tags: ["React.js", "Tailwind"],
    },
    {
      id: "2",
      title: "Raco De Loix",
      image: "https://picsum.photos/600/400?random=2",
      url: "https://ejemplo.com/raco",
      description: "Sitio web de la marca Raco De Loix.",
      tags: ["React", "Node"],
    },
    {
      id: "3",
      title: "Adopets",
      image: "https://picsum.photos/600/400?random=3",
      url: "https://ejemplo.com/adopets",
      description: "Plataforma para adopción de mascotas.",
      tags: ["Laravel", "MySQL"],
    },
    {
      id: "4",
      title: "Pixelar Portfolio",
      image: "https://picsum.photos/600/400?random=4",
      url: "https://ejemplo.com/pixelar",
      description: "Portfolio personal moderno y responsivo.",
      tags: ["Next.js", "Framer Motion"],
    },
    {
      id: "5",
      title: "E-commerce Sneakers",
      image: "https://picsum.photos/600/400?random=5",
      url: "https://ejemplo.com/sneakers",
      description: "Tienda online de zapatillas urbanas.",
      tags: ["Shopify", "UX/UI"],
    },
    {
      id: "6",
      title: "Blue Bridge Academy",
      image: "https://picsum.photos/600/400?random=6",
      url: "https://ejemplo.com/academy",
      description: "Academia de idiomas con cursos online.",
      tags: ["WordPress", "Elementor"],
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Nuestros trabajos
        </h2>
        <p className="mt-2 text-gray-600">
          Algunos proyectos recientes que diseñamos y desarrollamos.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
