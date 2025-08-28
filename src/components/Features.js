import WhatsAppButton from "./WhatsApp";
import Image from "next/image";

export default function Features() {
  return (
    <section id="inicio" className="py-16 px-4 sm:px-8 lg:px-16 pt-25">
      <div className="max-w-7xl mx-auto">
        {/* Primera fila: Título principal */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight max-w-3xl">
            Toma el control de tus procesos y colaboradores
          </h1>
        </div>

        {/* Segunda fila: Botones y descripción lado a lado */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppButton
              phoneNumber="+528110137425"
              message="Hola, me interesa probar Tasker gratis"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg flex items-center gap-2 transition-colors duration-200"
            >
              Prueba Tasker gratis
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17l9.2-9.2M17 17V7H7"
                />
              </svg>
            </WhatsAppButton>
            <WhatsAppButton
              phoneNumber="+528110137425"
              message="Hola, me interesa agenda una visita sin costo"
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-full font-medium text-lg transition-colors duration-200 shadow-lg"
            >
              Agenda una visita sin costo
            </WhatsAppButton>
          </div>

          {/* Descripción */}
          <div className="lg:flex-1">
            <p className="text-gray-500 text-lg leading-relaxed font-normal max-w-md">
              Un sistema digital que ayuda a tu empresa a que las cosas sucedan,
              supervisa a tu equipo y monitorea los procesos en tiempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Features2() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Bloque 1: KPI Tracking */}
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center">
              <Image
                src="/Settings.svg"
                alt="KPI Tracking"
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-medium text-gray-900">
              Aumenta el cumplimiento de KPI&apos;s
            </h3>
          </div>
          <div className=" p-4">
            <Image
              src="/Chart 1.svg"
              alt="KPI Tracking"
              width={100}
              height={100}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Bloque 2: Team & Goals */}
        <div className="bg-gray-50 rounded-xl p-8 relative">
          <div className="mb-6">
            <div className="flex -space-x-2 mb-4">
              <Image
                src="/Empresas.png"
                alt="KPI Tracking"
                width={150}
                height={150}
              />
            </div>
            <p className="text-lg font-medium text-gray-900">
              33+ Empresas beneficiadas
            </p>
          </div>

          <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-medium mb-6 transition-colors duration-200">
            Llega a tus metas
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image
                src="/Add circle.svg"
                alt="Check"
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
            <span className="text-gray-700 font-normal">
              Perfecciona en tiempo real
            </span>
          </div>

          {/* Imagen superpuesta */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-xs font-medium text-blue-900 px-2">
              ÚNETE HOY Y ALCANZA TUS METAS
            </div>
          </div>
        </div>

        {/* Bloque 3: Modernization & Tasks */}
        <div className="bg-gray-50 rounded-xl p-8 h-full flex flex-col">
          <h3 className="text-xl font-medium text-gray-900 mb-6 flex-grow">
            Moderniza tu empresa, equipos y gestión de tareas
          </h3>
          <div className="mb-2">
            <div className="p-4">
              <Image
                src="/Chart 2.svg"
                alt="Modernization"
                width={150}
                height={150}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
