import Image from "next/image";
import Features from "@/components/Features";
import { Features2 } from "@/components/Features";
import Functionality from "@/components/Functionality";
import Management from "@/components/Management";
import KeyFeatures from "@/components/KeyFeatures";
import Pricing from "@/components/Pricing";
import AppDownload from "@/components/AppDownload";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Primera sección (Header, features)*/}
      <Features />
      <Features2 />
      {/* Segunda sección: Funcionalidad y Precisión */}
      <Functionality />

      {/* Tercera sección: Gestión y Control de Tareas */}
      <Management />

      {/* Cuarta sección: Características Clave */}
      <KeyFeatures />

      {/* Quinta sección: Tabla de Precios */}
      <Pricing />

      {/* Sexta sección: Descarga de la Aplicación */}
      <AppDownload />

      {/* Séptima sección: Contacto y Generación de Leads */}
      <ContactForm />
    </div>
  );
}
