import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = { 
  title: "Tasker Solutions",
  description: "Tasker Solutions es una agencia especializada en la gestión remota de empleados y procesos.",
  keywords: ["Tasker Solutions", "Gestión remota", "Empleados", "Procesos"],
  authors: [{ name: "Tasker Solutions", url: "https://tskr.mx" }],
  creator: "Tasker Solutions",
  publisher: "Tasker Solutions",
  openGraph: {
    title: "Tasker Solutions",
    description: "Tasker Solutions es una agencia especializada en la gestión remota de empleados y procesos.",
  },
  verification: {
    google: "ujehsH9iz-XbmvolKWLAwlCAl8-Env_2PtSphgJ_wF8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
