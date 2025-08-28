"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export function useScrollDirection() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingUp(false);
      }

      setLastScrollY(currentScrollY);
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return { scrollY, isScrollingUp };
}

export default function Navbar() {
  const { scrollY, isScrollingUp } = useScrollDirection();
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsExpanded, setIsProductsExpanded] = useState(false);

  const getTransformValue = () => {
    if (isScrollingUp) {
      return 0;
    } else if (scrollY <= 100) {
      return 0;
    } else {
      const scrollProgress = Math.min((scrollY - 100) / 100, 1);
      return -scrollProgress * 100;
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white h-20"
      style={{
        transform: `translateY(${getTransformValue()}%)`,
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8 w-full"
      >
        <div className="flex flex-1 justify-start">
          <a className="-m-1.5 p-1.5">
            <Image
              src="/Logotipo 2.svg"
              alt="Tasker Solutions"
              width={250}
              height={250}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              data-slot="icon"
              aria-hidden="true"
              className="size-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("inicio");
            }}
            className="text-lg/6 font-semibold text-gray-900"
          >
            Inicio
          </a>

          <a
            href="#producto"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("producto");
            }}
            className="text-lg/6 font-semibold text-gray-900"
          >
            Producto
          </a>
          <a
            href="#planes"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("planes");
            }}
            className="text-lg/6 font-semibold text-gray-900"
          >
            Planes
          </a>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contacto");
            }}
            className="text-lg/6 font-semibold text-gray-900"
          >
            Contacto
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <button className="px-4 py-2 text-sm/6 font-semibold text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
            Iniciar sesión <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Tasker Solutions</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6"
                  >
                    <path
                      d="M6 18 18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    <div className="-mx-3">
                      <button
                        type="button"
                        onClick={() =>
                          setIsProductsExpanded(!isProductsExpanded)
                        }
                        className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5"
                      >
                        Product
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          data-slot="icon"
                          aria-hidden="true"
                          className={`size-5 flex-none transition-transform ${
                            isProductsExpanded ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </button>
                      {isProductsExpanded && (
                        <div className="mt-2 block space-y-2">
                          <a
                            href="#"
                            className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                          >
                            Analytics
                          </a>
                          <a
                            href="#"
                            className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                          >
                            Engagement
                          </a>
                          <a
                            href="#"
                            className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                          >
                            Security
                          </a>
                          <a
                            href="#"
                            className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                          >
                            Integrations
                          </a>
                          <a
                            href="#"
                            className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                          >
                            Automations
                          </a>
                        </div>
                      )}
                    </div>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      Marketplace
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      Company
                    </a>
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
