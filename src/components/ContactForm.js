import Image from "next/image";
export default function ContactForm() {
  return (
    <section id="contacto" className="px-4 sm:px-8 lg:px-16 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Columna Izquierda - Texto y Formulario */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight">
                ¿Estás listo para gestionar tu equipo 10x más rápido?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-normal">
                Con Tasker, optimiza la productividad, organiza tareas y mejora
                el rendimiento de tu equipo de manera más ágil y eficiente.
                ¡Contáctanos y lleva tu productividad al siguiente nivel!
              </p>
            </div>

            {/* Formulario de Contacto */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Teléfono / Celular"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200">
                Enviar datos
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>

            {/* Información de Contacto Directo */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-sm mb-4">
                Si prefieres contactar directamente, puedes hacerlo a través de
                los siguientes medios:
              </p>
              <div className="space-y-2 text-gray-700">
                <p className="font-medium">(+52) 81 1013 7425</p>
                <p>México y Latinoamérica</p>
                <p className="font-medium">jcardenas@tskr.mx</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Imagen Placeholder */}
          <div className="flex justify-center items-center">
            <div className="w-100 h-100 rounded-xl flex items-center justify-center">
              <Image
                src="/Contact.png"
                alt="Profesional"
                width={1500}
                height={1500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
