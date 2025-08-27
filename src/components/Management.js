import Image from "next/image";
export default function Management() {
  return (
    <section id="producto" className="px-4 sm:px-8 lg:px-16 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Columna Izquierda - Título y Etiqueta */}
          <div>
            <div className="inline-block bg-blue-100 text-gray-900 px-4 py-2 rounded-full font-medium text-sm mb-6">
              Sistema digital
            </div>
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Gestión y control de tareas en tiempo real
            </h2>
          </div>

          {/* Columna Derecha - Descripción */}
          <div className="flex items-center justify-center lg:justify-start">
            <p className="text-gray-600 text-lg leading-relaxed font-normal max-w-md">
              Es una app en tu celular, computadora o tablet que facilita el
              seguimiento y cumplimiento, en donde puedes asignar tareas,
              asignar quien supervisa y recibir reportes de cumplimiento en
              tiempo real.
            </p>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-b border-gray-200 mb-2"></div>

        {/* Primer Bloque de Características: Reporteo y Análisis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-2">
          {/* Columna Izquierda - Contenido */}
          <div className="space-y-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src="/Reportes.svg"
                alt="Reportes y análisis inteligentes"
                width={80}
                height={80}
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-3xl font-semibold text-gray-900">
              Reportes y análisis inteligentes
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed font-normal">
              Recibe informes detallados y toma decisiones con datos precisos.
            </p>
          </div>

          {/* Columna Derecha - Imagen */}
          <div className="relative">
            <div className=" p-4">
              <div className="w-120 h-120 rounded-xl flex items-center justify-center">
                <Image
                  src="/Analisis.png"
                  alt="Reportes y análisis inteligentes"
                  width={1500}
                  height={1500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-b border-gray-200 mb-2"></div>

        {/* Segundo Bloque de Características: Evidencias Fotográficas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-2">
          {/* Columna Izquierda - Contenido */}
          <div className="space-y-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src="/Tareas.svg"
                alt="Tareas"
                width={80}
                height={80}
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-3xl font-semibold text-gray-900">
              Evidencias fotográfica al instante
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed font-normal">
              Captura y sube fotos como prueba del trabajo realizado.
            </p>
          </div>

          {/* Columna Derecha - Imagen */}
          <div className="relative">
            <div className=" p-4">
              <div className="w-120 h-120 rounded-xl flex items-center justify-center">
                <Image
                  src="/Evidencias.png"
                  alt="Reportes y análisis inteligentes"
                  width={1500}
                  height={1500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
