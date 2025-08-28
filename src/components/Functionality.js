import Image from "next/image";
import WhatsAppButton from "./WhatsApp";
export default function Functionality() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-16 bg-blue-900">
      <div className="max-w-7xl mx-auto">
        {/* Banner Superior */}
        <div className="text-center mb-8">
          <div className="inline-block bg-blue-100 text-gray-900 px-6 py-3 rounded-full font-medium text-lg mb-6">
            Digitalizamos tus actividades diarias
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white max-w-4xl mx-auto leading-tight">
            Más que gestión, es acción con precisión
          </h2>
        </div>

        {/* Contenido Principal - Dos Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna Izquierda - Visual */}
          <div className="relative">
            {/* Imagen del Teléfono */}
            <div className="relative">
              <div className=" h-auto mx-auto rounded-3xl p-4 shadow-lg">
                {/* Contenido de la app */}
                <Image
                  src="/Img.png"
                  alt="Phone"
                  width={500}
                  height={500}
                  className="w-[600px] h-[350px]"
                />
              </div>

              {/* Texto Superpuesto */}
              <div className="absolute -bottom-5 left-0 right-0 text-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Somos tu aliado 24x7x365
                  </h3>
                  <p className="text-sm text-gray-600 font-normal">
                    Procesos 100% personalizados por tarea, geografía o puesto
                    como los necesites.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Textual y CTA */}
          <div className="space-y-8">
            {/* Bloque de Contenido Azul Oscuro */}
            <div className="bg-blue-800 rounded-xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center">
                  <Image
                    src="/Icon.svg"
                    alt="Check"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-lg leading-relaxed font-normal">
                  Proporcionamos un sistema digital que ayuda a las
                  organizaciones a asegurarse que las cosas sucedan cuando y
                  como quieran, con evidencias.
                </p>
              </div>
            </div>

            {/* Bloque de Texto Adicional */}
            <div>
              <p className="text-white text-lg leading-relaxed font-normal">
                Tasker Solutions es una agencia especializada en la gestión
                remota de empleados y procesos.
              </p>
            </div>

            {/* Botón de Llamada a la Acción */}
            <WhatsAppButton
              phoneNumber="+528110137425"
              message="Hola, me interesa probar Tasker"
              className="border-2 border-blue-300 hover:border-blue-400 bg-white text-gray-900 px-8 py-4 rounded-lg font-medium text-lg flex items-center gap-2 transition-colors duration-200 group"
            >
              Contacto
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
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
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
