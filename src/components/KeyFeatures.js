import Image from "next/image";
export default function KeyFeatures() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-16 bg-blue-900">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado Principal */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 text-gray-900 px-4 py-2 rounded-full font-medium text-sm mb-6">
            Ventajas de nuestro sistema digital
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
            Características clave
          </h2>
        </div>

        {/* Contenido Principal con Línea Conectiva e Imagen */}
        <div className="relative">
          {/* Línea vertical central - movida a la izquierda */}
          <div className="absolute left-8 w-0.5 h-full bg-white"></div>

          {/* Layout de dos columnas: características a la izquierda, imagen a la derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Columna Izquierda - Características */}
            <div className="ml-16 space-y-16">
              {/* Primera característica: Gestión de tareas */}
              <div className="relative">
                {/* Línea horizontal conectiva */}
                <div className="absolute left-0 top-8 w-8 h-0.5 bg-white transform -translate-x-8"></div>

                <div className="space-y-4">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src="/Gestion.svg"
                      alt="Tareas"
                      width={80}
                      height={80}
                      className="w-full h-auto"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    Gestión de tareas simplificada
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed font-normal">
                    Asigna actividades, supervisores y asegura el cumplimiento.
                  </p>
                </div>
              </div>

              {/* Segunda característica: Geolocalización */}
              <div className="relative">
                {/* Línea horizontal conectiva */}
                <div className="absolute left-0 top-8 w-8 h-0.5 bg-white transform -translate-x-8"></div>

                <div className="space-y-4">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src="/Geolocalizacion.svg"
                      alt="Geolocalización"
                      width={80}
                      height={80}
                      className="w-full h-auto"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    Geolocalización de colaboradores
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed font-normal">
                    Localiza a tus colaboradores en cualquier momento y lugar.
                  </p>
                </div>
              </div>

              {/* Tercera característica: Detección de errores */}
              <div className="relative">
                {/* Línea horizontal conectiva */}
                <div className="absolute left-0 top-8 w-8 h-0.5 bg-white transform -translate-x-8"></div>

                <div className="space-y-4">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src="/Errores.svg"
                      alt="Detección de errores"
                      width={80}
                      height={80}
                      className="w-full h-auto"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    Detección automática de errores
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed font-normal">
                    Anticipa y corrige fallos en el flujo de trabajo.
                  </p>
                </div>
              </div>
            </div>

            {/* Columna Derecha - Imagen Placeholder */}
            <div className="flex justify-center items-center">
              <div className="w-150 h-150 rounded-xl flex items-center justify-center">
                <Image
                  src="/Tareas.png"
                  alt="Características"
                  width={1500}
                  height={1500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Círculos conectivos en la línea central */}
          <div className="absolute left-8 w-4 h-4 bg-blue-900 border-2 border-white rounded-full top-8 transform -translate-x-1/2"></div>
          <div className="absolute left-8 w-4 h-4 bg-blue-900 border-2 border-white rounded-full top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-8 w-4 h-4 bg-blue-900 border-2 border-white rounded-full bottom-8 transform -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
}
