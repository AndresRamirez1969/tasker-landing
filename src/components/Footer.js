import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white w-full">
      <div className="px-4 sm:px-8 lg:px-16 py-12 w-full">
        {/* Sección Principal del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Información de la Empresa */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                Tasker
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Tasker Solutions es una agencia especializada en la gestión remota
              de empleados y procesos.
            </p>
          </div>

          {/* Navegación */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Navegación</h3>
            <div className="space-y-2">
              <a
                href="#inicio"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
              >
                Inicio
              </a>
              <a
                href="#producto"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
              >
                Producto
              </a>
              <a
                href="#planes"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
              >
                Planes
              </a>
              <a
                href="#contacto"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Espacio para futuras secciones */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Línea Divisoria */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-600">
              Copyright © 2025 Tasker Solutions Enterprise | Todos los derechos
              reservados.
            </div>

            {/* Redes Sociales */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <span className="text-sm font-semibold">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <span className="text-sm font-semibold">in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
