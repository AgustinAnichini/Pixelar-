import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactoSection() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nombre = String(form.get("nombre") || "");
    const correo = String(form.get("correo") || "");
    const telefono = String(form.get("telefono") || "");
    const mensaje = String(form.get("mensaje") || "");

    if (!nombre || !correo || !mensaje) {
      setStatus("error");
      return;
    }
    // acá podrías llamar a tu API / Email / Formspree / Resend / etc.
    console.log({ nombre, correo, telefono, mensaje });
    setStatus("ok");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <section className="relative w-full">
      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/pcManos.jpg" // 👉 poné tu imagen en /public/contact-bg.jpg
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        {/* degradé sutil de marca */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-orange-900/20" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        {/* Card “glass” */}
        <div className="rounded-3xl bg-white/5 p-6 backdrop-blur-md ring-1 ring-white/10 md:p-10">
          <header className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Contáctanos
            </h2>
            <p className="mt-2 text-white/80">
              ¿Tenés una idea en mente? Hablemos y armamos el plan.
            </p>
          </header>

          {/* Mensajes de estado */}
          {status === "ok" && (
            <div className="mb-6 rounded-xl bg-green-500/15 px-4 py-3 text-green-200 ring-1 ring-green-400/30">
              ¡Mensaje enviado! Te responderemos a la brevedad.
            </div>
          )}
          {status === "error" && (
            <div className="mb-6 rounded-xl bg-red-500/15 px-4 py-3 text-red-200 ring-1 ring-red-400/30">
              Completá al menos nombre, correo y mensaje.
            </div>
          )}

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Nombre */}
            <div className="flex flex-col">
              <label htmlFor="nombre" className="mb-2 text-white/90">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                className="border-b border-white/40 bg-transparent py-3 text-white placeholder-white/60 outline-none transition focus:border-orange-400"
              />
            </div>

            {/* Teléfono */}
            <div className="flex flex-col">
              <label htmlFor="telefono" className="mb-2 text-white/90">
                Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="+54 9 ..."
                className="border-b border-white/40 bg-transparent py-3 text-white placeholder-white/60 outline-none transition focus:border-orange-400"
              />
            </div>

            {/* Correo (fila completa en md) */}
            <div className="md:col-span-2 flex flex-col">
              <label htmlFor="correo" className="mb-2 text-white/90">
                Correo
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                placeholder="tuemail@correo.com"
                className="border-b border-white/40 bg-transparent py-3 text-white placeholder-white/60 outline-none transition focus:border-orange-400"
              />
            </div>

            {/* Mensaje */}
            <div className="md:col-span-2 flex flex-col">
              <label htmlFor="mensaje" className="mb-2 text-white/90">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                placeholder="Contanos un poco sobre tu proyecto..."
                className="border-b border-white/40 bg-transparent py-3 text-white placeholder-white/60 outline-none transition focus:border-orange-400"
              />
            </div>

            {/* CTA */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:-translate-y-0.5 hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                <Send size={18} />
                Enviar mensaje
              </button>
            </div>
          </form>

          {/* Datos/whatsapp opcional */}
          <div className="mt-6 text-sm text-white/70">
            También podés escribirnos por WhatsApp o mail directo:
            <span className="ml-2 underline decoration-orange-400 decoration-2 underline-offset-4">
              hola@pixelar.dev
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
